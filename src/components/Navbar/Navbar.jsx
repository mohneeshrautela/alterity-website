import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'motion/react'
import { X, ChevronDown } from 'lucide-react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Product', to: '/product' },
  { label: 'Why Us', to: '/why-us' },
  { label: 'Use Cases', to: '/#calls' },
  { label: 'Pricing', to: '/pricing' },
]

const USE_CASES = [
  { label: 'NBFC and lending', desc: 'Collections, KYC and loan-servicing calls', to: '/use-cases/nbfc-lending' },
  { label: 'Pharma and healthcare', desc: 'Distribution, stockist and patient reminder calls', to: '/use-cases/pharma-healthcare' },
  { label: 'Logistics', desc: 'COD, NDR and delivery coordination', to: '/use-cases/logistics' },
  { label: 'Education', desc: 'Admissions, fees and parent outreach', to: '/use-cases/education' },
  { label: 'Insurance', desc: 'Renewals, claims and premium reminders', to: '/use-cases/insurance' },
  { label: 'E-commerce and retail', desc: 'COD confirmation, returns and order support', to: '/use-cases/ecommerce-retail' },
]

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false)
  const [dropdown, setDropdown] = useState({ open: false, left: 0, top: 0 })
  const [cursor, setCursor] = useState({ left: 0, width: 0, visible: false })
  const tabRefs = useRef([])
  const useCasesTabRef = useRef(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      setDropdown(d => (d.open ? { ...d, open: false } : d))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const openDropdown = () => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null }
    const el = useCasesTabRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setDropdown({ open: true, left: rect.left + rect.width / 2, top: rect.bottom + 12 })
  }
  const scheduleCloseDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setDropdown(d => ({ ...d, open: false })), 120)
  }

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
              link.label === 'Use Cases' ? (
                <li key={link.label}
                  ref={el => { tabRefs.current[i] = el; useCasesTabRef.current = el }}
                  className="navbar__slide-tab navbar__use-cases-tab"
                  onMouseEnter={() => { const el = tabRefs.current[i]; if (el) setCursor({ left: el.offsetLeft, width: el.offsetWidth, visible: true }); openDropdown() }}
                  onMouseLeave={scheduleCloseDropdown}>
                  <button type="button" className="navbar__dropdown-trigger" aria-haspopup="true" aria-expanded={dropdown.open}
                    onClick={() => (dropdown.open ? setDropdown(d => ({ ...d, open: false })) : openDropdown())}>
                    {link.label}
                    <ChevronDown size={13} strokeWidth={2.5} className={`navbar__dropdown-caret ${dropdown.open ? 'navbar__dropdown-caret--open' : ''}`} />
                  </button>
                </li>
              ) : (
                <li key={link.to} ref={el => tabRefs.current[i] = el} className="navbar__slide-tab"
                  onMouseEnter={() => { const el = tabRefs.current[i]; if (el) setCursor({ left: el.offsetLeft, width: el.offsetWidth, visible: true }); scheduleCloseDropdown() }}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              )
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
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {dropdown.open && (
            <motion.div
              className="navbar__dropdown-menu"
              style={{ left: dropdown.left, top: dropdown.top }}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16, ease: 'easeOut' }}
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleCloseDropdown}>
              {USE_CASES.map(uc => (
                <Link key={uc.to} to={uc.to} className="navbar__dropdown-item" onClick={() => setDropdown(d => ({ ...d, open: false }))}>
                  <span className="navbar__dropdown-item-label">{uc.label}</span>
                  <span className="navbar__dropdown-item-desc">{uc.desc}</span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="navbar__mobile-menu" initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0% 0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}>
            <button className="navbar__mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={26} /></button>
            <div className="navbar__mobile-links">
              {NAV_LINKS.map(link => (
                link.label === 'Use Cases' ? (
                  <div key={link.label} className="navbar__mobile-use-cases">
                    <button type="button" className="navbar__mobile-use-cases-toggle" onClick={() => setMobileUseCasesOpen(o => !o)} aria-expanded={mobileUseCasesOpen}>
                      {link.label}
                      <ChevronDown size={30} strokeWidth={2.5} className={`navbar__dropdown-caret ${mobileUseCasesOpen ? 'navbar__dropdown-caret--open' : ''}`} />
                    </button>
                    {mobileUseCasesOpen && (
                      <div className="navbar__mobile-sub-links">
                        {USE_CASES.map(uc => (
                          <Link key={uc.to} to={uc.to} onClick={() => { setMobileOpen(false); setMobileUseCasesOpen(false) }}>{uc.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}>{link.label}</Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
