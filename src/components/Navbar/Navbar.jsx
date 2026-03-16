import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'Real Customer Calls', href: '#calls' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
]

function SlideTab({ href, children, setPosition, onClick }) {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return
        const { width } = ref.current.getBoundingClientRect()
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 })
      }}
      className="navbar__slide-tab"
    >
      <a href={onClick ? undefined : href} onClick={onClick}>{children}</a>
    </li>
  )
}

export default function Navbar({ onPricingClick, onLogoClick, onCallsClick, onUseCasesClick, onWhyUsClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="/" className="navbar__logo" onClick={(e) => { e.preventDefault(); onLogoClick?.() }}>
          <img src="/alt logo.png" alt="Alterity" className="navbar__logo-img" />
          <span className="navbar__logo-text">Alterity</span>
        </a>

        {/* Slide Tabs Nav */}
        <ul
          className="navbar__links"
          onMouseLeave={() => setPosition((p) => ({ ...p, opacity: 0 }))}
        >
          {NAV_LINKS.map((link) => (
            <SlideTab
              key={link.href}
              href={link.href}
              setPosition={setPosition}
              onClick={
                link.label === 'Why Us' ? (e) => { e.preventDefault(); onWhyUsClick?.() } :
                link.label === 'Pricing' ? (e) => { e.preventDefault(); onPricingClick?.() } :
                link.label === 'Real Customer Calls' ? (e) => { e.preventDefault(); onCallsClick?.() } :
                link.label === 'Use Cases' ? (e) => { e.preventDefault(); onUseCasesClick?.() } :
                undefined
              }
            >
              {link.label}
            </SlideTab>
          ))}
          <motion.li
            className="navbar__slide-cursor"
            animate={position}
            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
          />
        </ul>

        {/* Right Side */}
        <div className="navbar__right">
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="navbar__mobile-menu">
          <a href="#why-us" onClick={(e) => { e.preventDefault(); setMobileOpen(false); onWhyUsClick?.() }}>Why Us</a>
          <a href="#calls" onClick={(e) => { e.preventDefault(); setMobileOpen(false); onCallsClick?.() }}>Real Customer Calls</a>
          <a href="#use-cases" onClick={(e) => { e.preventDefault(); setMobileOpen(false); onUseCasesClick?.() }}>Use Cases</a>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); setMobileOpen(false); onPricingClick?.() }}>Pricing</a>
          <div className="navbar__mobile-btns">
            <button className="navbar__btn navbar__btn--dark" onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}>Start a Pilot</button>
          </div>
        </div>
      )}
    </nav>
  )
}
