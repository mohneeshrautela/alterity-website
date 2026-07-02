import './HowItWorks.css'
import { PetalFrame, GradientWash } from '../Motifs/Motifs'

const STEPS = [
  {
    step: 'STEP 01', hue: 'var(--w-saffron)', hue2: 'var(--w-clay)',
    title: 'Share a real call',
    body: 'Send us a recording of a typical conversation your team handles today — support, sales, or collections. That is all we need to begin.',
    glyph: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M6 5c0 8 7 15 15 15l-2 3c-9 0-16-7-16-16l3-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
    ),
  },
  {
    step: 'STEP 02', hue: 'var(--w-peri)', hue2: 'var(--w-sage)',
    title: 'We build your agent',
    body: 'We train a voice agent on your script, your language mix, and your systems — then tune it on real calls until it sounds like your best rep.',
    glyph: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="9" stroke="currentColor" strokeWidth="1.6" /><path d="M13 8v5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
    ),
  },
  {
    step: 'STEP 03', hue: 'var(--w-sage)', hue2: 'var(--w-peri)',
    title: 'Go live in 14 days',
    body: 'Route calls to your agent and watch it handle the routine volume — 24/7, in every language, escalating only what truly needs a human.',
    glyph: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M4 14l6 6L22 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="alt-section how" id="how">
      <div className="alt-wrap">
        <div className="alt-section-head alt-reveal">
          <div className="alt-left">
            <span className="alt-eyebrow"><span className="alt-dot" />How it works</span>
            <h2 className="alt-h-section">From a recording to<br /><em>live in two weeks.</em></h2>
          </div>
          <div className="alt-right">
            <p className="alt-lede">No lengthy integration project. Share one call, and we come back with a working agent trained around your actual use case.</p>
          </div>
        </div>
        <div className="how__grid">
          {STEPS.map((s, i) => (
            <article key={i} className={`how__card alt-reveal d${i}`}>
              <GradientWash hue={s.hue} hue2={s.hue2} style={{ height: '120px', inset: 'auto 0 auto 0', top: 0 }} />
              <div className="how__icon">
                <PetalFrame size={70} color="var(--accent)">{s.glyph}</PetalFrame>
              </div>
              <span className="how__step">{s.step}</span>
              <h3 className="how__title">{s.title}</h3>
              <p className="how__body">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
