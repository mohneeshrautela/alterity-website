import './CTASection.css'
import FlowButton from '../FlowButton/FlowButton'

export default function CTASection() {
  return (
    <>
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-card__illustration">
            <img src="/every%20usecase%20pic.svg" alt="" aria-hidden="true" />
          </div>

          <div className="cta-card__inner">
            <h2 className="cta-card__heading">Redefine how your business communicates.</h2>
            <p className="cta-card__subtext">
              Bridge the gap between automation and human connection with interactions that feel personal, natural, and meaningful at every touchpoint.
            </p>

            <div className="cta-card__actions">
              <FlowButton text="Talk to Sales" variant="black" />
            </div>
          </div>
        </div>
      </section>
      <div className="cta-wave-connector" aria-hidden="true" />
    </>
  )
}
