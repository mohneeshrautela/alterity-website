import { Link } from 'react-router-dom'
import FlowButton from '../../components/FlowButton/FlowButton'
import './ProsePage.css'

function Block({ block }) {
  if (block.kind === 'bullets') {
    return (
      <ul className="prose-page__bullets">
        {block.items.map((item, k) => (
          <li key={k}>{item}</li>
        ))}
      </ul>
    )
  }
  if (block.kind === 'caption') {
    return <p className="prose-page__caption prose-page__caption--inline">{block.text}</p>
  }
  return <p className="prose-page__p">{block.text}</p>
}

export default function ProsePage({ kicker, title, meta, intro = [], sections = [], related = [] }) {
  return (
    <div className="prose-page">
      <div className="prose-page__inner">
        <span className="prose-page__eyebrow">{kicker}</span>
        <h1 className="prose-page__title">{title}</h1>
        {meta && <p className="prose-page__meta">{meta}</p>}
        {intro.map((p, i) => (
          <p key={i} className="prose-page__intro">{p}</p>
        ))}
        {sections.map((s, i) => (
          <section key={i} className="prose-page__section">
            {s.heading && <h2 className="prose-page__h2">{s.heading}</h2>}
            {(s.blocks || []).map((b, j) => (
              <Block key={j} block={b} />
            ))}
          </section>
        ))}
        {related.length > 0 && (
          <section className="prose-page__related">
            <h2 className="prose-page__related-heading">Keep reading</h2>
            <ul className="prose-page__related-list">
              {related.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className="prose-page__pricing-link">{r.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}
        <div className="prose-page__cta">
          <FlowButton text="Start a Pilot" variant="dark" />
          <Link to="/pricing" className="prose-page__pricing-link">See Alterity voice AI pricing</Link>
        </div>
      </div>
    </div>
  )
}
