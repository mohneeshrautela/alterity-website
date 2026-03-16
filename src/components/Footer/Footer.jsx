import './Footer.css'

const NAV_LINKS = ['Why Us', 'Real Customer Calls', 'Use Cases', 'Pricing']
const LEGAL_LINKS = ['Terms', 'Privacy', 'Contact']

export default function Footer({ onTermsClick, onPrivacyClick, onPricingClick, onWhyUsClick, onLogoClick }) {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Top row */}
        <div className="footer__top">

          {/* Left: company info */}
          <div className="footer__company">
            <p className="footer__brand-heading" style={{cursor:'pointer'}} onClick={() => onLogoClick?.()}>Alterity</p>
            <p className="footer__company-name">GoodKlicks Digital Ventures LLP</p>
            <p className="footer__company-address">Lotus Boulevard, Tower 22/803, Sector 100,<br />Noida – 201304</p>
          </div>

          {/* Right: nav links */}
          <ul className="footer__nav-list">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="footer__nav-link"
                  onClick={
                    label === 'Pricing' ? (e) => { e.preventDefault(); onPricingClick?.() }
                    : label === 'Why Us' ? (e) => { e.preventDefault(); onWhyUsClick?.() }
                    : undefined
                  }
                >{label}</a>
              </li>
            ))}
          </ul>

        </div>

        {/* Big watermark */}
        <div className="footer__big-logo" aria-hidden="true">Alterity</div>

        {/* Divider */}
        <div className="footer__divider"></div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">© 2026 Alterity is a brand under GoodKlicks Digital Ventures LLP.</p>
          <div className="footer__legal-row">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="footer__legal-link"
                onClick={
                  link === 'Terms' ? (e) => { e.preventDefault(); onTermsClick?.() }
                  : link === 'Privacy' ? (e) => { e.preventDefault(); onPrivacyClick?.() }
                  : link === 'Contact' ? (e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-contact-modal')) }
                  : undefined
                }
              >{link}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
