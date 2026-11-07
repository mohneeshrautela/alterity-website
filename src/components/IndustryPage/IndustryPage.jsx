import { Link, useParams, Navigate } from 'react-router-dom'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import FlowButton from '../FlowButton/FlowButton'
import { INDUSTRIES } from './industries'
import '../FAQSection/FAQSection.css'
import './IndustryPage.css'

export default function IndustryPage() {
  const { slug } = useParams()
  const p = INDUSTRIES[slug]
  if (!p) return <Navigate to="/" replace />

  const setupItems = p.setup || []

  return (
    <div className="ind-page">
      <div className="ind-hero">
        <span className="ind-kicker">{p.kicker}</span>
        <h1 className="ind-h1">
          Voice AI agents for <span className="ind-u">{p.heroWord}</span>
        </h1>
        <p className="ind-sub">{p.sub}</p>
        <div className="ind-btnrow">
          <FlowButton text="Start a Pilot" variant="black" />
          <Link to="/pricing" className="btn-outlined">See pricing</Link>
        </div>
      </div>

      <section className="ind-sect">
        <div className="ind-label">Use cases</div>
        <h2 className="ind-h2">What the agents actually do</h2>
        <div className="ind-grid">
          {p.cards.map(c => (
            <div className="ind-card" key={c.title}>
              <div className="ind-card-top">
                <span className="ind-card-label">{c.label}</span>
                {c.setup ? <span className="ind-chip">Needs setup</span> : null}
              </div>
              <div className="ind-card-title">{c.title}</div>
              <div className="ind-card-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ind-sect">
        <div className="ind-label">How it runs</div>
        <h2 className="ind-h2">From list to logged outcome</h2>
        <div className="ind-steps">
          {p.steps.map((s, i) => (
            <div className="ind-step" key={i}>
              <span className="ind-step-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="ind-step-txt">{s}</span>
            </div>
          ))}
        </div>
      </section>

      {setupItems.length > 0 && (
        <section className="ind-sect">
          <div className="ind-label">Setup</div>
          <h2 className="ind-h2">Set up with you during the pilot</h2>
          <div className="ind-steps">
            {setupItems.map((item, i) => (
              <div className="ind-step" key={i}>
                <span className="ind-step-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="ind-step-txt">{item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="ind-sect">
        <div className="ind-strip">
          <div className="ind-strip-title">{p.stripTitle}</div>
          <div className="ind-strip-items">
            {p.strip.map(s => <span className="ind-strip-item" key={s}>{s}</span>)}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2 className="faq-heading">Asked before a pilot</h2>
          </div>
          <AccordionPrimitive.Root type="single" collapsible className="faq-list">
            {p.faq.map((f, i) => (
              <AccordionPrimitive.Item key={i} value={`faq-${i}`} className="faq-item">
                <AccordionPrimitive.Header className="faq-item__header">
                  <AccordionPrimitive.Trigger className="faq-item__trigger">
                    <Plus size={18} strokeWidth={2.2} className="faq-item__icon" />
                    <span className="faq-item__question">{f.q}</span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content forceMount className="faq-item__content">
                  <p className="faq-item__answer">{f.a}</p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>
      </section>

      <section className="ind-sect">
        <div className="ind-band">
          <h3>See it on your own call list.</h3>
          <FlowButton text="Start a Pilot" variant="black" />
          <p className="ind-band-sub">Pricing is &#8377;4 per connected minute, exclusive of GST, billed in 30-second pulses - <Link to="/pricing">see pricing</Link></p>
        </div>
      </section>
    </div>
  )
}
