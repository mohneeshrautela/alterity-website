import { Link } from 'react-router-dom'
import './Footer.css'

const NAV_LINKS = [
  { label: 'Product', to: '/product' },
  { label: 'Why Us', to: '/why-us' },
  { label: 'Use Cases', to: '/#calls' },
  { label: 'Pricing', to: '/pricing' },
]
const LEGAL_LINKS = [
  { label: 'Terms', to: '/terms' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__company">
            <Link to="/" className="footer__brand-heading">Alterity</Link>
            <p className="footer__company-name">Alterity Labs Pvt Ltd.</p>
            <p className="footer__company-address">1st Floor, 214/A Wing, ORM Premises Co-op Society,<br />Aarey Milk Colony, Goregaon (East), Royal Palms,<br />Nr. Unit No. 26, Mumbai 400065</p>
          </div>
          <div className="footer__socials">
            <p className="footer__socials-heading">Socials</p>
            <div className="footer__socials-row">
              <a href="https://x.com/alterityio" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Twitter"><img src="/twitter.png" alt="Twitter" /></a>
              <a href="https://www.linkedin.com/company/alterity-io?trk=public_post_follow-view-profile" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn"><img src="/linkedin.png" alt="LinkedIn" /></a>
            </div>
          </div>
          <ul className="footer__nav-list">{NAV_LINKS.map(link => <li key={link.to}><Link to={link.to} className="footer__nav-link">{link.label}</Link></li>)}</ul>
        </div>
        <div className="footer__big-logo" aria-hidden="true">Alterity</div>
        <div className="footer__divider"></div>
        <div className="footer__bottom">
          <p className="footer__copyright">© 2026 Alterity is a brand under Alterity Labs Pvt Ltd.</p>
          <div className="footer__legal-row">{LEGAL_LINKS.map(link => <Link key={link.to} to={link.to} className="footer__legal-link">{link.label}</Link>)}</div>
        </div>
      </div>
    </footer>
  )
}
