import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import FlowButton from '../FlowButton/FlowButton'
import './CallDemoCarousel.css'

const CARDS = [
  {
    id: 'collections',
    label: 'COLLECTIONS',
    title: 'Debt Recovery',
    colorA: '#ff9d1f',
    colorB: '#ff5a1f',
    glowRgb: '255,157,31',
    audio: '/Collections.mp3',
  },
  {
    id: 'fnol',
    label: 'INSURANCE',
    title: 'FNOL',
    colorA: '#ff5a7a',
    colorB: '#ff2f52',
    glowRgb: '255,90,122',
    audio: '/FNOL%20Demo.mp3',
  },
  {
    id: 'edtech',
    label: 'EDTECH',
    title: 'Education Lead Qualification',
    colorA: '#8fe640',
    colorB: '#4fce3a',
    glowRgb: '143,230,64',
    audio: '/audio/edtech-demo.mp3',
  },
]

/*
 * With exactly 3 cards, every card is always in exactly one of 3 slots
 * (active / next / prev) — slot = (cardIndex - activeIndex) mod 3. If more
 * cards are added later, cards more than 1 step away need to be hidden
 * entirely rather than assigned a slot.
 */
const SLOT_STYLE = {
  0: { x: 0, scale: 1, rotate: 0, zIndex: 3, opacity: 1 },
  1: { x: 178, scale: 0.9, rotate: 0, zIndex: 2, opacity: 1 },
  2: { x: -178, scale: 0.9, rotate: 0, zIndex: 2, opacity: 1 },
}

function CallCard({ card, slot, isPlaying, onToggle }) {
  const isActive = slot === 0

  return (
    <motion.div
      className="call-card"
      animate={SLOT_STYLE[slot]}
      transition={{ type: 'spring', stiffness: 220, damping: 26 }}
      style={{ zIndex: SLOT_STYLE[slot].zIndex }}
    >
      <div
        className="call-card__orb"
        style={{ '--orb-a': card.colorA, '--orb-b': card.colorB, '--orb-glow': card.glowRgb }}
      >
        <span className="call-card__orb-swirl" />
        <span className="call-card__orb-grain" />
        {isActive && (
          <button
            className="call-card__play"
            onClick={onToggle}
            aria-label={isPlaying ? 'Pause sample call' : 'Play sample call'}
          >
            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
          </button>
        )}
      </div>
      {isActive && (
        <>
          <p className="call-card__label">{card.label}</p>
          <h3 className="call-card__title">{card.title}</h3>
        </>
      )}
    </motion.div>
  )
}

export default function CallDemoCarousel() {
  const [index, setIndex] = useState(0)
  const [playingId, setPlayingId] = useState(null)
  const audioRef = useRef(null)
  const count = CARDS.length

  const go = (dir) => {
    audioRef.current?.pause()
    setPlayingId(null)
    setIndex((i) => (i + dir + count) % count)
  }

  const togglePlay = (card) => {
    const audio = audioRef.current
    if (!audio) return
    if (playingId === card.id) {
      audio.pause()
      setPlayingId(null)
      return
    }
    if (audio.src.indexOf(card.audio) === -1) audio.src = card.audio
    audio.play().catch(() => {})
    setPlayingId(card.id)
  }

  const activeCard = CARDS[index]

  return (
    <section className="calls" id="calls">
      <div className="calls__layout">
        <div className="calls__text">
          <h2 className="calls__heading">Built for Every Use Case</h2>
          <p className="calls__sub">
            From insurance claims and policy support to student enrollment and payment collections, hear how our AI voice agents handle industry-specific conversations with confidence and precision.
          </p>
          <FlowButton text="Book a call" variant="white" className="calls__cta" />
        </div>

        <div className="calls__stage">
          <button className="calls__arrow calls__arrow--left" onClick={() => go(-1)} aria-label="Previous">
            <ChevronLeft size={20} strokeWidth={2.2} />
          </button>

          <div className="calls__cards">
            {CARDS.map((card, i) => (
              <CallCard
                key={card.id}
                card={card}
                slot={(i - index + count) % count}
                isPlaying={playingId === card.id}
                onToggle={() => togglePlay(card)}
              />
            ))}
          </div>

          <button className="calls__arrow calls__arrow--right" onClick={() => go(1)} aria-label="Next">
            <ChevronRight size={20} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <audio ref={audioRef} onEnded={() => setPlayingId(null)} />
    </section>
  )
}
