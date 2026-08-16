import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import './PricingPage.css'
import FlowButton from '../FlowButton/FlowButton'
import PricingSection from './PricingSection'

const PRICING_FAQ_ITEMS = [
  {
    id: 'pricing-faq-1',
    question: 'How is Alterity priced?',
    answer:
      "Alterity is priced on connected AI conversation minutes, not per agent seat or software license. You pay only for the time your AI actually spends on live calls.",
  },
  {
    id: 'pricing-faq-2',
    question: "What's the difference between Pay as you go and Enterprise?",
    answer:
      "Pay as you go gives you the full stack — STT, TTS, LLM reasoning, telephony, and analytics — at a flat ₹5/connected minute with no minimum. Enterprise is for BFSI, healthcare, and large BPOs that need on-prem/VPC deployment, custom model fine-tuning, SOC 2/ISO 27001 compliance, and dedicated forward-deployed engineer support, priced to your volume.",
  },
  {
    id: 'pricing-faq-3',
    question: 'Is there a setup fee?',
    answer:
      "No. Pay as you go is a flat per-minute rate with no setup fee — STT, TTS, LLM, telephony, and analytics are all bundled in. Enterprise deployments that need custom fine-tuning or on-prem/VPC setup get a dedicated onboarding scoped during the volume review.",
  },
  {
    id: 'pricing-faq-4',
    question: 'Do rates come down at higher volume?',
    answer:
      "Yes. Once your monthly call volume justifies it, Enterprise unlocks a custom rate below the standard per-minute price, along with private deployment and compliance features Pay as you go doesn't include.",
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
      "Reach out via the contact button below with your monthly call volume and use case, and our team will follow up with a tailored quote, typically within one business day.",
  },
]

export default function PricingPage() {
  return (
    <div className="pricing-page">
      <PricingSection />

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
