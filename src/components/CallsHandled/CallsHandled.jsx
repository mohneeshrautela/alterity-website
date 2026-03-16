import { useState } from 'react'
import TextScramble from '../TextScramble/TextScramble'
import FlowButton from '../FlowButton/FlowButton'
import './CallsHandled.css'

export default function CallsHandled() {
  const [trigger, setTrigger] = useState(true)

  return (
    <section className="calls-handled">
      <div className="calls-handled__inner">
        <TextScramble
          as="h2"
          className="calls-handled__number"
          duration={1.4}
          speed={0.03}
          characterSet="0123456789"
          trigger={trigger}
          onScrambleComplete={() => setTrigger(false)}
          onHoverStart={() => setTrigger(true)}
        >
          1,000,000+
        </TextScramble>

        <p className="calls-handled__label">Calls Handled by Alterity Agents</p>

        <p className="calls-handled__desc">
          From loan sales to collections, our voice agents operate 24/7 at enterprise scale —
          handling millions of real customer conversations with zero fatigue and full compliance.
        </p>

        <FlowButton text="See How It Works" variant="outlined" />
      </div>
    </section>
  )
}
