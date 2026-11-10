import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './IVRPage.css'

const STEPS = [
  {
    title: 'Menu',
    desc: 'Keypad menus that route callers by what they press, with as many levels as the flow needs.',
  },
  {
    title: 'Information',
    desc: 'Play answers like hours, status, or instructions, with no agent involved.',
  },
  {
    title: 'Collect digits',
    desc: 'Capture account numbers, order IDs, or other keypad input from the caller.',
  },
  {
    title: 'AI agent',
    desc: 'Hand the call to a published Alterity AI voice agent for a free-form conversation.',
  },
  {
    title: 'Human handoff',
    desc: 'Transfer the caller to your team when a person should take over.',
  },
  {
    title: 'End call',
    desc: 'Close the call cleanly when the flow has done its job.',
  },
]

export default function IVRPage() {
  return (
    <div className="ivr-page">
      <header className="ivr-page__hero">
        <span className="terms-page__eyebrow">IVR Studio</span>
        <h1>Design phone menus visually. Hand off to AI when the call needs it.</h1>
        <p>
          Alterity IVR Studio is a visual call-flow builder inside the Alterity dashboard. Map the path every
          caller takes - menus, information, keypad input, and handoffs - and bring in an AI voice agent at
          any step.
        </p>
        <div className="ivr-page__actions">
          <Link className="btn-dark" to="/contact">Start a Pilot <ArrowRight size={16} /></Link>
          <Link className="btn-outlined" to="/product">See the platform</Link>
        </div>
      </header>

      <section className="ivr-page__section">
        <h2>Every step, one canvas</h2>
        <p className="ivr-page__section-intro">
          A flow is a directed graph of steps. Drag them onto the canvas, connect them, and the caller walks
          the path you designed.
        </p>
        <div className="ivr-page__steps">
          {STEPS.map((s) => (
            <div className="ivr-page__step" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ivr-page__section">
        <h2>AI when the call needs it, menus when it doesn&apos;t</h2>
        <p className="ivr-page__body">
          AI is a step, not a requirement. A menu-only flow is complete on its own and can be assigned to one
          of your phone numbers. When a caller&apos;s need goes beyond a menu, the flow hands them to an
          Alterity AI voice agent that understands free-form speech, asks follow-up questions, and can take
          actions during the call - and transfers to your team where you configure it.
        </p>
      </section>

      <section className="ivr-page__section">
        <h2>Managed in the Alterity dashboard</h2>
        <p className="ivr-page__body">
          Flows live alongside your agents, campaigns, and call activity in the same workspace. Each flow
          carries its own settings: voice and language, input behavior, business hours, and safety limits.
          Test a flow in the built-in simulator, which walks keypresses step by step, before assigning it to
          a number.
        </p>
        <p className="ivr-page__body">
          Compare plans on the <Link to="/pricing">pricing page</Link>, or browse{' '}
          <Link to="/use-cases">voice AI use cases by industry</Link>.
        </p>
        <div className="ivr-page__actions">
          <Link className="btn-dark" to="/contact">Start a Pilot <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  )
}
