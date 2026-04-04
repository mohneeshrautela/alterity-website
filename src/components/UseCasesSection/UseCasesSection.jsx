import { useRef } from 'react'
import { useTransform, motion, useScroll } from 'motion/react'
import './UseCasesSection.css'

const INDUSTRIES = [
  {
    title: 'Pharma and Healthcare',
    description: 'Automate patient appointment scheduling, medication reminders, and follow-up calls — freeing your team to focus on care, not calls.',
    body: 'Alterity enables healthcare and pharmaceutical organizations to elevate patient engagement through an advanced Voice AI platform that automates communication, appointment reminders, and follow-ups at scale. Designed with enterprise-grade security and HIPAA compliance in mind, Alterity helps streamline operations while delivering consistent, high-quality patient experiences.',
    color: '#F3F1E6',
    image: '/Doctor.png',
  },
  {
    title: 'Supply and Logistics',
    description: 'Handle shipment updates, delivery confirmations, and driver coordination at scale with voice agents that never miss a beat.',
    body: 'Alterity equips logistics companies with an intelligent AI agent purpose-built to streamline delivery operations, automate real-time updates, coordinate drivers, and manage customer communication. By reducing manual intervention and optimizing workflows, Alterity drives greater operational efficiency and scalability across the logistics lifecycle.',
    color: '#F3F1E6',
    image: '/Logistics.png',
  },
  {
    title: 'E-commerce and Retail',
    description: 'Resolve order queries, process returns, and upsell products through natural voice conversations — 24/7, in any language.',
    body: 'Alterity helps ecommerce businesses streamline customer engagement through intelligent voice AI agents that reduce service overhead and improve conversion rates. From recovering lost sales to assisting with order inquiries, the platform manages customer interactions end to end.',
    color: '#F3F1E6',
    image: '/Ecom.png',
  },
  {
    title: 'Finance and Fintech',
    description: 'Run compliant collections, loan follow-ups, and KYC verification calls with deterministic workflows and full audit trails.',
    body: 'Alterity brings secure, intelligent voice AI agents to banking and fintech, transforming collections and customer servicing across the lifecycle. From early-stage reminders to late-stage debt recovery across all DPD buckets, our AI agents handle payment follow-ups, negotiate resolutions, and manage customer interactions with consistency and compliance. This enables financial institutions to improve recovery rates, reduce operational costs, and deliver a more structured, scalable approach to collections and support.',
    color: '#F3F1E6',
    image: '/Finance.png',
  },
  {
    title: 'Talent and Hiring',
    description: 'Screen candidates, schedule interviews, and send offer updates through conversational voice agents that represent your brand.',
    body: 'Alterity streamlines hiring with intelligent AI voice agents that manage candidate outreach, initial screening, and follow-ups with speed and consistency. By automating high-volume interactions and keeping candidates engaged throughout the process, Alterity helps teams fill roles faster while significantly reducing manual effort.',
    color: '#F3F1E6',
    image: '/Talent.png',
  },
  {
    title: 'EdTech and Learning',
    description: "Engage students with personalised check-ins, course reminders, and support calls that adapt to each learner's journey.",
    body: 'Alterity elevates EdTech platforms with intelligent voice AI agents that deliver personalized, automated support across onboarding, learner inquiries, and retention efforts. By streamlining communication and maintaining consistent engagement at scale, Alterity enables organizations to operate more efficiently while supporting sustainable growth.',
    color: '#F3F1E6',
    image: '/Teacher.png',
  },
]

function Card({ i, title, body, color, image, progress, range, targetScale }) {
  const container = useRef(null)
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="uc-card-row" style={{ zIndex: i }}>
      <motion.div
        className="uc-card"
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        {image ? (
          <div className="uc-card__left">
            <h3 className="uc-card__title uc-card__title--has-image">{title}</h3>
            {body && <p className="uc-card__body">{body}</p>}
          </div>
        ) : (
          <h3 className="uc-card__title">{title}</h3>
        )}
        {image && (
          <img src={image} alt={title} className="uc-card__image" />
        )}
      </motion.div>
    </div>
  )
}

export default function UseCasesSection() {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <section className="uc-section" id="use-cases">
      <div className="uc-header">
        <p className="uc-eyebrow">USE CASES</p>
        <h2 className="uc-heading">Industries We Supercharge</h2>
        <p className="uc-subheading">Voice AI built for the workflows that matter most in your industry.</p>
      </div>

      <div className="uc-cards" ref={container}>
        {INDUSTRIES.map((industry, i) => {
          const targetScale = 1 - (INDUSTRIES.length - i) * 0.08
          return (
            <Card
              key={i}
              i={i}
              title={industry.title}
              body={industry.body}
              color={industry.color}
              image={industry.image}
              progress={scrollYProgress}
              range={[i * (1 / INDUSTRIES.length), 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>
    </section>
  )
}
