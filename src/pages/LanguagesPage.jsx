import { Link } from 'react-router-dom'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ArrowRight, Plus } from 'lucide-react'
import '../components/FAQSection/FAQSection.css'
import './LanguagesPage.css'

const INDIAN_LANGUAGES = ['Hindi', 'Bengali', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Marathi', 'Gujarati', 'Punjabi', 'Odia', 'Urdu']
const FOREIGN_LANGUAGES = ['Spanish', 'French', 'German', 'Portuguese', 'Italian', 'Japanese', 'Chinese', 'Korean', 'Arabic', 'Russian', 'Turkish']

const FAQS = [
  {
    q: 'Which languages do Alterity agents speak?',
    a: '11 Indian languages - Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia and Urdu - plus English and mainstream foreign languages including Spanish, French, German, Portuguese, Italian, Japanese, Chinese, Korean, Arabic, Russian and Turkish. The agent understands all 22 scheduled Indian languages.',
  },
  {
    q: 'Can it switch languages mid-call?',
    a: 'Yes - it follows the caller between Hindi and English within the same conversation.',
  },
  {
    q: 'Can different campaigns run different languages?',
    a: 'Yes - language is set per campaign.',
  },
]

export default function LanguagesPage() {
  return (
    <div className="lang-page">
      <header className="lang-page__hero">
        <span className="terms-page__eyebrow">Languages</span>
        <h1>Voice AI agents that speak your customers&apos; languages.</h1>
        <p>
          Alterity agents call end to end in 11 Indian languages - Hindi, Bengali, Tamil, Telugu, Kannada,
          Malayalam, Marathi, Gujarati, Punjabi, Odia and Urdu - plus English and other mainstream foreign
          languages, including Spanish, French, German, Portuguese, Italian, Japanese, Chinese, Korean,
          Arabic, Russian and Turkish. The agent understands speech in all 22 scheduled Indian languages and
          follows the caller when they switch between Hindi and English within the same call. Language is
          configured per campaign, so each use case, from collections to COD confirmation to renewals, runs
          in the language its audience speaks.
        </p>
        <div className="lang-page__actions">
          <Link className="btn-dark" to="/contact">Start a Pilot <ArrowRight size={16} /></Link>
          <Link className="btn-outlined" to="/use-cases">See use cases</Link>
        </div>
      </header>

      <section className="lang-page__section">
        <h2>Indian languages, end to end</h2>
        <p className="lang-page__section-intro">
          Agents both understand and speak these 11 languages on calls, and understand speech in all 22
          scheduled Indian languages.
        </p>
        <div className="lang-page__chips">
          {INDIAN_LANGUAGES.map((l) => <span className="lang-page__chip" key={l}>{l}</span>)}
        </div>
      </section>

      <section className="lang-page__section">
        <h2>English and mainstream foreign languages</h2>
        <div className="lang-page__chips">
          {['English', ...FOREIGN_LANGUAGES].map((l) => <span className="lang-page__chip" key={l}>{l}</span>)}
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2 className="faq-heading">Languages, answered</h2>
          </div>
          <AccordionPrimitive.Root type="single" collapsible className="faq-list">
            {FAQS.map((f, i) => (
              <AccordionPrimitive.Item key={i} value={`faq-${i}`} className="faq-item">
                <AccordionPrimitive.Header className="faq-item__header">
                  <AccordionPrimitive.Trigger className="faq-item__trigger">
                    <Plus size={18} strokeWidth={2.2} className="faq-item__icon" />
                    <span className="faq-item__question">{f.q}</span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content forceMount className="faq-item__content">
                  <p className="faq-item__answer">{f.a}</p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>
      </section>

      <section className="lang-page__section">
        <h2>Run your next campaign in your customers&apos; language</h2>
        <div className="lang-page__actions">
          <Link className="btn-dark" to="/contact">Start a Pilot <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  )
}
