import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import './Hero.css'
import FlowButton from '../FlowButton/FlowButton'

const WAVE_BAR_COUNT = 32

const INDUSTRIES = ['Healthcare', 'Logistics', 'Fintech', 'Ecommerce', 'Hiring', 'Edtech']

const CURVE_TEXT =
  "I got a notification saying my insurance policy is about to expire, and before I go ahead with the renewal I'd like to understand exactly what I'm paying for. Could you walk me through my current coverage, tell me whether anything has changed since I first bought the policy, explain if there are better plans available for someone with my profile, and let me know the easiest way to renew while making sure there's no gap in my coverage. "

/*
 * The left and right curves are two windows onto the SAME moving strip of
 * text, not two independently-timed animations. At any instant t, the right
 * path's physical startOffset must equal the left path's physical startOffset
 * minus the left path's physical rendered length (physLLeft) — that's what
 * makes the word disappearing behind the pill's left edge the same word
 * reappearing at its right edge, at every moment, not just approximately.
 *
 * Left uses its own proven-safe sweep (startOffset from -pathLength to 0,
 * in that SVG's user units) over one period T. Right's from/to are that same
 * relationship (left's value - physLLeft, converted into right's own user
 * units via its scale factor) evaluated at t=0 and t=T, so a single shared
 * <animate> with the same duration keeps both exactly in lockstep with no
 * extra `begin` delay needed. Numbers below are derived from the actual
 * rendered path lengths (SVGPathElement.getTotalLength()) and each curve's
 * width/viewBox scale factor — see Hero.css for those.
 */
const CURVE_DUR = 18
const LEFT_OFFSET_FROM = -1819.726
const LEFT_OFFSET_TO = 0
const RIGHT_OFFSET_FROM = -3120.664
const RIGHT_OFFSET_TO = -1560.332

function WaveformMarquee() {
  const bars = Array.from({ length: WAVE_BAR_COUNT }, (_, index) => index)

  return (
    <div className="hero__waveform">
      <motion.div
        className="hero__waveform-track"
        animate={{ x: ['-50%', '0%'] }}
        transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
      >
        {[...bars, ...bars].map((index, key) => (
          <motion.span
            key={key}
            className="hero__waveform-bar"
            animate={{ height: ['20%', `${30 + (index % 8) * 7}%`, '50%', '20%'] }}
            transition={{
              duration: 0.35 + (index % 4) * 0.1,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'reverse',
              delay: index * 0.05,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

/*
 * Driven by rAF instead of a SMIL <animate repeatCount="indefinite">.
 * SMIL's own loop restart (jumping the timeline back to 0 every DUR
 * seconds) is the source of the stutter — Chromium visibly hitches for a
 * frame or two each time a SMIL animation's internal timeline wraps,
 * independent of how well the from/to values line up. Computing
 * startOffset from elapsed-time-mod-duration and writing it directly to
 * the attribute every frame has no "restart" event at all — the value is
 * just continuous sawtooth math — so there's nothing for the browser to
 * hitch on at the wrap point.
 */
function CurveMarquee() {
  const leftPathRef = useRef(null)
  const rightPathRef = useRef(null)

  useEffect(() => {
    const durMs = CURVE_DUR * 1000
    let rafId
    const startTime = performance.now()

    const tick = (now) => {
      const t = ((now - startTime) % durMs) / durMs
      if (leftPathRef.current) {
        leftPathRef.current.setAttribute('startOffset', LEFT_OFFSET_FROM + (LEFT_OFFSET_TO - LEFT_OFFSET_FROM) * t)
      }
      if (rightPathRef.current) {
        rightPathRef.current.setAttribute('startOffset', RIGHT_OFFSET_FROM + (RIGHT_OFFSET_TO - RIGHT_OFFSET_FROM) * t)
      }
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div className="hero__curves" aria-hidden="true">
      <svg className="hero__curve-svg hero__curve-svg--left" viewBox="0 0 1048 594">
        <path
          id="hero-curve-left"
          className="hero__curve-path"
          d="M0.597656 50.924805C17.4612 143.2965 97.8522 293.141 284.508 353.548C440.828 399.056 583.839 294.067 500.618 184.7492C417.397 75.4309 238.217 282.098 499.258 441.668C551.913 477.802 817.468 561.26 1046.43 565.235"
        />
        <text>
          <textPath ref={leftPathRef} href="#hero-curve-left" className="hero__curve-text hero__curve-text--left" startOffset={LEFT_OFFSET_FROM}>
            {CURVE_TEXT.repeat(2)}
          </textPath>
        </text>
      </svg>

      <svg className="hero__curve-svg hero__curve-svg--right" viewBox="0 0 1024 620">
        <path
          id="hero-curve-right"
          className="hero__curve-ribbon"
          d="M2.04309 563.872C111.592 558.268 316.491 554.016 517.963 490.064C703.017 431.323 875.319 444.531 1021.88 453.216"
        />
        <text>
          <textPath ref={rightPathRef} href="#hero-curve-right" className="hero__curve-text hero__curve-text--right" startOffset={RIGHT_OFFSET_FROM}>
            {CURVE_TEXT.repeat(2)}
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [industryIndex, setIndustryIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndustryIndex((current) => (current + 1) % INDUSTRIES.length)
    }, 2000)
    return () => clearTimeout(timer)
  }, [industryIndex])

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__heading">
          <span className="hero__heading-muted">Voice AI Agents for</span>
          <span className="hero__heading-rotate">
            &nbsp;
            {INDUSTRIES.map((industry, index) => (
              <motion.span
                key={industry}
                className="hero__heading-word"
                initial={{ opacity: 0, y: -70 }}
                transition={{ type: 'spring', stiffness: 90, damping: 16 }}
                animate={
                  industryIndex === index
                    ? { y: 0, opacity: 1 }
                    : { y: industryIndex > index ? -70 : 70, opacity: 0 }
                }
              >
                {industry}
              </motion.span>
            ))}
          </span>
        </h1>

        <p className="hero__subheader">
          Deploy human-like AI voice agents that answer calls, automate workflows, and run your business operations with speed and reliability.
        </p>

        <div className={`hero__actions ${isLoaded ? 'hero__actions--in' : ''}`}>
          <FlowButton text="Calculate Your Monthly Cost Leak" variant="black" />
        </div>
      </div>

      <div className="hero__voice">
        <CurveMarquee />
        <div className="hero__pill">
          <WaveformMarquee />
        </div>
      </div>
    </section>
  )
}
