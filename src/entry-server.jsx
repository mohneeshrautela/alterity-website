import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'
import { preloadForPath } from './routeComponents.jsx'

export async function render(url) {
  // Load the page's chunk first so the HTML contains the full page, never a Suspense fallback.
  await preloadForPath(url)
  return renderToString(<StaticRouter location={url}><App /></StaticRouter>)
}
