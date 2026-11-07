// Cloudflare Worker: permanent apex -> www redirect, everything else served from static assets.
export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.hostname === 'alterity.io') {
      url.hostname = 'www.alterity.io'
      return Response.redirect(url.toString(), 301)
    }
    return env.ASSETS.fetch(request)
  },
}
