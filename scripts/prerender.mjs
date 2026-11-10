import fs from 'node:fs/promises'
import path from 'node:path'
import { createServer } from 'vite'
import { publicRoutes, SEO_ROUTES, SITE_URL } from '../src/seo/routes.js'

const root = process.cwd()
const template = await fs.readFile(path.join(root, 'dist/index.html'), 'utf8')
const vite = await createServer({ root, server: { middlewareMode: true }, appType: 'custom' })
const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')

const esc = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const MAX_DESCRIPTION = 160
const buildDate = new Date().toISOString().slice(0, 10)

const urlFor = route => `${SITE_URL}${route === '/' ? '/' : route}`
const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`
const USE_CASES_ROUTE = '/use-cases'

// Escape "<" so the serialised JSON can never close the script tag early.
const jsonLdScript = graph => `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replaceAll('<', '\\u003c')}</script>`

const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Alterity Labs Pvt Ltd.',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo-512.png`,
  sameAs: ['https://x.com/alterityio', 'https://www.linkedin.com/company/alterity-io'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1st Floor, 214/A Wing, ORM Premises Co-op Society, Aarey Milk Colony, Goregaon (East), Royal Palms, Nr. Unit No. 26',
    addressLocality: 'Mumbai',
    postalCode: '400065',
    addressCountry: 'IN',
  },
}

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: 'Alterity',
  url: `${SITE_URL}/`,
  publisher: { '@id': ORG_ID },
}

const softwareApplication = {
  '@type': 'SoftwareApplication',
  name: 'Alterity',
  url: `${SITE_URL}/product`,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'A web platform for configuring AI voice agents, launching campaigns, reviewing calls, monitoring usage, and connecting operational workflows.',
}

const shortTitle = title => title.split(' | ')[0]

const breadcrumbFor = (route, title) => {
  const items = [{ name: 'Home', item: urlFor('/') }]
  if (route.startsWith(`${USE_CASES_ROUTE}/`)) items.push({ name: 'Use cases', item: urlFor(USE_CASES_ROUTE) })
  items.push({ name: shortTitle(title), item: urlFor(route) })
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, index) => ({ '@type': 'ListItem', position: index + 1, name: entry.name, item: entry.item })),
  }
}

const graphFor = (route, meta) => {
  const canonical = urlFor(route)
  const graph = [
    organization,
    website,
    { '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: meta.title, description: meta.description, isPartOf: { '@id': WEBSITE_ID } },
  ]
  if (route !== '/') graph.push(breadcrumbFor(route, meta.title))
  if (route === '/' || route === '/product') graph.push(softwareApplication)
  return graph
}

// Build-time checks that run for every route before anything is written.
for (const route of publicRoutes) {
  const meta = SEO_ROUTES[route]
  if (meta.description.length > MAX_DESCRIPTION) throw new Error(`Description for ${route} is ${meta.description.length} characters (max ${MAX_DESCRIPTION})`)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicRoutes.map(route => `  <url><loc>${urlFor(route)}</loc><lastmod>${buildDate}</lastmod></url>`).join('\n')}
</urlset>
`
for (const route of publicRoutes) {
  if (!sitemap.includes(`<loc>${urlFor(route)}</loc>`)) throw new Error(`Route ${route} is missing from the sitemap`)
}

for (const route of publicRoutes) {
  const meta = SEO_ROUTES[route]
  const canonical = urlFor(route)
  const appHtml = await render(route)
  const tags = `
    <meta name="description" content="${esc(meta.description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${esc(meta.title)}" />
    <meta property="og:description" content="${esc(meta.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${SITE_URL}/og-image.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(meta.title)}" />
    <meta name="twitter:description" content="${esc(meta.description)}" />
    <meta name="twitter:image" content="${SITE_URL}/og-image.png" />`
  let html = template
    .replace(/<title>.*?<\/title>/, () => `<title>${esc(meta.title)}</title>`)
    .replace(/\s*<meta name="description"[^>]*>/, '')
    .replace(/\s*<meta name="robots"[^>]*>/, '')
    .replace(/\s*<link rel="canonical"[^>]*>/, '')
    .replace(/\s*<meta property="og:[^>]*>/g, '')
    .replace(/\s*<meta name="twitter:[^>]*>/g, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, () => jsonLdScript(graphFor(route, meta)))
    .replace('</head>', () => `${tags}\n  </head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${appHtml}</div>`)
  if (!/<h1[\s>]/i.test(appHtml) || appHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().length < 120) throw new Error(`Prerender validation failed for ${route}`)
  const out = route === '/' ? path.join(root, 'dist/index.html') : path.join(root, 'dist', route.slice(1), 'index.html')
  await fs.mkdir(path.dirname(out), { recursive: true })
  await fs.writeFile(out, html)
}
await fs.writeFile(path.join(root, 'dist/sitemap.xml'), sitemap)
await vite.close()
console.log(`Prerendered ${publicRoutes.length} public routes; wrote dist/sitemap.xml (lastmod ${buildDate})`)
