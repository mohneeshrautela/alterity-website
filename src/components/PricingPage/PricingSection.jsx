import { Fragment } from 'react'
import { motion } from 'motion/react'
import { Check, Minus, PhoneCall } from 'lucide-react'
import './PricingSection.css'

const PLANS = [
  {
    key: 'payg',
    name: 'Pay as you go',
    price: '₹5',
    unit: '/connected minute',
  },
  {
    key: 'enterprise',
    name: 'Enterprise',
    ctaLabel: 'Contact Sales',
    ctaIcon: PhoneCall,
    ctaVariant: 'outline',
  },
]

const FEATURE_ROWS = [
  { label: 'Proprietary STT — tuned for Indian speech', values: ['check', 'check'] },
  { label: 'Natural TTS', values: ['check', 'check'] },
  { label: 'Best-in-class LLM', values: ['check', 'check'] },
  { label: 'Telephony', values: ['check', 'check'] },
  { label: 'Basic Analytics', values: ['check', 'check'] },
  { label: 'On-Prem Deployment', values: ['minus', 'check'] },
  { label: 'FDE Support (Outcome Support)', values: ['minus', 'check'] },
  { label: 'Phone number', values: ['₹499 / month', 'Included'] },
  { label: 'Concurrency', values: ['As per requirement', 'Dedicated, unlimited'] },
]

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: 'easeOut' },
  }),
}

function handleContactSales() {
  window.dispatchEvent(new CustomEvent('open-contact-modal'))
}

export default function PricingSection({ onTalkToSales }) {
  return (
    <section className="pricing-section">
      <motion.div
        className="pricing-section__head"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
      >
        <h1 className="pricing-section__heading">
          Conversations at scale.
        </h1>
        <p className="pricing-section__subtext">
          Costs that stay predictable.
        </p>
      </motion.div>

      <motion.div
        className="pricing-compare"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        custom={1}
      >
        <div className="pricing-compare__scroll">
          <div className="pricing-compare__grid">
            <div className="pricing-compare__header-spacer" />
            {PLANS.map((plan) => (
              <div className="pricing-compare__plan" key={plan.key}>
                <p className="pricing-compare__plan-name">{plan.name}</p>
                {plan.price && (
                  <p className="pricing-compare__plan-price">
                    <span className="pricing-compare__plan-amount">{plan.price}</span>
                    <span className="pricing-compare__plan-unit">{plan.unit}</span>
                  </p>
                )}
                {plan.ctaLabel && (
                  <button
                    className={`pricing-compare__cta pricing-compare__cta--${plan.ctaVariant}`}
                    onClick={handleContactSales}
                  >
                    {plan.ctaLabel}
                    <plan.ctaIcon size={16} strokeWidth={2.2} />
                  </button>
                )}
              </div>
            ))}

            {FEATURE_ROWS.map((row, rowIndex) => {
              const alt = rowIndex % 2 === 1
              return (
                <Fragment key={row.label}>
                  <div className={`pricing-compare__feature ${alt ? 'pricing-compare__cell--alt' : ''}`}>
                    {row.label}
                  </div>
                  {row.values.map((val, i) => (
                    <div
                      className={`pricing-compare__value ${alt ? 'pricing-compare__cell--alt' : ''}`}
                      key={i}
                    >
                      {val === 'check' && (
                        <Check size={16} strokeWidth={2.6} className="pricing-compare__icon pricing-compare__icon--check" />
                      )}
                      {val === 'minus' && (
                        <Minus size={16} strokeWidth={2.6} className="pricing-compare__icon pricing-compare__icon--minus" />
                      )}
                      {val !== 'check' && val !== 'minus' && (
                        <span className="pricing-compare__text">{val}</span>
                      )}
                    </div>
                  ))}
                </Fragment>
              )
            })}
          </div>
        </div>
      </motion.div>

      <p className="pricing-section__footnote">
        *Final billed amount may vary based on prevailing exchange rates and applicable
        taxes. Enterprise rates are quoted on request.
      </p>
    </section>
  )
}
