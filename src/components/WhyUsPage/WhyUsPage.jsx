import { useState, useEffect } from 'react'
import './WhyUsPage.css'

const CYCLING_WORDS = ['Answer,', 'Act,', 'Close']

const FEATURES = [
  {
    number: '01',
    title: 'Unlimited Calls. Zero Hiring.',
    tagline: 'Scale your operations instantly.',
    desc: 'Handle thousands of simultaneous calls during peak demand without expanding your team. Alterity Voice AI scales automatically so you never miss customers when volume spikes.',
  },
  {
    number: '02',
    title: 'Real Actions During Conversations',
    tagline: 'Calls that actually get things done.',
    desc: 'Alterity agents don\'t just talk. They send payment links, update your CRM, book appointments, qualify leads, and trigger workflows in real time while the conversation is happening.',
  },
  {
    number: '03',
    title: 'Long, Context-Aware Conversations',
    tagline: 'AI that remembers what was said.',
    desc: 'Whether it\'s a 20-minute sales call or a complex lending inquiry, Alterity maintains deep context and responds intelligently without losing track of the conversation.',
  },
  {
    number: '04',
    title: 'Connect With Every Lead in Under 60 Seconds',
    tagline: 'Speed is the difference between a sale and a missed opportunity.',
    desc: 'Alterity instantly answers inbound leads, ensuring every potential customer is engaged while intent is still high.',
  },
  {
    number: '05',
    title: 'Always Available, 24/7',
    tagline: 'Your best agent never sleeps.',
    desc: 'Handle inquiries, capture leads, and assist customers around the clock without downtime or missed calls.',
  },
  {
    number: '06',
    title: 'Built to Integrate With Your Business',
    tagline: 'Fits directly into your workflow.',
    desc: 'Alterity connects with CRMs, calendars, payment systems, and internal tools so every call automatically turns into action and data.',
  },
]

function CyclingTypewriter() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = CYCLING_WORDS[wordIndex]

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      return () => clearTimeout(t)
    }

    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 1200)
      return () => clearTimeout(t)
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50)
      return () => clearTimeout(t)
    }

    if (deleting && displayed.length === 0) {
      const t = setTimeout(() => {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % CYCLING_WORDS.length)
      }, 300)
      return () => clearTimeout(t)
    }
  }, [displayed, deleting, wordIndex])

  return (
    <span className="why-page__cycling">
      {displayed}
      <span className="why-page__cursor" aria-hidden="true">|</span>
    </span>
  )
}

export default function WhyUsPage() {
  return (
    <div className="why-page">
      <div className="why-page__hero">
        <h1 className="why-page__heading">
          AI Voice Agents That
          <br />
          <CyclingTypewriter />
          <br />
          Instantly.
        </h1>
      </div>

      <div className="why-page__content">
        <div className="why-page__card">
          <h2 className="why-page__card-heading">Why Choose Alterity</h2>
          <div className="why-page__grid">
            {FEATURES.map((f) => (
              <div key={f.number} className="why-page__feature">
                <div className="why-page__feature-header">
                  <span className="why-page__feature-number">{f.number}</span>
                  <h3 className="why-page__feature-title">{f.title}</h3>
                </div>
                <div className="why-page__feature-body">
                  <p className="why-page__feature-tagline">{f.tagline}</p>
                  <p className="why-page__feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
