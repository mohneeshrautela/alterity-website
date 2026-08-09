import { useState } from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import './PricingPage.css'
import FlowButton from '../FlowButton/FlowButton'

const PRICING_FAQ_ITEMS = [
  {
    id: 'pricing-faq-1',
    question: 'How is Alterity priced?',
    answer:
      "Alterity is priced on connected AI conversation minutes, not per agent seat or software license. You pay only for the time your AI actually spends on live calls.",
  },
  {
    id: 'pricing-faq-2',
    question: 'What determines the per-minute rate?',
    answer:
      "Your rate depends on call complexity, the languages spoken, the integrations and actions your agent performs mid-call, and your expected monthly volume. We recommend a rate once we understand your workflow.",
  },
  {
    id: 'pricing-faq-3',
    question: 'Is there a setup fee?',
    answer:
      "Most engagements include a one-time integration fee that covers script design, testing, and connecting Alterity to your CRM, telephony, and other systems before go-live.",
  },
  {
    id: 'pricing-faq-4',
    question: 'Do rates come down at higher volume?',
    answer:
      "Yes. As your monthly call volume grows, your effective per-minute rate decreases. Pricing is structured so scaling up with Alterity gets more efficient, not more expensive.",
  },
  {
    id: 'pricing-faq-5',
    question: 'Do you charge per seat or per license?',
    answer:
      "No. We don't sell per-agent seats or software licenses. Because pricing is usage-based, you can deploy as many AI agents as you need without extra licensing cost.",
  },
  {
    id: 'pricing-faq-6',
    question: 'How fast can we get a quote?',
    answer:
      "Share your monthly call volume and use case in the form above, and our team will follow up with a tailored quote, typically within one business day.",
  },
]

export default function PricingPage({ onPrivacyClick }) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [agents, setAgents] = useState('')
  const [outboundCalls, setOutboundCalls] = useState('')
  const [inboundCalls, setInboundCalls] = useState('')
  const [consent, setConsent] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const callRangeOptions = [
    { value: '', label: 'Select range' },
    { value: '0', label: 'None (0 calls)' },
    { value: '0-30k', label: '0 – 30K' },
    { value: '30k-60k', label: '30K – 60K' },
    { value: '60k-1L', label: '60K – 1L' },
    { value: '1L-3L', label: '1L – 3L' },
    { value: '3L+', label: '3L+' },
  ]

  const handleSubmit = (e) => {
    const missingEmail = !email
    const missingPhone = !phone
    setEmailError(missingEmail)
    setPhoneError(missingPhone)
    if (missingEmail || missingPhone) { e.preventDefault() }
  }

  return (
    <div className="pricing-page">
      <div className="pricing-page__inner">
        <h1 className="pricing-page__heading">
          Pricing built for your scale
        </h1>
        <p className="pricing-page__desc">
          Alterity doesn't believe in one-size-fits-all pricing. Our platform is designed for high-volume, mission-critical use cases, so our pricing is tailored to your business needs, scale, and compliance requirements.
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
              <label className="pricing-form__label" htmlFor="pricing-email">Email<span className="pricing-form__required">*</span></label>
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
              <label className="pricing-form__label" htmlFor="pricing-phone">Phone number<span className="pricing-form__required">*</span></label>
              <input
                id="pricing-phone"
                name="phone"
                type="tel"
                className={`pricing-form__input ${phoneError ? 'pricing-form__input--error' : ''}`}
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); setPhoneError(false) }}
              />
              {phoneError && (
                <span className="pricing-form__error">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#c0392b" strokeWidth="1.5"/>
                    <path d="M8 5v4M8 11v.5" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Phone number is required
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

            <div className="pricing-form__group">
              <label className="pricing-form__label">Monthly call volume</label>
              <div className="pricing-form__call-row">
                <div className="pricing-form__call-col">
                  <span className="pricing-form__call-tag pricing-form__call-tag--out">↑ Outbound</span>
                  <div className="pricing-form__select-wrap">
                    <select
                      id="pricing-outbound"
                      name="outbound_calls"
                      className="pricing-form__input pricing-form__select"
                      value={outboundCalls}
                      onChange={(e) => setOutboundCalls(e.target.value)}
                    >
                      {callRangeOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    <svg className="pricing-form__select-arrow" viewBox="0 0 12 8" width="12" height="8" fill="none">
                      <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="pricing-form__call-col">
                  <span className="pricing-form__call-tag pricing-form__call-tag--in">↓ Inbound</span>
                  <div className="pricing-form__select-wrap">
                    <select
                      id="pricing-inbound"
                      name="inbound_calls"
                      className="pricing-form__input pricing-form__select"
                      value={inboundCalls}
                      onChange={(e) => setInboundCalls(e.target.value)}
                    >
                      {callRangeOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    <svg className="pricing-form__select-arrow" viewBox="0 0 12 8" width="12" height="8" fill="none">
                      <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
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
                <a href="#" className="pricing-form__link" onClick={(e) => { e.preventDefault(); onPrivacyClick && onPrivacyClick(); }}>Privacy Policy</a>
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

      <div className="pricing-faq">
        <div className="pricing-faq__inner">
          <div className="pricing-faq__header">
            <h2 className="pricing-faq__heading">Pricing questions, answered</h2>
            <p className="pricing-faq__subheading">
              A few things founders and ops teams usually ask before they talk to us.
            </p>
          </div>

          <AccordionPrimitive.Root type="single" collapsible className="pricing-faq__list">
            {PRICING_FAQ_ITEMS.map((item) => (
              <AccordionPrimitive.Item key={item.id} value={item.id} className="pricing-faq__item">
                <AccordionPrimitive.Header className="pricing-faq__item-header">
                  <AccordionPrimitive.Trigger className="pricing-faq__trigger">
                    <Plus size={18} strokeWidth={2.2} className="pricing-faq__icon" />
                    <span className="pricing-faq__question">{item.question}</span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="pricing-faq__content">
                  <p className="pricing-faq__answer">{item.answer}</p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>

          <div className="pricing-faq__footer">
            <p className="pricing-faq__footer-text">Still have questions?</p>
            <FlowButton text="Contact us" variant="outlined" />
          </div>
        </div>
      </div>
    </div>
  )
}
