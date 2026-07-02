import './Capabilities.css'
import { GradientWash } from '../Motifs/Motifs'

function CapVoice() {
  return (
    <svg viewBox="0 0 220 130" className="cap-vis" preserveAspectRatio="xMidYMid meet">
      {Array.from({ length: 34 }).map((_, i) => {
        const h = 14 + Math.abs(Math.sin(i * 0.55) * 42) + (i % 3 ? 6 : 0)
        return <rect key={i} x={12 + i * 5.8} y={62 - h / 2} width="2.6" height={h} fill="currentColor" opacity={0.35 + (i % 6) * 0.08} rx="1.3" />
      })}
      <line x1="12" y1="62" x2="208" y2="62" stroke="currentColor" strokeOpacity="0.18" />
      <rect x="146" y="82" width="62" height="22" rx="11" fill="currentColor" opacity="0.1" />
      <text x="177" y="97" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="currentColor">298ms</text>
      <text x="12" y="118" fontFamily="JetBrains Mono" fontSize="9" fill="currentColor" opacity="0.55">first-token latency</text>
    </svg>
  )
}
function CapContext() {
  return (
    <svg viewBox="0 0 220 130" className="cap-vis" preserveAspectRatio="xMidYMid meet">
      <g fill="none" stroke="currentColor" strokeOpacity="0.35">
        <path d="M22 34 Q 110 34 198 34" />
        <path d="M22 34 L 22 80" /><path d="M198 34 L 198 80" />
        <path d="M22 80 Q 110 80 198 80" />
      </g>
      {[
        { x: 22, y: 34, label: 'Turn 1' }, { x: 110, y: 34, label: 'Turn 2' }, { x: 198, y: 34, label: 'Turn 3' },
        { x: 22, y: 80, label: 'Turn 4' }, { x: 110, y: 80, label: 'Turn 5' }, { x: 198, y: 80, label: 'Resolved' },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="10" fill="currentColor" opacity={0.12 + i * 0.09} stroke="currentColor" strokeOpacity="0.5" />
          <text x={n.x} y={n.y + 26} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="currentColor" opacity="0.6">{n.label}</text>
        </g>
      ))}
      <circle cx="198" cy="80" r="10" fill="currentColor" opacity="0.75" />
      <path d="M194 80 l2.5 2.5 l5 -5" stroke="var(--alt-paper-2)" fill="none" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
function CapScale() {
  const vals = [1, 2, 4, 8, 16, 32, 64, 128], max = 128
  return (
    <svg viewBox="0 0 220 130" className="cap-vis" preserveAspectRatio="xMidYMid meet">
      {vals.map((v, i) => {
        const h = (v / max) * 82, x = 22 + i * 23
        return (
          <g key={i}>
            <rect x={x} y={104 - h} width="13" height={h} rx="3" fill="currentColor" opacity={0.25 + i * 0.09} />
            {i === vals.length - 1 && <text x={x + 6} y={99 - h} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="currentColor">128&times;</text>}
          </g>
        )
      })}
      <line x1="18" y1="104" x2="206" y2="104" stroke="currentColor" strokeOpacity="0.2" />
      <text x="22" y="119" fontFamily="JetBrains Mono" fontSize="9" fill="currentColor" opacity="0.55">concurrent calls</text>
    </svg>
  )
}
function CapLanguage() {
  const langs = ['HI', 'TA', 'TE', 'BN', 'MR', 'EN', 'KN', 'ML']
  return (
    <svg viewBox="0 0 220 130" className="cap-vis" preserveAspectRatio="xMidYMid meet">
      {langs.map((l, i) => {
        const angle = (i / langs.length) * Math.PI * 2 - Math.PI / 2, r = 46, cx = 110, cy = 62
        const x = cx + Math.cos(angle) * r, y = cy + Math.sin(angle) * r
        return (
          <g key={l}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke="currentColor" strokeOpacity="0.2" />
            <circle cx={x} cy={y} r="15" fill="currentColor" opacity={0.08 + i * 0.04} stroke="currentColor" strokeOpacity="0.4" />
            <text x={x} y={y + 4} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="currentColor">{l}</text>
          </g>
        )
      })}
      <circle cx="110" cy="62" r="8" fill="currentColor" opacity="0.65" />
    </svg>
  )
}

const CAPS = [
  { k: 'voice', tag: '01', title: 'Sounds genuinely human', body: "Sub-300ms response time, natural turn-taking, interruption handling. Callers forget they're speaking to an AI.", Vis: CapVoice, hue: 'var(--w-saffron)', hue2: 'var(--w-clay)' },
  { k: 'context', tag: '02', title: 'Follows the full conversation', body: "Remembers what was said earlier in the call. Handles multi-turn, tangential conversations without losing the caller's intent.", Vis: CapContext, hue: 'var(--w-peri)', hue2: 'var(--w-sage)' },
  { k: 'scale', tag: '03', title: 'Scales from 1 to 10,000 calls', body: 'Handle a sudden spike with zero ramp-up. No hiring, no training, no sick days. Your capacity matches your demand.', Vis: CapScale, hue: 'var(--w-sage)', hue2: 'var(--w-peri)' },
  { k: 'language', tag: '04', title: 'India-first, 31 languages', body: 'Hindi, Tamil, Telugu, Bengali, Marathi and 26 more. Switch language mid-call. Sounds like a local on every line.', Vis: CapLanguage, hue: 'var(--w-rose)', hue2: 'var(--w-saffron)' },
]

export default function Capabilities() {
  return (
    <section className="alt-section alt-section--cream caps" id="capabilities">
      <div className="alt-wrap">
        <div className="alt-section-head alt-reveal">
          <div className="alt-left">
            <span className="alt-eyebrow"><span className="alt-dot" />What we do well</span>
            <h2 className="alt-h-section">Four things we<br /><em>obsess over.</em></h2>
          </div>
          <div className="alt-right">
            <p className="alt-lede">We don't do everything. We do the calling part exceptionally well &mdash; voice quality, conversation handling, language coverage, and scale.</p>
          </div>
        </div>

        <div className="caps__grid">
          {CAPS.map((c, i) => {
            const Vis = c.Vis
            return (
              <article key={c.k} className={`cap alt-reveal d${i % 3}`}>
                <div className="cap__wash">
                  <GradientWash hue={c.hue} hue2={c.hue2} />
                  <div className="cap__vis"><Vis /></div>
                </div>
                <div className="cap__body-wrap">
                  <div className="cap__meta">
                    <span className="alt-mono">{c.tag} / 04</span>
                    <span className="alt-mono cap__k">{c.k.toUpperCase()}</span>
                  </div>
                  <h3 className="cap__title">{c.title}</h3>
                  <p className="cap__body">{c.body}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
