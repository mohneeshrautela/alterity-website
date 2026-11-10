// Cloudflare Worker: canonicalises public URLs to https://www.alterity.io/<path> (no trailing slash),
// sets security and caching headers, and serves everything else from static assets.

const CANONICAL_HOST = 'www.alterity.io'
// Only these hosts are canonicalised. localhost, *.workers.dev and previews are served as-is.
const MANAGED_HOSTS = new Set(['alterity.io', 'www.alterity.io'])

// One URL per page: /index.html -> /, /foo/index.html -> /foo, /pricing/ -> /pricing, / stays /.
function canonicalPath(pathname) {
  const path = pathname.replace(/\/index\.html$/, '/').replace(/\/+$/, '')
  return path || '/'
}

// Returns a single 301 straight to the final canonical URL, or null when none is needed.
function canonicalRedirect(url) {
  // On Cloudflare, url.protocol is the visitor's scheme. No header check, so no redirect-loop risk.
  const viaHttp = url.protocol === 'http:'
  const target = new URL(`https://${CANONICAL_HOST}${canonicalPath(url.pathname)}${url.search}`)
  if (viaHttp || target.href !== url.href) return Response.redirect(target.href, 301)
  return null
}

// Copies the asset response (status and body untouched) and adds headers.
function withHeaders(res, url) {
  const out = new Response(res.body, res)
  // HSTS only on the canonical HTTPS host. No includeSubDomains or preload.
  if (url.protocol === 'https:' && url.hostname === CANONICAL_HOST) {
    out.headers.set('Strict-Transport-Security', 'max-age=31536000')
  }
  // Vite content-hashed bundles never change, so they can be cached for a year.
  if (res.status === 200 && url.pathname.startsWith('/assets/')) {
    out.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  return out
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    // Only GET and HEAD are redirected. Other methods are passed through to assets.
    const isReadRequest = request.method === 'GET' || request.method === 'HEAD'
    if (isReadRequest && MANAGED_HOSTS.has(url.hostname)) {
      const redirect = canonicalRedirect(url)
      if (redirect) return redirect
    }
    const res = await env.ASSETS.fetch(request)
    return withHeaders(res, url)
  },
}
