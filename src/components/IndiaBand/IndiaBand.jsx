import './IndiaBand.css'
import { Mandala } from '../Motifs/Motifs'

export default function IndiaBand() {
  return (
    <section className="alt-section india" id="india">
      <div className="india__wash" aria-hidden />
      <div className="alt-grain" aria-hidden />
      <div className="alt-wrap">
        <div className="india__inner">
          <div className="alt-reveal">
            <span className="alt-eyebrow" style={{ color: 'var(--alt-warm-light-2)' }}><span className="alt-dot" style={{ background: 'var(--accent-bright)' }} />Built in India</span>
            <h2 className="india__title" style={{ marginTop: 18 }}>
              India speaks in a<br /><em>thousand tongues.</em><br />So should your agent.
            </h2>
            <p className="india__body">
              One country, 22 official languages, and countless dialects that shift every few hundred kilometres. Foreign voice models flatten all of that into a single accent. We don't. Alterity is trained on how India actually speaks &mdash; the code-switching, the honorifics, the regional lilt &mdash; so every caller feels heard in their own tongue.
            </p>
            <div className="india__stats">
              <div>
                <div className="india__stat-v">1.4B</div>
                <div className="india__stat-l">people, one voice layer</div>
              </div>
              <div>
                <div className="india__stat-v">31</div>
                <div className="india__stat-l">languages supported</div>
              </div>
              <div>
                <div className="india__stat-v">&lt;300ms</div>
                <div className="india__stat-l">response, in any of them</div>
              </div>
            </div>
          </div>

          <div className="india__art alt-reveal d1" aria-hidden>
            <div className="india__glyphs">&#2384;</div>
            <Mandala size={400} spin className="india__mandala" />
          </div>
        </div>
      </div>
    </section>
  )
}
