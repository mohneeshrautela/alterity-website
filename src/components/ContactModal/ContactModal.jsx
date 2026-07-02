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
      className="modal"
      ref={overlayRef}
      onMouseDown={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div className="modal__card">
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
        </button>

        {submitted ? (
          <div className="modal__done">
            <div className="modal__tick">
              <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="13" stroke="currentColor" fill="none" /><path d="M8 14l4 4 8-9" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" /></svg>
            </div>
            <h3 className="alt-h-section" style={{ fontSize: 32 }}>We're on it.</h3>
            <p style={{ color: 'var(--alt-ink-2)', fontSize: 15, lineHeight: 1.55 }}>Someone from our team will reach out within a business day. Look for an email from <span className="alt-mono">contact@alterity.io</span>.</p>
            <button className="alt-btn alt-btn--ink" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <span className="alt-eyebrow"><span className="alt-dot" />Book a demo</span>
            <h3 className="alt-h-section" style={{ fontSize: 32, marginTop: 8 }}>Tell us about your calls.</h3>
            <p style={{ color: 'var(--alt-ink-2)', fontSize: 15, marginTop: 8, lineHeight: 1.55 }}>Two minutes. We use what you share to come back with an agent built around your actual use case.</p>

            <form
              className="modal__form"
              action="https://formspree.io/f/xbdzanrv"
              method="POST"
              onSubmit={handleSubmit}
              noValidate
            >
              <label>
                <span className="alt-mono alt-muted">Work email</span>
                <input
                  id="cm-email"
                  name="email"
                  type="email"
                  placeholder="rahul@company.in"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailError(false) }}
                />
                {emailError && <span className="modal__error">Email is required</span>}
              </label>

              <label>
                <span className="alt-mono alt-muted">Phone number</span>
                <input
                  id="cm-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>

              <label className="full">
                <span className="alt-mono alt-muted">Number of calling agents</span>
                <input
                  id="cm-agents"
                  name="agents"
                  type="number"
                  min="1"
                  placeholder="How many tele-callers do you have today?"
                  value={agents}
                  onChange={(e) => setAgents(e.target.value)}
                />
              </label>

              <label className="full modal__checkbox-row">
                <input
                  id="cm-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <span className="modal__checkbox-label">
                  I consent to the collection and processing of my personal data in accordance with the{' '}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      onClose()
                      window.dispatchEvent(new CustomEvent('navigate-to-privacy'))
                    }}
                  >Privacy Policy</a>.
                </span>
              </label>

              <div className="modal__actions full">
                <button type="button" className="alt-btn alt-btn--paper" onClick={onClose}>Cancel</button>
                <button type="submit" className="alt-btn alt-btn--ink">Contact us &rarr;</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
