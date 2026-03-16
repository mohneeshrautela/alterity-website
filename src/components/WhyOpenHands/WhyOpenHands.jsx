import './WhyOpenHands.css'
import FlowButton from '../FlowButton/FlowButton'

const FEATURES = [
  {
    title: 'Unlimited Calls',
    desc: 'Scale up or down instantly based on call volume. Handle thousands of simultaneous calls without capacity limits or staffing bottlenecks.',
  },
  {
    title: 'Live Actions on Call',
    desc: 'Send payment links, pull live customer data, and transfer to human agents — all while the conversation is happening.',
  },
  {
    title: '15+ Minute Conversations',
    desc: 'Hold long, natural conversations comparable to your best human agent. Full context retention with zero hallucinations on customer data.',
  },
  {
    title: 'Call in Under 1 Minute of Drop-Off',
    desc: 'Leads are called almost instantly after entering the funnel, maximizing connection rates and boosting conversion at every stage.',
  },
  {
    title: 'Language Switching',
    desc: 'The AI switches languages mid-call based on customer preference — seamless communication with any audience, anywhere.',
  },
  {
    title: 'Interruption Handling',
    desc: 'Conversations flow naturally even when customers interrupt. The agent adapts in real time, just like a skilled human caller would.',
  },
]

export default function WhyOpenHands() {
  return (
    <section className="why-oh">
      <div className="why-oh__inner">

        {/* Left column */}
        <div className="why-oh__left">
          <h2 className="why-oh__heading">Why businesses choose Alterity</h2>
          <p className="why-oh__subtext">
            Bridging the gap between automation and human connection — making every call smarter, faster, and more impactful.
          </p>
          <FlowButton text="Start a Pilot" variant="outlined" className="why-oh__cta" />
        </div>

        {/* Right column */}
        <div className="why-oh__right">
          {FEATURES.map((f, i) => (
            <div key={i} className="why-oh__feature">
              <div className="why-oh__feature-icon">{i + 1}</div>
              <div className="why-oh__feature-body">
                <h3 className="why-oh__feature-title">{f.title}</h3>
                <p className="why-oh__feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
