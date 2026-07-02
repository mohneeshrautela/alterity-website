import { useState, useEffect } from 'react'
import './CallDemo.css'
import { Mandala } from '../Motifs/Motifs'

const SCRIPT = [
  { ts: 1, who: 'agent', text: 'Hello, aap Kartify customer support mein aayi hain. Main Meera hun. Aapki kaise help kar sakti hun?' },
  { ts: 7, who: 'caller', text: 'Hi, mera order 5 din se nahi aaya. Order number KF-88234.', mood: 'frustrated' },
  { ts: 12, who: 'agent', text: 'Main dekh rahi hun — order KF-88234. Ek second.' },
  { ts: 16, who: 'agent', text: 'I can see the delivery was attempted on Tuesday at 4 PM, but no one was available to receive it.' },
  { ts: 22, who: 'caller', text: 'Nobody told me about this! I was home only.', mood: 'frustrated' },
  { ts: 26, who: 'agent', text: "I'm sorry about that, Rahul ji. I'll arrange a re-delivery for tomorrow between 2 to 6 PM at no extra charge. Will that work?" },
  { ts: 33, who: 'caller', text: 'Yes, that works. Please make sure someone calls before coming.', mood: 'resolved' },
  { ts: 37, who: 'agent', text: "Absolutely. I've added a note — the delivery partner will call 30 minutes before arriving. You'll also get an SMS confirmation." },
  { ts: 43, who: 'caller', text: 'Okay, thank you.', mood: 'happy' },
  { ts: 45, who: 'agent', text: 'Thank you for calling Kartify support, Rahul ji. Have a good evening!' },
]
const DURATION = 48

function fmt(t) {
  const m = String(Math.floor(t / 60)).padStart(2, '0')
  const s = String(Math.floor(t % 60)).padStart(2, '0')
  return `${m}:${s}`
}

export default function CallDemo() {
  const [t, setT] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => {
      setT((v) => {
        const n = v + 0.1 * speed
        return n >= DURATION ? 0 : n
      })
    }, 100)
    return () => clearInterval(id)
  }, [playing, speed])

  const visible = SCRIPT.filter((s) => s.ts <= t)
  const activeIdx = visible.length - 1
  const mood = [...visible].reverse().find((s) => s.mood)?.mood || 'neutral'

  return (
    <section className="alt-section alt-section--paper demo" id="product">
      <div className="alt-motif-layer" aria-hidden>
        <Mandala size={460} className="alt-mandala--ink" style={{ left: '-150px', bottom: '20px', opacity: 'calc(0.04 * var(--motif))' }} />
      </div>
      <div className="alt-wrap">
        <div className="alt-section-head alt-reveal">
          <div className="alt-left">
            <span className="alt-eyebrow"><span className="alt-dot" />The product</span>
            <h2 className="alt-h-section">A real call,<br /><em>start to finish.</em></h2>
          </div>
          <div className="alt-right">
            <p className="alt-lede">Alterity agents handle the full conversation &mdash; listening, responding naturally, managing the back-and-forth &mdash; so your human team never has to pick up a routine call again.</p>
          </div>
        </div>

        <div className="demo__frame alt-reveal">
          <div className="demo__chrome">
            <div className="demo__dots"><span /><span /><span /></div>
            <div className="demo__addr"><span className="alt-mono">alterity.io / sessions / kf-88234</span></div>
            <div className="demo__chip"><span className="alt-dot alt-dot--live" /><span className="alt-mono">LIVE</span></div>
          </div>

          <div className="demo__body">
            <aside className="demo__side">
              <div className="callcard">
                <div className="callcard__top">
                  <div className="avatar">M</div>
                  <div>
                    <div className="callcard__name">Meera</div>
                    <div className="alt-mono alt-muted">Support &middot; Kartify</div>
                  </div>
                </div>
                <div className="callcard__divider" />
                <div className="callcard__row"><span className="alt-mono alt-muted">CALLER</span><span>Rahul Sharma</span></div>
                <div className="callcard__row"><span className="alt-mono alt-muted">ISSUE</span><span>Undelivered order</span></div>
                <div className="callcard__row"><span className="alt-mono alt-muted">ORDER</span><span className="alt-mono">KF-88234</span></div>
                <div className="callcard__row"><span className="alt-mono alt-muted">CITY</span><span>Bengaluru</span></div>
                <div className="callcard__divider" />
                <div className="callcard__row"><span className="alt-mono alt-muted">SENTIMENT</span>
                  <span className={`mood mood--${mood}`}>
                    {mood === 'frustrated' && '↘ frustrated'}
                    {mood === 'neutral' && '→ neutral'}
                    {mood === 'resolved' && '↗ resolving'}
                    {mood === 'happy' && '↑ positive'}
                  </span>
                </div>
                <div className="moodline">
                  <div className="moodline__bar"><span style={{ width: `${(t / DURATION) * 100}%` }} /></div>
                </div>
              </div>

              <div className="callcard callcard--mini">
                <div className="callcard__row"><span className="alt-mono alt-muted">LATENCY</span><span className="alt-mono">298ms</span></div>
                <div className="callcard__row"><span className="alt-mono alt-muted">MODEL</span><span className="alt-mono">alterity-v4</span></div>
                <div className="callcard__row"><span className="alt-mono alt-muted">LANG</span><span className="alt-mono">HI + EN</span></div>
              </div>
            </aside>

            <div className="transcript">
              <div className="transcript__head">
                <span className="alt-mono alt-muted">LIVE TRANSCRIPT</span>
                <span className="alt-mono">{fmt(t)} / {fmt(DURATION)}</span>
              </div>
              <div className="transcript__list">
                {visible.slice(-6).map((s, i, arr) => (
                  <div key={s.ts} className={`t-row t-row--${s.who} ${i === arr.length - 1 ? 'is-active' : ''}`}>
                    <span className="t-ts alt-mono">{fmt(s.ts)}</span>
                    <span className="t-who alt-mono">{s.who === 'agent' ? 'MEERA' : 'CALLER'}</span>
                    <span className="t-text">{s.text}</span>
                  </div>
                ))}
                {activeIdx >= 0 && SCRIPT[activeIdx + 1] && (
                  <div className="t-row t-row--ghost">
                    <span className="t-ts alt-mono">{fmt(SCRIPT[activeIdx + 1].ts)}</span>
                    <span className="t-who alt-mono">{SCRIPT[activeIdx + 1].who === 'agent' ? 'MEERA' : 'CALLER'}</span>
                    <span className="t-text"><span className="typing"><span /><span /><span /></span></span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="demo__controls">
            <button className="play" onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? (
                <svg width="14" height="14" viewBox="0 0 14 14"><rect x="3" y="2" width="3" height="10" rx="1" fill="currentColor" /><rect x="8" y="2" width="3" height="10" rx="1" fill="currentColor" /></svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14"><path d="M4 2l8 5-8 5V2z" fill="currentColor" /></svg>
              )}
            </button>
            <div className="scrubber" onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect()
              const p = (e.clientX - r.left) / r.width
              setT(Math.max(0, Math.min(DURATION, p * DURATION)))
            }}>
              <div className="scrubber__bar"><span style={{ width: `${(t / DURATION) * 100}%` }} /></div>
            </div>
            <div className="demo__time alt-mono">{fmt(t)} / {fmt(DURATION)}</div>
            <div className="speed">
              {[1, 1.5, 2].map((s) => (
                <button key={s} className={`speed__btn ${speed === s ? 'is-on' : ''}`} onClick={() => setSpeed(s)}>{s}&times;</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
