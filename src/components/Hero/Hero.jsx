import { useState, useEffect } from 'react'
import './Hero.css'
import { Mandala, ArchBand, Grain } from '../Motifs/Motifs'

function WaveBars({ count = 80 }) {
  const bars = Array.from({ length: count })
  return (
    <div className="wave wave--on" aria-hidden>
      {bars.map((_, i) => {
        const delay = (i * 23) % 1800
        return <span key={i} style={{ animationDelay: `-${delay}ms` }} />
      })}
    </div>
  )
}

export default function Hero({ onContact, onSectionClick }) {
  const [t, setT] = useState(6)
  useEffect(() => {
    const id = setInterval(() => setT((v) => v + 1), 1000)
    return () => clearInterval(id)
  }, [])
  const mm = String(Math.floor(t / 60)).padStart(2, '0')
  const ss = String(t % 60).padStart(2, '0')

  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden>
        <div className="hero__wash" />
        <div className="alt-motif-layer">
          <Mandala size={620} spin className="hero__mandala" style={{ left: '50%', top: '-140px', transform: 'translateX(-50%)' }} />
        </div>
        <ArchBand count={5} height={260} from="var(--w-peri)" opacity={0.55} className="hero__arches" />
        <ArchBand count={7} height={150} from="var(--w-saffron)" opacity={0.4} className="hero__arches hero__arches--2" />
        <Grain />
      </div>

      <div className="alt-wrap hero__inner">
        <div className="alt-reveal is-in">
          <span className="alt-eyebrow"><span className="alt-dot alt-dot--live" />Voice AI &middot; Built in India &middot; 31 languages</span>
        </div>

        <h1 className="alt-h-display hero__title alt-reveal is-in d1">
          Replace your calling<br />
          team with <em>AI voice.</em>
        </h1>

        <p className="hero__sub alt-reveal is-in d2">
          Voice agents that handle inbound support, outbound sales, and collections &mdash; in Hindi, Tamil, Telugu and 28 more. Sounding human, working around the clock, scaling the moment you need it.
        </p>

        <div className="hero__actions alt-reveal is-in d2">
          <button className="alt-btn alt-btn--accent" onClick={onContact}>
            Book a demo
            <span className="alt-ico">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <button className="alt-btn alt-btn--outline" onClick={() => onSectionClick?.('product')}>
            <span className="alt-ico">
              <svg width="13" height="13" viewBox="0 0 14 14"><path d="M4 3l7 4-7 4V3z" fill="currentColor" /></svg>
            </span>
            Hear a live call
          </button>
        </div>

        <div className="hero__strip alt-reveal is-in d3">
          <div className="hero__strip-row">
            <div className="hero__strip-meta">
              <span className="hero__live"><span className="alt-dot alt-dot--live" />LIVE</span>
              <span className="alt-mono">+91 98765 43210</span>
              <span className="alt-mono hero__timer">{mm}:{ss}</span>
            </div>
            <div className="hero__strip-meta hero__strip-meta--r">
              <span className="alt-kbd">Agent</span>
              <span className="alt-mono">Meera &middot; Support &middot; HI / EN</span>
            </div>
          </div>
          <WaveBars count={80} />
          <div className="hero__strip-foot">
            <span className="alt-mono">&#8627; Resolved &middot; re-delivery arranged for order #KF-88234</span>
            <span className="alt-mono">avg. handle 2m 38s</span>
          </div>
        </div>
      </div>
    </section>
  )
}
