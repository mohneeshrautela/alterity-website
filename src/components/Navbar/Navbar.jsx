import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Product', to: '/product' },
  { label: 'Why Us', to: '/why-us' },
  { label: 'Use Cases', to: '/#calls' },
  { label: 'Pricing', to: '/pricing' },
]

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cursor, setCursor] = useState({ left: 0, width: 0, visible: false })
  const tabRefs = useRef([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo">
            <img src="/alt logo.png" alt="Alterity" className="navbar__logo-img" />
            <span className="navbar__logo-text">Alterity</span>
          </Link>
          <ul className="navbar__links" onMouseLeave={() => setCursor(c => ({ ...c, visible: false }))}>
            {NAV_LINKS.map((link, i) => (
              <li key={link.to} ref={el => tabRefs.current[i] = el} className="navbar__slide-tab"
                onMouseEnter={() => { const el = tabRefs.current[i]; if (el) setCursor({ left: el.offsetLeft, width: el.offsetWidth, visible: true }) }}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li className="navbar__slide-cursor" style={{ left: cursor.left, width: cursor.width, opacity: cursor.visible ? 1 : 0 }} />
          </ul>
          <div className="navbar__right">
            <a href="https://dashboard.alterity.io/" className="navbar__btn navbar__btn--outlined">Login</a>
            <button className="navbar__btn navbar__btn--dark" onClick={onOpenContact}>Start a Pilot</button>
            <button className="navbar__mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu"><span></span><span></span><span></span></button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="navbar__mobile-menu" initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0% 0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}>
            <button className="navbar__mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={26} /></button>
            <div className="navbar__mobile-links">
              {NAV_LINKS.map(link => <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}>{link.label}</Link>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
