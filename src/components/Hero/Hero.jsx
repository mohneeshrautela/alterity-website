import './Hero.css'
import FlowButton from '../FlowButton/FlowButton'

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero__bg-video"
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero__content">
        <h1 className="hero__heading">
          Human-Like Voice AI Agents that Run Your Operations
        </h1>
        <p className="hero__subheader">
          Voice AI agents that handle conversations, execute workflows, and run operations at scale, and constantly improve.
        </p>
        <div className="hero__actions">
          <FlowButton text="Calculate Your Monthly Cost Leak" variant="white" className="hero__btn-secondary" />
        </div>
      </div>
    </section>
  )
}
