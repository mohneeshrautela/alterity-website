import { motion } from 'motion/react'
import './DeploymentTimeline.css'

const MILESTONES = [
  {
    day: 'DAY 1',
    title: 'Share a real call',
    body: 'Our engineers learn your business from one recorded conversation.',
    position: 'above',
  },
  {
    day: 'DAY 2',
    title: 'Build phase begins',
    body: 'Voice, conversation flow, and testing.',
    position: 'below',
  },
  {
    day: 'DAY 4',
    title: 'First end-to-end run',
    body: 'Voice cloned, agent handling test calls.',
    position: 'above',
  },
  {
    day: 'DAY 6',
    title: 'Dry run + safety checks',
    body: 'All tests pass, ready for production.',
    position: 'below',
  },
  {
    day: 'DAY 7 · LIVE',
    title: 'Live in production',
    body: 'Your team reviews calls daily.',
    position: 'above',
    live: true,
  },
]

export default function DeploymentTimeline() {
  return (
    <section className="dt-section">
      <div className="dt-container">
        <motion.h2
          className="dt-heading"
          initial={{ y: -16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          Go live in as little as 7 days
        </motion.h2>

        <div className="dt-row">
          <motion.div
            className="dt-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
          {MILESTONES.map((m, i) => (
            <div key={m.day} className={`dt-point dt-point--${m.position}`}>
              {/* Plain div keeps the CSS-only centering transform (desktop:
                  translateX(-50%), mobile: none) intact across the media
                  query — motion lives on the inner element instead, since
                  once Framer Motion animates `y` it takes over the whole
                  `transform` property and an inline x:'-50%' would ignore
                  the mobile override, leaving content shifted off-screen. */}
              <div className="dt-point__content">
                <motion.div
                  initial={{ opacity: 0, y: m.position === 'above' ? 12 : -12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                >
                  <p className={`dt-point__day${m.live ? ' dt-point__day--live' : ''}`}>{m.day}</p>
                  <p className="dt-point__title">{m.title}</p>
                  <p className="dt-point__body">{m.body}</p>
                </motion.div>
              </div>

              {m.live && (
                <motion.span
                  className="dt-point__ping"
                  style={{ x: '-50%', y: '-50%' }}
                  animate={{ scale: [1, 1, 2.2], opacity: [0, 0.55, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', times: [0, 0.15, 1] }}
                />
              )}
              <motion.span
                className={`dt-point__dot${m.live ? ' dt-point__dot--live' : ''}`}
                style={{ x: '-50%', y: '-50%' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.4, delay: 0.15 * i + 0.2, ease: 'backOut' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
