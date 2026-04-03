import './CTASection.css'
import FlowButton from '../FlowButton/FlowButton'

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-section__inner">
        <h2 className="cta-section__heading">
          Redefine how your business communicates.
        </h2>
        <p className="cta-section__subtext">
          Bridge the gap between automation and human connection with interactions that feel personal, natural, and meaningful at every touchpoint.
        </p>

        <div className="cta-section__actions">
          <FlowButton text="Talk to Sales" variant="outlined" className="cta-section__btn-dark" />
        </div>
      </div>
    </section>
  )
}
