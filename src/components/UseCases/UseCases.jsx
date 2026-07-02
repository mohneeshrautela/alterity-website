import { useState } from 'react'
import './UseCases.css'

const USE_CASES = [
  {
    k: 'support',
    tag: 'CUSTOMER SUPPORT',
    title: 'Handle every inbound call, first time',
    body: 'Complaints, order queries, return requests — handled on first call. No hold time, no escalation for routine issues, no missed calls at peak hours.',
    metric: { v: '68%', l: 'first-call resolution' },
    mini: () => (
      <div className="mini">
        <div className="mini__row"><span className="alt-mono alt-muted">CALLER</span><span>Priya Mehta &middot; Pune</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">ISSUE</span><span>Refund not received</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">ACTION</span><span>Re-initiated &#8377;1,240</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">STATUS</span><span className="pill pill--good">Resolved</span></div>
        <div className="mini__bar"><span style={{ width: '68%' }} /></div>
        <div className="alt-mono alt-muted" style={{ marginTop: 6 }}>&#8618; SMS confirmation sent &middot; call logged</div>
      </div>
    ),
  },
  {
    k: 'outbound',
    tag: 'OUTBOUND SALES',
    title: 'Your best SDR, running 24/7',
    body: 'Dial your entire lead list, qualify intent, handle objections, and book meetings — without a single human touching the phone.',
    metric: { v: '3.2×', l: 'more connects vs manual dialling' },
    mini: () => (
      <div className="mini">
        <div className="mini__row"><span className="alt-mono alt-muted">PROSPECT</span><span>Vikram Reddy</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">COMPANY</span><span>TechCorp &middot; 200 emp.</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">BUDGET</span><span>&#8377;2L / month</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">NEXT</span><span className="pill pill--good">Demo booked Thu</span></div>
        <div className="mini__chips">
          <span className="chip">intent &middot; high</span>
          <span className="chip">decision maker</span>
        </div>
      </div>
    ),
  },
  {
    k: 'collections',
    tag: 'DEBT RECOVERY',
    title: 'Collections calls that stay compliant',
    body: 'Remind, negotiate, and close payment plans — at scale, on every outstanding account, every day. No team fatigue, no compliance slips.',
    metric: { v: '40%', l: 'recovery on reminder calls' },
    mini: () => (
      <div className="mini">
        <div className="mini__row"><span className="alt-mono alt-muted">ACCOUNT</span><span className="alt-mono">#RL-4821</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">DUE</span><span>&#8377;12,840</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">PLAN</span><span>3 EMI &middot; &#8377;4,280 / mo</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">STATUS</span><span className="pill pill--good">Plan accepted</span></div>
      </div>
    ),
  },
  {
    k: 'leads',
    tag: 'LEAD QUALIFICATION',
    title: 'Only send sales the right yeses',
    body: 'Pre-screen every inbound lead before a human touches them. Ask the right follow-up questions, score intent, and route only the qualified ones.',
    metric: { v: '6×', l: 'qualified pipeline' },
    mini: () => (
      <div className="mini">
        <div className="mini__row"><span className="alt-mono alt-muted">LEAD</span><span>Ananya Singh</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">ROLE</span><span>VP Ops &middot; 500 emp.</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">INTENT</span><span className="pill pill--good">High</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">NEXT</span><span>AE call &middot; Mon 3pm</span></div>
      </div>
    ),
  },
  {
    k: 'booking',
    tag: 'APPOINTMENT BOOKING',
    title: 'Never miss a booking call again',
    body: 'Clinics, service centres, home services — book, reschedule, and send reminders without a receptionist picking up.',
    metric: { v: '0', l: 'missed booking calls' },
    mini: () => (
      <div className="mini">
        <div className="mini__row"><span className="alt-mono alt-muted">PATIENT</span><span>Suresh Rao &middot; new</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">REASON</span><span>Back pain, 1 week</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">SLOT</span><span>Wed 10:30 &middot; Dr Gupta</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">CONFIRM</span><span className="pill pill--good">SMS sent</span></div>
      </div>
    ),
  },
  {
    k: 'logistics',
    tag: 'LOGISTICS',
    title: 'Shipment queries on autopilot',
    body: 'Inbound calls about delivery status, delays, and re-routes — answered instantly, every time, without a call centre agent.',
    metric: { v: '24/7', l: 'shipment query coverage' },
    mini: () => (
      <div className="mini">
        <div className="mini__row"><span className="alt-mono alt-muted">AWB</span><span className="alt-mono">#DT-992110</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">ROUTE</span><span>DEL &rarr; BLR</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">ETA</span><span>Tomorrow by 6 PM</span></div>
        <div className="mini__row"><span className="alt-mono alt-muted">STATUS</span><span className="pill pill--good">Caller informed</span></div>
      </div>
    ),
  },
]

export default function UseCases() {
  const [i, setI] = useState(0)
  const c = USE_CASES[i]
  const Mini = c.mini

  return (
    <section className="alt-section uc" id="use-cases">
      <div className="alt-wrap">
        <div className="alt-section-head alt-reveal">
          <div className="alt-left">
            <span className="alt-eyebrow"><span className="alt-dot" />Where it works</span>
            <h2 className="alt-h-section">Six use cases.<br /><em>One voice layer.</em></h2>
          </div>
          <div className="alt-right">
            <p className="alt-lede">Pick a use case. Your agents are configured around your scripts, your language, and your callers &mdash; not a generic template.</p>
          </div>
        </div>

        <div className="uc__layout alt-reveal">
          <div className="uc__tabs" role="tablist">
            {USE_CASES.map((u, idx) => (
              <button key={u.k} className={`uc__tab ${idx === i ? 'is-on' : ''}`} onClick={() => setI(idx)} role="tab" aria-selected={idx === i}>
                <span className="alt-mono uc__tab-tag">{String(idx + 1).padStart(2, '0')}</span>
                <span className="uc__tab-name">{u.tag}</span>
                <span className="uc__tab-arrow" aria-hidden>&rarr;</span>
              </button>
            ))}
          </div>

          <div className="uc__panel">
            <div className="uc__panel-l">
              <span className="alt-mono alt-muted">{c.tag}</span>
              <h3 className="uc__title">{c.title}</h3>
              <p className="uc__body">{c.body}</p>
              <div className="uc__metric">
                <span className="uc__metric-v">{c.metric.v}</span>
                <span className="uc__metric-l">{c.metric.l}</span>
              </div>
            </div>
            <div className="uc__panel-r">
              <div className="uc__screen">
                <div className="uc__screen-bar">
                  <span className="alt-dot" style={{ background: 'var(--accent)' }} />
                  <span className="alt-mono">session &middot; {c.tag.toLowerCase().replace(' ', '-')}.alterity</span>
                </div>
                <Mini />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
