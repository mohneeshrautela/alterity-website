import { useState, useEffect } from 'react'
import './SDKSection.css'
import FlowButton from '../FlowButton/FlowButton'

const WORDS = ['Sales', 'Support', 'Collections', 'Renewals']

const FEATURES = [
  { num: '01', text: 'Human-like voice quality for natural conversations at scale' },
  { num: '02', text: 'Deterministic workflows for precise execution that follows business rules' },
  { num: '03', text: 'Native integrations to take action across any system, channel, or API' },
  { num: '04', text: 'Seamless human handoff when conversations need it' },
  { num: '05', text: 'Built for scale with parallel AI calling infrastructure' },
  { num: '06', text: 'Multilingual conversations across global and Indian languages' },
]

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
    <span className="sdk-heading__light">
      {displayText}
      <span className="sdk-heading__cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </span>
  )
}

export default function SDKSection() {
  return (
    <section className="sdk-section" id="calls">
      <div className="sdk-layout">

        {/* Left */}
        <div className="sdk-left">
          <p className="sdk-eyebrow">VOICE AI AGENTS</p>
          <h2 className="sdk-heading">
            <span className="sdk-heading__dark">Voice Agents For</span>
            <Typewriter words={WORDS} speed={90} deleteSpeed={50} delay={1800} />
          </h2>
          <p className="sdk-desc">
            Voice AI agents customized to your workflows, enabling seamless customer interactions,
            intelligent decision-making, and continuous operations around the clock.
          </p>
          <FlowButton text="Start a Pilot" variant="outlined" className="sdk-cta" />
        </div>

        {/* Right */}
        <div className="sdk-right">
          {FEATURES.map((f, i) => (
            <div className="sdk-feature" key={i}>
              <span className="sdk-feature__num">{f.num}</span>
              <span className="sdk-feature__text">{f.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
