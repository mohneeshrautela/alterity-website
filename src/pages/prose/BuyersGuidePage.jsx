import ProsePage from './ProsePage'

// Approved text from the AEO drafts File (approved by Vasu 27-28 Nov 2026). Do not edit copy without re-approval.
const OPENING = 'Choosing an AI voice agent platform in India comes down to four things: telephony that works on Indian numbers from day one, responses fast enough that callers stay on the line, real support for the languages your customers speak, and pricing that stays predictable at any volume. This guide walks through each one, the questions to ask every vendor, and where Alterity stands on it.'

const SECTIONS = [
  {
    heading: '1. What an AI voice agent platform actually does',
    text: 'An AI voice agent platform makes and answers phone calls with software that listens, thinks and speaks in real time. A complete platform bundles four layers: telephony (the phone number and call routing), speech-to-text, a language model that decides what to say, and voice synthesis. Alterity bundles all four with live analytics, so a business runs its calling workflows from one system instead of stitching vendors together.',
  },
  {
    heading: '2. Indian telephony: bundled or bolted on',
    text: 'The first question to ask any vendor is whether telephony is included or bolted on. Platforms built abroad often expect you to bring your own Indian phone lines through a separate carrier, which adds a contract, an integration and a failure point. Alterity includes Indian telephony in the platform, so inbound and outbound calls run on local numbers without a second vendor.',
  },
  {
    heading: '3. Latency: why sub-400 ms decides the call',
    text: 'On a phone call, silence reads as incompetence. If an agent takes two seconds to respond, callers talk over it or hang up. Ask every vendor for their response latency on real calls, not demos. Alterity agents respond in under 400 milliseconds, fast enough that the conversation keeps its natural rhythm.',
  },
  {
    heading: '4. Languages: what multilingual must mean in India',
    text: 'India does not take calls in one language, and many callers switch mid-sentence. Real support means the agent speaks the language end to end, not just understands it. Alterity agents call end to end in 11 Indian languages (Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia and Urdu) plus English and other mainstream foreign languages, understand speech in all 22 scheduled Indian languages, and follow the caller when they switch between Hindi and English within the same call.',
  },
  {
    heading: '5. Pricing: per-minute vs subscription',
    text: 'Voice AI pricing hides in two places: monthly minimums you pay whether or not you call, and per-minute rates rounded up to the next minute. Ask for the billing granularity, not just the headline rate. Alterity charges Rs 4 per connected minute plus GST, with no setup fee and no minimum monthly commitment. A call up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, and beyond that billing is per second.',
  },
  {
    heading: '6. Integrations and human handoffs',
    text: 'An agent that cannot reach your systems becomes another silo. Check for connections to the tools your team already uses, and for a clean handoff when a human should take over. Alterity connects with Salesforce, HubSpot, Shopify and Slack, and with thousands of tools through Zapier, Make or custom webhooks. Every call comes with a live transcript and a searchable record, and the agent hands over to your team with context when the conversation needs a person.',
  },
  {
    heading: '7. Use cases by industry',
    text: 'The clearest fit is high-volume, repeatable calling: EMI and payment reminders for NBFCs and lenders, insurance renewal reminders, COD confirmation for e-commerce and logistics, admission and fee follow-ups for education, patient follow-ups for healthcare, and lead qualification for sales teams. Alterity runs these as configured workflows with guardrails, not open-ended conversations.',
  },
  {
    heading: '8. From pilot to launch',
    text: 'The safest way to adopt voice AI is a bounded pilot: one workflow, one audience segment, clear success metrics. Our pilot checklist walks through scoping, guardrails and the numbers to agree on before the first call.',
  },
]

export const BUYERS_GUIDE_FAQ = [
  {
    q: 'What are the best AI voice agent platforms for Indian business calls?',
    a: 'Judge platforms on four things: Indian telephony included, response latency under half a second, end-to-end Indian language support, and transparent per-minute pricing. Alterity is built on exactly these: bundled Indian telephony, sub-400 ms responses, calling end to end in 11 Indian languages plus English, and Rs 4 per connected minute plus GST with no setup fee or monthly minimum.',
  },
  {
    q: 'How much does an AI voice agent cost in India?',
    a: 'Alterity charges Rs 4 per connected minute plus GST, with no setup fee and no minimum monthly commitment. A call up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, and beyond that billing is per second, so short reminder calls cost only the seconds they use.',
  },
  {
    q: 'Can AI voice agents handle calls in regional Indian languages?',
    a: 'Yes. Alterity agents call end to end in 11 Indian languages, including Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia and Urdu, plus English and other mainstream foreign languages. They understand speech in all 22 scheduled Indian languages and follow the caller when they switch between Hindi and English within the same call.',
  },
  {
    q: 'How do I move from a press-1 IVR to a conversational voice bot?',
    a: 'You do not have to replace your IVR in one step. Keep the menu for the callers it serves, and route callers who ask for more to an AI agent that handles the conversation end to end. Alterity\'s IVR Studio configures these flows, voices and guardrails, and hands off to your team with context when a human should take over.',
  },
]

export default function BuyersGuidePage() {
  const sections = SECTIONS.map((s) => ({
    heading: s.heading,
    blocks: [{ kind: 'p', text: s.text }],
  }))

  const faqSections = BUYERS_GUIDE_FAQ.map((item) => ({
    heading: item.q,
    blocks: [{ kind: 'p', text: item.a }],
  }))

  return (
    <ProsePage
      kicker="Buyer's guide"
      title="AI voice agents in India (2026): buyer's guide"
      intro={[OPENING]}
      sections={[
        ...sections,
        { heading: 'Frequently asked questions', blocks: [] },
        ...faqSections,
      ]}
      related={[
        { to: '/blog/evaluate-voice-ai-pilot', title: 'How to Evaluate a Voice AI Pilot: Calls, Corrections and Human Handoffs' },
        { to: '/pricing-comparison', title: 'AI Voice Agent Pricing in India, Compared (Nov 2026)' },
      ]}
    />
  )
}
