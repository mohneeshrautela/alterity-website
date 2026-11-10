import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { preloadForPath } from './routeComponents.jsx'
import './index.css'

async function start() {
  // Load the current route's chunk before the first render so it matches the server HTML.
  // If preloading fails, still render: the lazy fallback will retry the import.
  await preloadForPath(window.location.pathname).catch(() => {})

  const root = document.getElementById('root')
  const app = (
    <React.StrictMode>
      <BrowserRouter><App /></BrowserRouter>
    </React.StrictMode>
  )

  if (root.hasChildNodes()) hydrateRoot(root, app)
  else createRoot(root).render(app)
}

start()
