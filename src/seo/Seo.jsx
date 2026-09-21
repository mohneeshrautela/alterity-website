import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SEO_ROUTES, SITE_URL } from './routes'

export default function Seo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const meta = SEO_ROUTES[pathname] || SEO_ROUTES['/']
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE_URL}${pathname === '/' ? '/' : pathname}`)
  }, [pathname])
  return null
}
