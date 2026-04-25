import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar({ onPricingClick, onLogoClick, onCallsClick, onUseCasesClick, onWhyUsClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cursor, setCursor] = useState({ left: 0, width: 0, visible: false })
  const tabRefs = useRef([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMouseEnter = (i) => {
    const el = tabRefs.current[i]
    if (!el) return
    setCursor({ left: el.offsetLeft, width: el.offsetWidth, visible: true })
  }

  const handleMouseLeave = () => {
    setCursor(c => ({ ...c, visible: false }))
  }

  const CLICKS = [
    (e) => { e.preventDefault(); onWhyUsClick?.() },
    (e) => { e.preventDefault(); onUseCasesClick?.() },
    (e) => { e.preventDefault(); onPricingClick?.() },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="/" className="navbar__logo" onClick={(e) => { e.preventDefault(); onLogoClick?.() }}>
          <img src="/alt logo.png" alt="Alterity" className="navbar__logo-img" />
          <span className="navbar__logo-text">Alterity</span>
        </a>

        <ul className="navbar__links" onMouseLeave={handleMouseLeave}>
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              ref={el => tabRefs.current[i] = el}
              className="navbar__slide-tab"
              onMouseEnter={() => handleMouseEnter(i)}
            >
              <a href={link.href} onClick={CLICKS[i]}>{link.label}</a>
            </li>
          ))}
          <li
            className="navbar__slide-cursor"
            style={{
              left: cursor.left,
              width: cursor.width,
              opacity: cursor.visible ? 1 : 0,
              transition: cursor.visible
                ? 'left 0.2s ease, width 0.2s ease, opacity 0.15s ease'
                : 'opacity 0.15s ease',
            }}
          />
        </ul>

        <div className="navbar__right">
          <a href="https://dashboard.alterity.io/" target="_blank" rel="noopener noreferrer" className="navbar__btn navbar__btn--outlined">Login</a>
          <button className="navbar__btn navbar__btn--dark" onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}>Start a Pilot</button>
          <button
            className="navbar__mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile-menu">
          <a onClick={() => { setMobileOpen(false); onWhyUsClick?.() }}>Why Us</a>
          <a onClick={() => { setMobileOpen(false); onUseCasesClick?.() }}>Use Cases</a>
          <a onClick={() => { setMobileOpen(false); onPricingClick?.() }}>Pricing</a>
          <div className="navbar__mobile-btns">
            <a href="https://dashboard.alterity.io/" target="_blank" rel="noopener noreferrer" className="navbar__btn navbar__btn--outlined">Login</a>
            <button className="navbar__btn navbar__btn--dark" onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}>Start a Pilot</button>
          </div>
        </div>
      )}
    </nav>
  )
}
