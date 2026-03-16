import { useState } from 'react'
import './Testimonials.css'

const QUOTES = [
  {
    text: "We went from 40 agents making 800 calls a day to Alterity handling 4,000 calls daily with better connection rates. The conversations are genuinely indistinguishable from our human team.",
    author: { name: 'James Thornton', title: 'VP of Sales', company: 'Meridian Finance', initials: 'JT', color: '#6366f1' },
  },
  {
    text: "Our collections recovery rate improved 34% in the first month. Customers don't even realize they're talking to an AI — and honestly, neither did we until we checked the logs.",
    author: { name: 'Priya Nair', title: 'Head of Operations', company: 'ClearDebt Solutions', initials: 'PN', color: '#f59e0b' },
  },
  {
    text: "Alterity calls our insurance leads within 60 seconds of form submission. That speed-to-lead improvement alone increased our close rate by over 20% in the first quarter.",
    author: { name: 'Marcus Webb', title: 'Director of Growth', company: 'Apex Insurance Group', initials: 'MW', color: '#10b981' },
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? QUOTES.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === QUOTES.length - 1 ? 0 : c + 1))

  const q = QUOTES[current]

  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__label">What our customers are saying</div>

        <blockquote className="testimonials__quote">
          <span className="testimonials__quote-mark">"</span>
          {q.text}
          <span className="testimonials__quote-mark testimonials__quote-mark--close">"</span>
        </blockquote>

        <div className="testimonials__author">
          <div
            className="testimonials__avatar"
            style={{ background: q.author.color }}
          >
            {q.author.initials}
          </div>
          <div className="testimonials__author-info">
            <strong>{q.author.name}</strong>
            <span>{q.author.title}, {q.author.company}</span>
          </div>
        </div>

        <div className="testimonials__controls">
          <button className="testimonials__nav" onClick={prev} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="testimonials__counter">{current + 1}/{QUOTES.length}</span>
          <button className="testimonials__nav" onClick={next} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
