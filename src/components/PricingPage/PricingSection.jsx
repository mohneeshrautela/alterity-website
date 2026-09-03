import { useRef } from 'react'
import { Check } from 'lucide-react'
import TimelineContent from '../ui/TimelineContent'
import AnimatedNumber from '../ui/AnimatedNumber'
import './PricingSection.css'

const PLANS = [
  {
    key: 'payg',
    name: 'Pay as you go',
    badge: 'Flexible',
    description:
      'The full stack — STT, TTS, LLM reasoning, telephony, and analytics — bundled into one flat rate per minute. No setup fee.',
    price: 4,
    features: [
      'Pay only for connected minutes',
      'Full platform: STT, TTS, LLM, telephony & analytics',
      'No contracts or long-term commitments',
      'Scale seamlessly as your call volume grows',
    ],
    ctaLabel: 'Get Started',
    ctaVariant: 'light',
  },
  {
    key: 'enterprise',
    name: 'Enterprise plan',
    description: 'Built for BFSI, healthcare, and large BPOs running voice AI at scale.',
    price: null,
    features: [
      'Custom per-minute pricing for your call volume',
      'On-prem / VPC deployment & dedicated infrastructure',
      'Dedicated forward-deployed engineers & priority support',
      'SOC 2 / ISO 27001-ready compliance & data residency',
    ],
    ctaLabel: 'Contact Sales',
    ctaVariant: 'dark',
  },
]

function handleTalkToSales() {
  window.dispatchEvent(new CustomEvent('open-contact-modal'))
}

export default function PricingSection() {
  const pricingRef = useRef(null)

  return (
    <section className="pricing-section2" ref={pricingRef}>
      <div className="pricing-section2__glow" aria-hidden="true" />

      <div className="pricing-section2__head">
        <TimelineContent
          as="h1"
          animationNum={0}
          className="pricing-section2__heading"
        >
          One rate per minute,{' '}
          <TimelineContent
            as="span"
            animationNum={1}
            className="pricing-section2__heading-highlight"
          >
            everything bundled in
          </TimelineContent>
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={2}
          className="pricing-section2__subtext"
        >
          No separate bills for STT, TTS, LLM tokens, or telephony. The price is the price.
        </TimelineContent>
      </div>

      <div className="pricing-section2__pair">
        {PLANS.map((plan, index) => (
          <TimelineContent key={plan.key} as="div" animationNum={3 + index}>
            <div className="plan-card">
              <div className="plan-card__top">
                <h3 className="plan-card__name">{plan.name}</h3>
                {plan.badge && <span className="plan-card__badge">{plan.badge}</span>}
              </div>

              <p className="plan-card__description">{plan.description}</p>

              <div className="plan-card__price">
                {plan.price != null ? (
                  <>
                    <span className="plan-card__currency">₹</span>
                    <AnimatedNumber value={plan.price} className="plan-card__amount" />
                    <span className="plan-card__unit">/min</span>
                  </>
                ) : (
                  <span className="plan-card__amount plan-card__amount--custom">Custom</span>
                )}
              </div>

              <ul className="plan-card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} strokeWidth={2.2} className="plan-card__check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`plan-card__cta plan-card__cta--${plan.ctaVariant}`}
                onClick={handleTalkToSales}
              >
                {plan.ctaLabel}
              </button>
            </div>
          </TimelineContent>
        ))}
      </div>

      <TimelineContent as="p" animationNum={5} className="pricing-section2__footnote">
        All rates in INR, exclusive of GST. Billed per connected minute in 30-second pulses.
      </TimelineContent>
    </section>
  )
}
