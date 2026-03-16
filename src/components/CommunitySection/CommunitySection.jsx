import './CommunitySection.css'
import FlowButton from '../FlowButton/FlowButton'
import UseCasesCarousel from '../UseCasesCarousel/UseCasesCarousel'

export default function CommunitySection() {
  return (
    <section className="community" id="use-cases">
      <div className="community__inner">
        {/* Use Cases Carousel */}
        <UseCasesCarousel />

        {/* Enterprise Card */}
        <div className="community__card community__card--enterprise">
          <div className="community__enterprise-content">
            <div className="community__enterprise-icon">
              <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
                <path d="M24 4L8 12v14c0 8.837 6.716 17.11 16 19 9.284-1.89 16-10.163 16-19V12L24 4z"
                  stroke="var(--yellow)" strokeWidth="2.5" strokeLinejoin="round"/>
                <path d="M17 24l5 5 9-9" stroke="var(--yellow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="community__enterprise-text">
              <h2 className="community__enterprise-heading">
                Enterprise-grade compliance and control
              </h2>
              <p className="community__enterprise-desc">
                TCPA-compliant calling, call recording, full audit logs, role-based access, private deployment options, and DPDP-compliant data handling, designed for regulated industries.
              </p>
            </div>
            <FlowButton text="Talk to Sales" variant="outlined-light" className="community__enterprise-btn" />
          </div>
        </div>
      </div>
    </section>
  )
}
