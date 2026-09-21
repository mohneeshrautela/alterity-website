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
        <p>Configure agents, launch campaigns, review call activity, and monitor usage in one operational workspace.</p>
        <div className="product-page__actions">
          <a className="btn-dark" href="#walkthrough">Explore the platform <ArrowRight size={16} /></a>
          <Link className="btn-outlined" to="/contact">Start a Pilot</Link>
        </div>
      </header>
      <section id="walkthrough" className="product-page__walkthrough"><ProductWalkthrough /></section>
    </div>
  )
}
