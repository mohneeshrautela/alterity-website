import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import FlowButton from '../FlowButton/FlowButton'
import './PricingComparisonPage.css'

const CHECKED = 'Rates checked 6-8 November 2026 from each platform\u2019s public pricing page.'

const FX_NOTE = 'Conversions use a fixed illustrative rate of \u20b995 = $1, not live FX. Each platform still bills in its own currency.'

const RATES = [
  {
    name: 'Alterity',
    inr: {
      rate: '\u20b94 per connected minute',
      includes: 'STT, TTS, LLM, telephony and analytics bundled. 30-second pulses, INR exclusive of GST, no setup fee.',
    },
    usd: {
      rate: 'about $0.042 per connected minute',
      includes: 'STT, TTS, LLM, telephony and analytics bundled. 30-second pulses, billed in INR exclusive of GST, no setup fee.',
    },
    source: 'https://www.alterity.io/pricing',
    sourceLabel: 'alterity.io/pricing',
  },
  {
    name: 'Bolna',
    inr: {
      rate: 'from about \u20b95.7 per minute',
      includes: 'Pay as you go, no subscription. Bring-your-own-keys options can reduce provider costs. \u20b9475 free credits on signup. Telephony inclusion not stated on the page.',
    },
    usd: {
      rate: 'from $0.06 per minute',
      includes: 'Pay as you go from $0.06/min. Bring-your-own-keys options can reduce provider costs. $5 free credits on signup. Telephony inclusion not stated on the page.',
    },
    source: 'https://www.bolna.ai/pricing',
    sourceLabel: 'bolna.ai/pricing',
  },
  {
    name: 'Ringg',
    inr: {
      rate: '\u20b96 per connected minute',
      includes: 'Bundled per-minute price. Phone number \u20b9499/month and advanced analytics \u20b92/call extra.',
    },
    usd: {
      rate: 'about $0.063 per connected minute',
      includes: 'Bundled per-minute price. Phone number $5.25/month and advanced analytics $0.021/call extra.',
    },
    source: 'https://www.ringg.ai/pricing',
    sourceLabel: 'ringg.ai/pricing',
  },
  {
    name: 'Retell',
    inr: {
      rate: 'about \u20b96.7 to \u20b929.5 per minute',
      includes: 'Depends on configuration: voice infrastructure about \u20b95.2/min plus chosen voice and LLM components, itemized separately. \u20b9950 free credits. US-dollar billing.',
    },
    usd: {
      rate: '$0.07 to $0.31 per minute',
      includes: 'Depends on configuration: voice infrastructure $0.055/min plus chosen voice and LLM components, itemized separately. $10 free credits. US-dollar billing.',
    },
    source: 'https://www.retellai.com/pricing',
    sourceLabel: 'retellai.com/pricing',
  },
  {
    name: 'Vapi',
    inr: {
      rate: 'about \u20b94.75 per minute, hosting only',
      includes: 'Pre-paid hosting charge. Speech-to-text, LLM and text-to-speech providers bill separately (roughly \u20b90.76-\u20b94.28/min each per the page\u2019s ranges).',
    },
    usd: {
      rate: '$0.05 per minute, hosting only',
      includes: 'Pre-paid hosting charge. Speech-to-text, LLM and text-to-speech providers bill separately (roughly $0.008-0.045/min each per the page\u2019s ranges).',
    },
    source: 'https://www.vapi.ai/pricing',
    sourceLabel: 'vapi.ai/pricing',
  },
  {
    name: 'ElevenLabs',
    inr: {
      rate: 'from about \u20b97.6 per minute plus LLM',
      includes: 'ElevenAgents plans bundle call minutes (\u20b9570-\u20b994,050/month, effective \u20b97.6/min; extra minutes \u20b97.6, burst \u20b915.2). LLM usage billed separately by model. No ElevenLabs telephony fee, but your carrier (for example Twilio) bills its side. US-dollar billing.',
    },
    usd: {
      rate: 'from about $0.08 per minute plus LLM',
      includes: 'ElevenAgents plans bundle call minutes ($6-$990/month, effective $0.08/min; extra minutes $0.08, burst $0.16). LLM usage billed separately by model. No ElevenLabs telephony fee, but your carrier (for example Twilio) bills its side. US-dollar billing.',
    },
    source: 'https://elevenlabs.io/pricing/agents',
    sourceLabel: 'elevenlabs.io/pricing/agents',
  },
  {
    name: 'Bland',
    inr: {
      rate: '\u20b913.3 per minute, all-in',
      includes: 'Start plan: \u20b913.3/min with LLM, STT and TTS included, no token charges, \u20b90 platform fee. Build plan: \u20b911.4/min with \u20b928,405/month platform fee. Enterprise custom. US-dollar billing.',
    },
    usd: {
      rate: '$0.14 per minute, all-in',
      includes: 'Start plan: $0.14/min with LLM, STT and TTS included, no token charges, $0 platform fee. Build plan: $0.12/min with $299/month platform fee. Enterprise custom. US-dollar billing.',
    },
    source: 'https://www.bland.ai/pricing',
    sourceLabel: 'bland.ai/pricing',
  },
]

export default function PricingComparisonPage() {
  const [currency, setCurrency] = useState('inr')
  return (
    <section className="pricing-compare">
      <div className="pricing-compare__glow" aria-hidden="true" />

      <div className="pricing-compare__head">
        <h1 className="pricing-compare__heading">
          AI voice agent pricing in India,{' '}
          <span className="pricing-compare__heading-highlight">compared</span>
        </h1>
        <p className="pricing-compare__subtext">
          {CHECKED} This is a selected comparison, not the full market, and not a claim
          that Alterity is the cheapest. These are headline rates only. What each rate
          bundles, how time is rounded, and which minimums apply differ per platform,
          so the numbers are not directly comparable.
        </p>
      </div>

      <div className="pricing-compare__toggle" role="group" aria-label="Currency">
        <button
          type="button"
          className={`pricing-compare__toggle-btn${currency === 'usd' ? ' pricing-compare__toggle-btn--active' : ''}`}
          onClick={() => setCurrency('usd')}
        >
          USD
        </button>
        <button
          type="button"
          className={`pricing-compare__toggle-btn${currency === 'inr' ? ' pricing-compare__toggle-btn--active' : ''}`}
          onClick={() => setCurrency('inr')}
        >
          INR
        </button>
      </div>
      <p className="pricing-compare__fx-note">{FX_NOTE}</p>

      <div className="pricing-compare__list">
        {RATES.map((item) => (
          <div className="rate-card" key={item.name}>
            <div className="rate-card__top">
              <h2 className="rate-card__name">{item.name}</h2>
              <span className="rate-card__rate">{item[currency].rate}</span>
            </div>
            <p className="rate-card__includes">{item[currency].includes}</p>
            <a
              className="rate-card__source"
              href={item.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source: {item.sourceLabel} <ArrowUpRight size={14} strokeWidth={2.2} />
            </a>
          </div>
        ))}
      </div>

      <div className="pricing-compare__cta">
        <p className="pricing-compare__cta-text">
          Talk to the Alterity team about your call volumes.
        </p>
        <div className="pricing-compare__cta-actions">
          <FlowButton text="Start a Pilot" variant="black" />
        </div>
      </div>

      <p className="pricing-compare__footnote">
        All figures come from the linked public pages as of 6-8 November 2026 and can change
        without notice. Confirm current rates and billing terms with each platform before
        making a decision.
      </p>
    </section>
  )
}
