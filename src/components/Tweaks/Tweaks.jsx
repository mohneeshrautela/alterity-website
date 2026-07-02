import { useState, useEffect } from 'react'
import './Tweaks.css'

const ACCENTS = [
  { h: 38, label: 'Terracotta', c: 'oklch(0.62 0.14 38)' },
  { h: 22, label: 'Clay', c: 'oklch(0.62 0.14 22)' },
  { h: 66, label: 'Saffron', c: 'oklch(0.66 0.13 66)' },
  { h: 150, label: 'Sage', c: 'oklch(0.58 0.12 150)' },
]

export default function Tweaks() {
  const [open, setOpen] = useState(false)
  const [accent, setAccent] = useState(() => Number(localStorage.getItem('alt-accent') || 38))
  const [motif, setMotif] = useState(() => Number(localStorage.getItem('alt-motif') ?? 1))

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-h', accent)
    localStorage.setItem('alt-accent', accent)
  }, [accent])
  useEffect(() => {
    document.documentElement.style.setProperty('--motif', motif)
    localStorage.setItem('alt-motif', motif)
  }, [motif])

  if (!open) {
    return (
      <button className="tw__toggle-btn" onClick={() => setOpen(true)}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 4h10M2 7h10M2 10h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
        Tweaks
      </button>
    )
  }
  return (
    <div className="tw">
      <div className="tw__head">
        <span className="tw__title">Tweaks</span>
        <button className="tw__close" onClick={() => setOpen(false)} aria-label="Close">
          <svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
        </button>
      </div>

      <div className="tw__group">
        <div className="tw__label">Accent</div>
        <div className="tw__swatches">
          {ACCENTS.map((a) => (
            <button key={a.h} className={`tw__sw ${accent === a.h ? 'is-on' : ''}`} style={{ background: a.c }} onClick={() => setAccent(a.h)} title={a.label} aria-label={a.label} />
          ))}
        </div>
      </div>

      <div className="tw__group">
        <div className="tw__label"><span>Indian motifs</span><span className="alt-mono">{Math.round(motif * 100)}%</span></div>
        <input type="range" min="0" max="1.6" step="0.1" value={motif} onChange={(e) => setMotif(Number(e.target.value))} />
      </div>
    </div>
  )
}
