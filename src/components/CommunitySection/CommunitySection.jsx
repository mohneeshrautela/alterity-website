import './CommunitySection.css'
import FlowButton from '../FlowButton/FlowButton'

export default function CommunitySection() {
  return (
    <section className="community">
      <div className="community__inner">
        {/* Compliance Card */}
        <div className="compliance-card">
          <img src="/Security.png" alt="Security" className="compliance-card__image" />
          <div className="compliance-card__content">
            <h3 className="compliance-card__title">Enterprise-grade compliance and control</h3>
            <p className="compliance-card__body">TCPA-compliant calling, call recording, full audit logs, role-based access, private deployment options, and DPDP-compliant data handling, designed for regulated industries.</p>
            <FlowButton text="Talk to Sales" variant="outlined" className="compliance-card__btn" />
          </div>
        </div>
      </div>
    </section>
  )
}
