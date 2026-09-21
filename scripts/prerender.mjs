import fs from 'node:fs/promises'
import path from 'node:path'
import { createServer } from 'vite'
import { publicRoutes, SEO_ROUTES, SITE_URL } from '../src/seo/routes.js'

const root = process.cwd()
const template = await fs.readFile(path.join(root, 'dist/index.html'), 'utf8')
const vite = await createServer({ root, server: { middlewareMode: true }, appType: 'custom' })
const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')

const esc = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
for (const route of publicRoutes) {
  const meta = SEO_ROUTES[route]
  const canonical = `${SITE_URL}${route === '/' ? '/' : route}`
  const appHtml = render(route)
  const tags = `
    <meta name="description" content="${esc(meta.description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${esc(meta.title)}" />
    <meta property="og:description" content="${esc(meta.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${SITE_URL}/1-og-image.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(meta.title)}" />
    <meta name="twitter:description" content="${esc(meta.description)}" />
    <meta name="twitter:image" content="${SITE_URL}/1-og-image.png" />`
  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/\s*<meta name="description"[^>]*>/, '')
    .replace(/\s*<meta name="robots"[^>]*>/, '')
    .replace(/\s*<link rel="canonical"[^>]*>/, '')
    .replace(/\s*<meta property="og:[^>]*>/g, '')
    .replace(/\s*<meta name="twitter:[^>]*>/g, '')
    .replace('</head>', `${tags}\n  </head>`).replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  if (!/<h1[\s>]/i.test(appHtml) || appHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().length < 120) throw new Error(`Prerender validation failed for ${route}`)
  const out = route === '/' ? path.join(root, 'dist/index.html') : path.join(root, 'dist', route.slice(1), 'index.html')
  await fs.mkdir(path.dirname(out), { recursive: true })
  await fs.writeFile(out, html)
}
await vite.close()
console.log(`Prerendered ${publicRoutes.length} public routes`)
