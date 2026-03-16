import { useState, useEffect, useRef } from 'react'
import './ContactModal.css'

export default function ContactModal({ onClose }) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [agents, setAgents] = useState('')
  const [consent, setConsent] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const overlayRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleSubmit = (e) => {
    if (!email) { e.preventDefault(); setEmailError(true); return }
    setEmailError(false)
  }

  return (
    <div
      className="cm-overlay"
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div className="cm-card">
        <button className="cm-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        {submitted ? (
          <div className="cm-success">
            <svg viewBox="0 0 48 48" fill="none" width="52" height="52">
              <circle cx="24" cy="24" r="22" stroke="var(--dark)" strokeWidth="2"/>
              <path d="M14 24l7 7 13-14" stroke="var(--dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>Thanks! We'll be in touch shortly.</h3>
            <p>Our team typically responds within one business day.</p>
          </div>
        ) : (
          <>
            <div className="cm-header">
              <h2 className="cm-title">Let's talk</h2>
              <p className="cm-subtitle">Tell us a bit about your team and we'll reach out with a custom plan.</p>
            </div>

            <form className="cm-form" action="https://formspree.io/f/xbdzanrv" method="POST" onSubmit={handleSubmit} noValidate>
              <div className="cm-row">
                <div className="cm-group">
                  <label className="cm-label" htmlFor="cm-email">Work email</label>
                  <input
                    id="cm-email"
                    name="email"
                    type="email"
                    className={`cm-input ${emailError ? 'cm-input--error' : ''}`}
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(false) }}
                  />
                  {emailError && <span className="cm-error">Email is required</span>}
                </div>

                <div className="cm-group">
                  <label className="cm-label" htmlFor="cm-phone">Phone number</label>
                  <input
                    id="cm-phone"
                    name="phone"
                    type="tel"
                    className="cm-input"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="cm-group">
                <label className="cm-label" htmlFor="cm-agents">Number of calling agents</label>
                <input
                  id="cm-agents"
                  name="agents"
                  type="number"
                  min="1"
                  className="cm-input"
                  placeholder="How many tele-callers do you have today?"
                  value={agents}
                  onChange={(e) => setAgents(e.target.value)}
                />
              </div>

              <div className="cm-checkbox-row">
                <input
                  id="cm-consent"
                  type="checkbox"
                  className="cm-checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <label htmlFor="cm-consent" className="cm-checkbox-label">
                  I consent to the collection and processing of my personal data in accordance with the{' '}
                  <a href="#" className="cm-link">Privacy Policy</a>.
                </label>
              </div>

              <button type="submit" className="cm-submit">
                Contact us
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
