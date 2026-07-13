import { motion } from 'motion/react'
import './ConversationsHeading.css'

const UNDERLINE_PATH = 'M 0,10 Q 75,0 150,10 Q 225,20 300,10'

function UnderlineWord({ children }) {
  return (
    <span className="conv-word">
      {children}
      <motion.svg
        viewBox="0 0 300 20"
        preserveAspectRatio="none"
        className="conv-word__underline"
        aria-hidden="true"
      >
        <motion.path
          d={UNDERLINE_PATH}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
        />
      </motion.svg>
    </span>
  )
}

export default function ConversationsHeading() {
  return (
    <section className="conv-heading">
      <motion.h2
        className="conv-heading__text"
        initial={{ y: -16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        Conversations that <UnderlineWord>Convert</UnderlineWord>
      </motion.h2>

      <motion.p
        className="conv-heading__body"
        initial={{ y: -12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Turn every conversation into an opportunity. Our AI voice agents qualify leads, answer questions, book appointments, and provide support with natural, human-like interactions that drive real business results.
      </motion.p>
    </section>
  )
}
