import { Diamond } from 'lucide-react'
import './TestimonialTicker.css'

const QUOTES = [
  "Alterity is the fastest way we've deployed voice AI.",
  'The most natural-sounding agent we’ve tested.',
  'Alterity just gets customer calls right.',
  'Redefining what a phone call can do.',
  'Built for teams that move fast.',
  'Finally, voice AI that sounds human.',
]

export default function TestimonialTicker() {
  const loop = [...QUOTES, ...QUOTES]

  return (
    <section className="ticker">
      <div className="ticker__inner">
        <div className="ticker__track">
          {loop.map((quote, i) => (
            <span className="ticker__item" key={i}>
              <span className="ticker__quote">&ldquo;{quote}&rdquo;</span>
              <Diamond size={10} className="ticker__sep" fill="currentColor" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
