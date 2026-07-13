import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import './FAQSection.css'

const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'What is Alterity?',
    answer:
      'Alterity is an AI voice agent platform that helps businesses automate phone conversations across customer support, sales, lead qualification, appointment scheduling, collections, and more. Our AI agents engage in natural, human-like conversations, integrate with your existing tools, and work around the clock to help you scale customer interactions.',
  },
  {
    id: 'faq-2',
    question: "How does Alterity's pricing work?",
    answer:
      "Alterity offers flexible pricing based on your business needs, call volume, and deployment requirements. Whether you're running a pilot or scaling to thousands of conversations, our team will recommend a plan that aligns with your goals and usage.",
  },
  {
    id: 'faq-3',
    question: 'How long does it take to deploy an Alterity AI agent?',
    answer:
      'Most Alterity deployments are completed within days. We work with your team to understand your workflows, configure conversation logic, connect your existing systems, and launch a production-ready AI voice agent with minimal effort.',
  },
  {
    id: 'faq-4',
    question: 'Does Alterity replace human agents?',
    answer:
      "Alterity is built to handle the majority of routine customer conversations, not replace your entire team overnight. Most businesses start by automating high-volume, repetitive workflows like customer support, appointment scheduling, lead qualification, collections, and order updates. When a conversation requires human judgment or special handling, the AI seamlessly transfers the call to a live agent with the full conversation context. As the AI learns your workflows and confidence grows, it can gradually take on a larger share of customer interactions.",
  },
  {
    id: 'faq-5',
    question: 'Which languages does Alterity support?',
    answer:
      'Alterity supports conversations in multiple languages, including English, Hindi, Tamil, Telugu, Bengali, Marathi, Kannada, Malayalam, Gujarati, Punjabi, and more. Our AI is designed to understand regional accents and can naturally switch between languages during a conversation, creating a seamless experience for your customers.',
  },
  {
    id: 'faq-6',
    question: 'Can Alterity integrate with our existing systems?',
    answer:
      'Yes. Alterity integrates with CRMs, help desks, scheduling platforms, telephony providers, and other business tools. This enables your AI agents to access customer information, update records, trigger workflows, and deliver personalized conversations without disrupting your existing operations.',
  },
]

export default function FAQSection() {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-subheading">
            Find answers to common questions about Alterity. Can&apos;t find what you&apos;re looking for? Talk to our team.
          </p>
        </div>

        <AccordionPrimitive.Root type="single" collapsible className="faq-list">
          {FAQ_ITEMS.map((item) => (
            <AccordionPrimitive.Item key={item.id} value={item.id} className="faq-item">
              <AccordionPrimitive.Header className="faq-item__header">
                <AccordionPrimitive.Trigger className="faq-item__trigger">
                  <Plus size={18} strokeWidth={2.2} className="faq-item__icon" />
                  <span className="faq-item__question">{item.question}</span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Content className="faq-item__content">
                <p className="faq-item__answer">{item.answer}</p>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </section>
  )
}
