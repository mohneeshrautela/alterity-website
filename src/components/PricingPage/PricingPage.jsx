import { useState } from 'react'
import './PricingPage.css'
import Highlight from '../ui/Highlight'

export default function PricingPage() {
  const [email, setEmail] = useState('')
  const [agents, setAgents] = useState('')
  const [consent, setConsent] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    if (!email) { e.preventDefault(); setEmailError(true); return }
    setEmailError(false)
  }

  return (
    <div className="pricing-page">
      <div className="pricing-page__inner">
        <h1 className="pricing-page__heading">
          Pricing built for <em className="pricing-page__heading-em"><Highlight>your scale</Highlight></em>
        </h1>
        <p className="pricing-page__desc">
          Alterity doesn't believe in one-size-fits-all pricing. Our platform is designed
          for high-volume, mission-critical use cases — so our pricing is tailored to your
          business needs, scale, and compliance requirements.
        </p>

        <div className="pricing-page__card">
        {submitted ? (
          <div className="pricing-page__success">
            <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
              <circle cx="24" cy="24" r="22" stroke="var(--dark)" strokeWidth="2"/>
              <path d="M14 24l7 7 13-14" stroke="var(--dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>Thanks! We'll be in touch shortly.</p>
          </div>
        ) : (
          <form className="pricing-page__form" action="https://formspree.io/f/xbdzanrv" method="POST" onSubmit={handleSubmit} noValidate>
            <div className="pricing-form__group">
              <label className="pricing-form__label" htmlFor="pricing-email">Email</label>
              <input
                id="pricing-email"
                name="email"
                type="email"
                className={`pricing-form__input ${emailError ? 'pricing-form__input--error' : ''}`}
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setEmailError(false) }}
              />
              {emailError && (
                <span className="pricing-form__error">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#c0392b" strokeWidth="1.5"/>
                    <path d="M8 5v4M8 11v.5" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Email is required
                </span>
              )}
            </div>

            <div className="pricing-form__group">
              <label className="pricing-form__label" htmlFor="pricing-agents">Number of calling agents</label>
              <input
                id="pricing-agents"
                name="agents"
                type="number"
                min="1"
                className="pricing-form__input"
                placeholder="Enter how many tele-callers you have today"
                value={agents}
                onChange={(e) => setAgents(e.target.value)}
              />
            </div>

            <div className="pricing-form__checkbox-row">
              <input
                id="pricing-consent"
                type="checkbox"
                className="pricing-form__checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <label htmlFor="pricing-consent" className="pricing-form__checkbox-label">
                I consent to the collection and processing of my personal data in accordance with the{' '}
                <a href="#" className="pricing-form__link">Privacy Policy</a>
                {' '}and understand that I may withdraw my consent at any time.
              </label>
            </div>

            <button type="submit" className="pricing-form__submit">
              Talk to Sales
            </button>
          </form>
        )}
        </div>
      </div>
    </div>
  )
}
