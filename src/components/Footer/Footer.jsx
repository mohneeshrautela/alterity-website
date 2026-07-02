import './Footer.css'

const COLUMNS = [
  { h: 'Product', items: [
    { label: 'Product', key: 'product' },
    { label: 'Use cases', key: 'use-cases' },
    { label: 'Languages', key: 'languages' },
    { label: 'Pricing', pricing: true },
  ] },
  { h: 'Company', items: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', contact: true },
  ] },
  { h: 'Legal', items: [
    { label: 'Privacy policy', privacy: true },
    { label: 'Terms of use', terms: true },
  ] },
]

export default function Footer({ onTermsClick, onPrivacyClick, onPricingClick, onSectionClick, onLogoClick }) {
  const handlerFor = (item) => {
    if (item.pricing) return (e) => { e.preventDefault(); onPricingClick?.() }
    if (item.terms) return (e) => { e.preventDefault(); onTermsClick?.() }
    if (item.privacy) return (e) => { e.preventDefault(); onPrivacyClick?.() }
    if (item.contact) return (e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-contact-modal')) }
    if (item.key) return (e) => { e.preventDefault(); onSectionClick?.(item.key) }
    return undefined
  }

  return (
    <footer className="footer">
      <div className="alt-wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="navbar__brand" href="/" onClick={(e) => { e.preventDefault(); onLogoClick?.() }}>
              <img src="/alt logo.png" alt="Alterity" className="navbar__brand-img" />
              <span>Alterity</span>
            </a>
            <p className="footer__tag">AI voice agents for the calls your operations run on.</p>
            <p className="footer__sub alt-mono">Bengaluru &middot; Mumbai &middot; Delhi</p>
            <p className="footer__legal-name">Alterity Labs Pvt Ltd. &middot; C-703, Wisway Complex, Sampada Society, Andheri East, Mumbai, Maharashtra 400069</p>
          </div>
          {COLUMNS.map((c) => (
            <div className="footer__col" key={c.h}>
              <div className="footer__h alt-mono">{c.h}</div>
              <ul>
                {c.items.map((item) => (
                  <li key={item.label}><a href={item.href || '#'} onClick={handlerFor(item)}>{item.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <span className="alt-mono alt-muted">&copy; 2026 Alterity &mdash; Made in India.</span>
          <span className="alt-mono alt-muted">contact@alterity.io</span>
        </div>
      </div>
    </footer>
  )
}
