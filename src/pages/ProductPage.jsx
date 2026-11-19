import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductWalkthrough from '../components/ProductWalkthrough/ProductWalkthrough'
import './ProductPage.css'

export default function ProductPage() {
  return (
    <div className="product-page">
      <header className="product-page__hero">
        <span className="terms-page__eyebrow">Product walkthrough</span>
        <h1>See the Alterity voice-agent platform</h1>
        <p className="product-page__definition">Alterity builds AI voice agents for Indian businesses - agents that call end to end in 11 Indian languages plus English. <Link to="/pricing">Pricing</Link> is a flat ₹4 per connected minute plus GST, pay as you go, verified November 2026.</p>
        <p>Configure agents, launch campaigns, review call activity, and monitor usage in one operational workspace.</p>
        <div className="product-page__actions">
          <a className="btn-dark" href="#walkthrough">Explore the platform <ArrowRight size={16} /></a>
          <Link className="btn-outlined" to="/contact">Start a Pilot</Link>
        </div>
      </header>
      <section id="walkthrough" className="product-page__walkthrough"><ProductWalkthrough /></section>
      <p className="product-page__related">Design menu-based call flows in <Link to="/ivr">IVR Studio</Link>, or explore <Link to="/use-cases">voice AI use cases by industry</Link>.</p>
    </div>
  )
}
