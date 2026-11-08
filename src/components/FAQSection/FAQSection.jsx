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
      'Configure workflows, integrations, guardrails, and launch checks in Alterity; the team can support onboarding where needed.',
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
    id: 'faq-new-1',
    question: 'How is an AI voice agent different from an IVR?',
    answer:
      'Traditional IVR systems follow fixed menus, whether keypad presses or simple speech commands, and rigid call trees. An AI voice agent holds a free-form two-way conversation: it understands what the caller says in their own words, asks follow-up questions, and can take actions during the call, like updating a record in your CRM or booking an appointment. Alterity offers both in one platform: IVR Studio lets you design menu-based call flows visually, and any step in a flow can hand the caller to an AI voice agent or to your team.',
  },
  {
    id: 'faq-new-2',
    question: 'Is automated calling legal in India?',
    answer: (
      <>
        Automated calls are not categorically banned in India, but the requirements depend on the call&apos;s purpose, the recipient&apos;s consent and preferences, your sector, and your telecom provider. TRAI&apos;s commercial communication rules (TCCCPR) govern this space, and specific mandates like calling windows and designated number series apply differently by call category. Review every campaign against the current rules with your compliance team before launch. Official source:{' '}
        <a href="https://trai.gov.in/tcccpr" target="_blank" rel="noopener noreferrer">trai.gov.in/tcccpr</a>. This is a plain-language overview, not legal advice.
      </>
    ),
  },
  {
    id: 'faq-new-3',
    question: 'Do people hang up when they realize it is an AI?',
    answer:
      'Hang-up rates depend heavily on the use case, the contact list, and the script, so we measure them with you during a pilot rather than quoting generic numbers. You can configure the agent to identify itself as an AI assistant at the start of the call, conversations are designed to be short and purposeful, and when a handoff number is configured, callers can be routed to a person.',
  },
  {
    id: 'faq-new-4',
    question: 'How does an AI voice agent actually work?',
    answer:
      'Three things happen in real time on every turn of the conversation: speech-to-text transcribes what the caller says, a language model decides the next response using your script and business rules, and text-to-speech speaks the reply back in a natural voice, fast enough to feel like a normal phone call. Alterity adds telephony, integrations, and guardrails around this loop, and the agent is designed to follow the script and rules you configure.',
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
              <AccordionPrimitive.Content forceMount className="faq-item__content">
                <p className="faq-item__answer">{item.answer}</p>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </section>
  )
}
