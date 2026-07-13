import { motion } from 'motion/react'
import { Plus } from 'lucide-react'
import './IntegrationsSection.css'

// Only companies we have an actual logo asset for in /public — everything
// else rolls up into the "many more" tile at the end instead of using a
// generic stand-in icon.
const INTEGRATIONS = [
  { name: 'Slack', description: 'Post call summaries to channels.', logoSrc: '/slack-new-logo-logo-svgrepo-com.svg' },
  { name: 'Gmail', description: 'Send follow-up emails after calls.', logoSrc: '/google-gmail-svgrepo-com.svg' },
  { name: 'Salesforce', description: 'Log activities and update records.', logoSrc: '/salesforce%20logo.svg' },
  { name: 'Zoom', description: 'Schedule and start meetings.', logoSrc: '/Zoom_idWrhVhrtF_0.svg' },
  { name: 'Stripe', description: 'Check payments and send invoices.', logoSrc: '/stripe%20logo.svg' },
  { name: 'Airtable', description: 'Look up and update your bases.', logoSrc: '/airtable%20logo.svg' },
  { name: 'Google Sheets', description: 'Read and update sheets after calls.', logoSrc: '/Google_Sheets_Logo.svg' },
  { name: 'Shopify', description: 'Take and track orders by voice.', logoSrc: '/shopify%20logo.svg' },
  { name: 'Calendly', description: 'Book and update meetings on call.', logoSrc: '/calendly%20logo.svg' },
  { name: 'Notion', description: 'Read and update docs and databases.', logoSrc: '/Notion_Logo_0.svg' },
  { name: 'HubSpot', description: 'Capture and sync new leads.', logoSrc: '/hubspot%20logo.svg' },
  { name: 'And many more', description: 'Integrate with thousands of tools using Zapier, Make, or custom webhooks.', Icon: Plus },
]

const UNDERLINE_PATH =
  'M203.371.916c-26.013-2.078-76.686 1.98-114.243 8.919-37.556 6.939-78.622 17.103-122.256 28.703-43.633 11.6-4.984 14.306 43.123 7.021 48.107-7.285 93.638-16.096 146.446-17.742 52.808-1.646 105.706 5.429 158.649 14.13 52.943 8.701 105.886 19.342 158.826 29.483 52.94 10.141 52.94 10.141-11.41-19.043C371.18 14.363 322.753 5.488 281.339 2.143 239.925-1.201 203.371.916 203.371.916z'

function HighlightWord({ children }) {
  return (
    <span className="int-word">
      {children}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 418 42"
        className="int-word__underline"
        preserveAspectRatio="none"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        <path d={UNDERLINE_PATH} fill="currentColor" />
      </motion.svg>
    </span>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function IntegrationsSection() {
  return (
    <section className="int-section" id="integrations">
      <div className="int-container">
        <div className="int-header">
          <h2 className="int-heading">
            Works with the apps your team relies on <HighlightWord>every day</HighlightWord>
          </h2>
          <p className="int-subheading">
            Seamlessly integrate Alterity with the tools you already use, so your Voice AI agents fit naturally into every workflow.
          </p>
        </div>

        <motion.div
          className="int-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {INTEGRATIONS.map(({ name, description, logoSrc, Icon }) => (
            <motion.div key={name} className="int-item" variants={itemVariants}>
              <div className="int-item__icon">
                {logoSrc ? <img src={logoSrc} alt={`${name} logo`} /> : <Icon size={20} strokeWidth={1.8} />}
              </div>
              <div>
                <h3 className="int-item__name">{name}</h3>
                <p className="int-item__desc">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
