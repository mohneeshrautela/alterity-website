import { useState, useRef } from 'react'
import './SDKSection.css'
import FlowButton from '../FlowButton/FlowButton'
import BorderTrail from '../BorderTrail/BorderTrail'
import Globe from '../Globe/Globe'

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.25,
  dark: 1,
  diffuse: 0.5,
  mapSamples: 16000,
  mapBrightness: 1.6,
  baseColor: [0.96, 0.94, 0.89],
  markerColor: [240 / 255, 247 / 255, 107 / 255],
  glowColor: [0.91, 0.96, 0.35],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [28.6139, 77.209], size: 0.09 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
    { location: [51.5074, -0.1278], size: 0.08 },
    { location: [48.8566, 2.3522], size: 0.07 },
  ],
}

export default function SDKSection() {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef(null)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
    }
  }

  const handleTimeUpdate = () => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    setProgress((audio.currentTime / audio.duration) * 100)
  }

  const handleEnded = () => {
    setPlaying(false)
    setProgress(0)
  }

  return (
    <section className="sdk-section" id="calls">
      <audio
        ref={audioRef}
        src="/Debt Recovery Recording.mp3"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
      <div className="sdk-section__inner">
        <div className="sdk-content">
          {/* Left Panel */}
          <div className="sdk-content__left">
            <h2 className="sdk-content__heading">Human-Like Voice AI Agents for Real Conversations</h2>
            <p className="sdk-content__desc">
              Natural pacing, real-world interruption handling, and context-aware responses —
              Alterity agents sound and act like your best human caller.
            </p>
            <ul className="sdk-content__features">
              <li><span className="sdk-feature-check">✓</span>15+ minute conversations without losing context</li>
              <li><span className="sdk-feature-check">✓</span>Handles interruptions naturally</li>
              <li><span className="sdk-feature-check">✓</span>Multi-language, mid-call switching</li>
              <li><span className="sdk-feature-check">✓</span>Zero hallucinations on customer data</li>
            </ul>
            <FlowButton text="Start a Pilot" variant="outlined" className="sdk-content__cta" />
          </div>

          {/* Right Panel – Player Card */}
          <div className="sdk-terminal-wrapper">
            <BorderTrail
              size={90}
              style={{
                boxShadow:
                  '0px 0px 40px 20px rgba(232,245,90,0.35), 0 0 80px 40px rgba(232,245,90,0.15)',
              }}
              transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
            />

            <div className="sdk-player-card">
              {/* Header label */}
              <div className="sdk-player-label">
                Listen to a real debt collection call handled by our voice agent.
              </div>

              {/* Metric banner */}
              <div className="sdk-player-metric">
                15%+ increase in recovery vs. humans
              </div>

              {/* Globe stage */}
              <div className="sdk-player-stage">
                <Globe config={GLOBE_CONFIG} rotationSpeed={0.0008} />

                {/* Radial glow */}
                <div className={`sdk-stage-glow ${playing ? 'sdk-stage-glow--active' : ''}`} />

                {/* Center: circular ring + play button */}
                <div
                  className="sdk-stage-center"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const cx = rect.left + rect.width / 2
                    const cy = rect.top + rect.height / 2
                    const dx = e.clientX - cx
                    const dy = e.clientY - cy
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    const innerR = rect.width * 0.32
                    const outerR = rect.width * 0.5
                    if (dist >= innerR && dist <= outerR) {
                      let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90
                      if (angle < 0) angle += 360
                      const pct = (angle / 360) * 100
                      setProgress(pct)
                      const audio = audioRef.current
                      if (audio && audio.duration) {
                        audio.currentTime = (pct / 100) * audio.duration
                      }
                    }
                  }}
                >
                  {/* SVG progress ring */}
                  <svg className="sdk-ring-svg" viewBox="0 0 120 120">
                    {/* Track */}
                    <circle
                      cx="60" cy="60" r="52"
                      fill="none"
                      stroke="rgba(245,240,227,0.1)"
                      strokeWidth="3"
                    />
                    {/* Progress arc */}
                    <circle
                      cx="60" cy="60" r="52"
                      fill="none"
                      stroke="rgba(245,240,227,0.9)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 52}`}
                      strokeDashoffset={`${2 * Math.PI * 52 * (1 - progress / 100)}`}
                      transform="rotate(-90 60 60)"
                      style={{ transition: 'stroke-dashoffset 0.08s linear' }}
                    />
                  </svg>

                  {/* Play/pause button */}
                  <button
                    className={`sdk-stage-btn ${playing ? 'sdk-stage-btn--playing' : ''}`}
                    onClick={(e) => { e.stopPropagation(); togglePlay() }}
                    aria-label={playing ? 'Pause' : 'Play'}
                  >
                    {playing ? (
                      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" rx="1.5" />
                        <rect x="14" y="4" width="4" height="16" rx="1.5" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                        <path d="M8 5.14v14l11-7-11-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="sdk-player-footer">
                <FlowButton text="Start a Pilot" variant="outlined-light" className="sdk-player-cta" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
