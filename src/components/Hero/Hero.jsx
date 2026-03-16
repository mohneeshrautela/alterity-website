import { useState, useEffect } from 'react'
import { Phone, Target, Languages } from 'lucide-react'
import './Hero.css'
import FlowButton from '../FlowButton/FlowButton'

const WORDS = ['Sales', 'Support', 'Renewals', 'Collections']

function Typewriter({ words, speed = 90, deleteSpeed = 50, delay = 1800 }) {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), delay)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentWord.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)
    return () => clearTimeout(timeout)
  }, [charIndex, wordIndex, isDeleting, words, speed, deleteSpeed, delay])

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="hero__typewriter">
      {displayText}
      <span className="hero__cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__heading">
          <span className="hero__heading-line1">Human-Grade Voice AI Agents For</span>
          <Typewriter words={WORDS} speed={90} deleteSpeed={50} delay={1800} />
        </h1>

        <div className="hero__actions">
          <FlowButton text="Hear a Real Call" variant="outlined" className="hero__btn-primary" />
          <FlowButton text="Calculate Your Monthly Cost Leak" variant="outlined" className="hero__btn-secondary" />
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <Phone size={28} strokeWidth={2.5} />
            <div className="hero__stat-text">
              <strong style={{fontSize: '16px'}}>Unlimited</strong>
              <span>Concurrent Calls</span>
            </div>
          </div>

          <div className="hero__stat-divider" aria-hidden="true" />

          <div className="hero__stat">
            <Target size={28} strokeWidth={2.5} />
            <div className="hero__stat-text">
              <strong>99.9%</strong>
              <span>Adherence</span>
            </div>
          </div>

          <div className="hero__stat-divider" aria-hidden="true" />

          <div className="hero__stat">
            <Languages size={28} strokeWidth={2.5} />
            <div className="hero__stat-text">
              <strong>20+</strong>
              <span>Languages Supported</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
