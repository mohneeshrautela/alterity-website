import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { INDUSTRIES } from './industries'
import './IndustryPage.css'

const ITEMS = Object.entries(INDUSTRIES).map(([slug, p]) => ({
  slug,
  title: p.kicker,
  summary: p.hubSummary,
}))

export default function UseCasesIndex() {
  return (
    <div className="ind-page">
      <div className="ind-hero">
        <span className="ind-kicker">Use cases</span>
        <h1 className="ind-h1">Voice AI agents for <span className="ind-u">your industry</span></h1>
        <p className="ind-sub">Alterity runs voice AI agents for six sectors: lending, pharma and healthcare, logistics, education, insurance, and e-commerce and retail. Pick your industry to see the workflows it runs, what gets set up with you in a pilot, and what it costs.</p>
      </div>
      <section className="ind-sect">
        <div className="ind-grid">
          {ITEMS.map(item => (
            <Link to={`/use-cases/${item.slug}`} className="ind-card ind-card--link" key={item.slug}>
              <div className="ind-card-top">
                <h2 className="ind-card-title">{item.title}</h2>
                <ArrowRight size={16} strokeWidth={2.2} className="ind-card-arrow" aria-hidden="true" />
              </div>{' '}
              <p className="ind-card-desc">{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
