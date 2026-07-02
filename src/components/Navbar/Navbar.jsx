import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Product', key: 'product' },
  { label: 'Use cases', key: 'use-cases' },
  { label: 'Languages', key: 'languages' },
]

export default function Navbar({ onPricingClick, onLogoClick, onSectionClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (key) => (e) => { e.preventDefault(); setMobileOpen(false); onSectionClick?.(key) }
  const goPricing = (e) => { e.preventDefault(); setMobileOpen(false); onPricingClick?.() }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a className="navbar__brand" href="/" onClick={(e) => { e.preventDefault(); onLogoClick?.() }}>
          <img src="/alt logo.png" alt="Alterity" className="navbar__brand-img" />
          <span>Alterity</span>
        </a>

        <nav className="navbar__menu" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.key} href={`#${l.key}`} onClick={go(l.key)}>{l.label}</a>
          ))}
          <a href="#pricing" onClick={goPricing}>Pricing</a>
        </nav>

        <div className="navbar__actions">
          <a href="https://dashboard.alterity.io/" className="navbar__link">Sign in</a>
          <button className="alt-btn alt-btn--ink" onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}>
            Book a demo
            <span className="alt-ico">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <button className="navbar__mobile-toggle" onClick={() => setMobileOpen(v => !v)} aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile-menu">
          {NAV_LINKS.map((l) => (
            <a key={l.key} href={`#${l.key}`} onClick={go(l.key)}>{l.label}</a>
          ))}
          <a href="#pricing" onClick={goPricing}>Pricing</a>
          <div className="navbar__mobile-btns">
            <a href="https://dashboard.alterity.io/" className="navbar__link">Sign in</a>
            <button className="alt-btn alt-btn--ink" onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}>Book a demo</button>
          </div>
        </div>
      )}
    </header>
  )
}
