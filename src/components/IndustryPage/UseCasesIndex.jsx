import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './IndustryPage.css'

const ITEMS = [
  { label: 'NBFC and lending', desc: 'Collections, KYC and loan-servicing calls', to: '/use-cases/nbfc-lending' },
  { label: 'Pharma and healthcare', desc: 'Distribution, stockist and patient reminder calls', to: '/use-cases/pharma-healthcare' },
  { label: 'Logistics', desc: 'COD, NDR and delivery coordination', to: '/use-cases/logistics' },
  { label: 'Education', desc: 'Admissions, fees and parent outreach', to: '/use-cases/education' },
  { label: 'Insurance', desc: 'Renewals, claims and premium reminders', to: '/use-cases/insurance' },
  { label: 'E-commerce and retail', desc: 'COD confirmation, returns and order support', to: '/use-cases/ecommerce-retail' },
]

export default function UseCasesIndex() {
  return (
    <div className="ind-page">
      <div className="ind-hero">
        <span className="ind-kicker">Use cases</span>
        <h1 className="ind-h1">Voice AI agents for <span className="ind-u">your industry</span></h1>
        <p className="ind-sub">Pick your industry to see the workflows Alterity runs, what gets set up with you in a pilot, and what it costs.</p>
      </div>
      <section className="ind-sect">
        <div className="ind-grid">
          {ITEMS.map(item => (
            <Link to={item.to} className="ind-card ind-card--link" key={item.to}>
              <div className="ind-card-top">
                <span className="ind-card-label">{item.label}</span>
                <ArrowRight size={16} strokeWidth={2.2} className="ind-card-arrow" />
              </div>
              <div className="ind-card-desc">{item.desc}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
