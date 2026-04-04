import 'flag-icons/css/flag-icons.min.css'
import './LanguagesSection.css'

const LANGUAGES = [
  { name: 'Indian',     code: 'in' },
  { name: 'Spanish',    code: 'es' },
  { name: 'French',     code: 'fr' },
  { name: 'German',     code: 'de' },
  { name: 'Italian',    code: 'it' },
  { name: 'Portuguese', code: 'pt' },
  { name: 'Russian',    code: 'ru' },
  { name: 'Japanese',   code: 'jp' },
  { name: 'English',    code: 'gb' },
  { name: 'Arabic',     code: 'sa' },
]

export default function LanguagesSection() {
  return (
    <section className="lang-section">
      <div className="lang-inner">
        <h2 className="lang-heading">Multilingual Voice AI Agent that speaks 25+ languages.</h2>
        <p className="lang-sub">
          Hindi, Tamil, Telugu, Marathi, Kannada, Indian English, Arabic, Dutch, German, French and more.
        </p>
        <div className="lang-grid">
          {LANGUAGES.map((l) => (
            <div key={l.name} className="lang-card">
              <span className={`fi fi-${l.code} lang-card__flag`} />
              <span className="lang-card__name">{l.name}</span>
            </div>
          ))}
          <div className="lang-card lang-card--more">
            <span className="lang-card__flag" style={{ fontSize: '20px', lineHeight: 1 }}>🌐</span>
            <span className="lang-card__name">More</span>
          </div>
        </div>
      </div>
    </section>
  )
}
