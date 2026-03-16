import './CTASection.css'
import FlowButton from '../FlowButton/FlowButton'
import PixelTrail from '../PixelTrail/PixelTrail'

export default function CTASection() {
  return (
    <section className="cta-section">
      {/* Pixel Trail */}
      <PixelTrail
        pixelSize={88}
        fadeDuration={700}
        delay={0}
        className="cta-pixel-trail"
        pixelStyle={{
          background: 'rgba(255, 255, 255, 0.55)',
          borderRadius: '50%',
          mixBlendMode: 'overlay',
        }}
      />

      <div className="cta-section__inner">
        <h2 className="cta-section__heading">
          Redefine how your business communicates.
        </h2>
        <p className="cta-section__subtext">
          At Alterity, we're bridging the gap between automation and human connection — making every call personal, natural, and meaningful.
        </p>

        <div className="cta-section__actions">
          <FlowButton text="Start a Pilot" variant="outlined-light" className="cta-section__btn-dark" />
          <FlowButton text="Hear a Real Call" variant="outlined-light" className="cta-section__btn-outlined" />
        </div>
      </div>
    </section>
  )
}
