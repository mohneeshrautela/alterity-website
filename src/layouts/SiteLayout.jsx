import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Seo from '../seo/Seo'

export default function SiteLayout({ onOpenContact }) {
  const { pathname } = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  useEffect(() => {
    const open = () => onOpenContact()
    window.addEventListener('open-contact-modal', open)
    return () => window.removeEventListener('open-contact-modal', open)
  }, [onOpenContact])

  return (
    <div>
      <Seo />
      <Navbar onOpenContact={onOpenContact} />
      <main><Outlet /></main>
      <Footer />
    </div>
  )
}
