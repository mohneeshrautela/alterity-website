import { motion } from 'framer-motion'
import './AutomateSection.css'

const CARDS = [
  { title: 'Healthcare' },
  { title: 'Banking & Financial Services' },
  { title: 'Real Estate' },
  { title: 'Travel & Hospitality' },
  { title: 'Telecom & Utilities' },
  { title: 'Recruitment & HR' },
]

const cardVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -5,
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  },
}

function FeatureCard({ card }) {
  return (
    <motion.div
      className="auto-card"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      <h3 className="auto-card__title">{card.title}</h3>
    </motion.div>
  )
}

export default function AutomateSection() {
  return (
    <section className="automate">
      <div className="automate__inner">
        <div className="automate__block">
          <div className="automate__block-header">
            <h2 className="automate__block-heading">Built to Fit Every Industry</h2>
            <p className="automate__block-subtext">
              Whether you're in healthcare, banking & financial services, real estate, travel & hospitality, telecom & utilities, or recruitment & HR, our voice agents adapt to your industry and integrate seamlessly into your calling workflows.
            </p>
          </div>
          <div className="automate__grid">
            {CARDS.map((card) => (
              <FeatureCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
