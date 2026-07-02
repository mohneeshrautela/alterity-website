import './CTA.css'
import { Mandala, Grain } from '../Motifs/Motifs'

export default function CTA({ onContact }) {
  return (
    <section className="alt-section alt-section--tight cta">
      <div className="alt-wrap">
        <div className="cta__card">
          <div className="cta__bg" aria-hidden>
            <div className="cta__wash" />
            <Mandala size={520} spin className="cta__mandala" />
            <Grain />
          </div>
          <div className="cta__inner">
            <span className="alt-eyebrow"><span className="alt-dot alt-dot--live" />Pilot in 14 days</span>
            <h2 className="alt-h-display cta__title">Hear it on <em>your</em> calls.</h2>
            <p className="cta__sub">Share a recording of a typical call. We'll come back with a working agent &mdash; trained on your script, in your language, by next week.</p>
            <div className="cta__actions">
              <button className="alt-btn alt-btn--paper" onClick={onContact}>Book a demo &rarr;</button>
              <button className="alt-btn alt-btn--ghost-dark" onClick={onContact}>Talk to us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
