import { useState, useEffect } from 'react'
import './Languages.css'
import { Mandala } from '../Motifs/Motifs'

const LANGS = [
  ['Hindi', 'HI', 'hi-IN'], ['Bengali', 'BN', 'bn-IN, bn-BD'], ['Tamil', 'TA', 'ta-IN, ta-SG'],
  ['Telugu', 'TE', 'te-IN'], ['Marathi', 'MR', 'mr-IN'], ['Kannada', 'KN', 'kn-IN'],
  ['Malayalam', 'ML', 'ml-IN'], ['Gujarati', 'GU', 'gu-IN'], ['Punjabi', 'PA', 'pa-IN'],
  ['Odia', 'OD', 'od-IN'], ['Urdu', 'UR', 'ur-IN, ur-PK'], ['Assamese', 'AS', 'as-IN'],
  ['English', 'EN', 'en-IN, en-GB, en-US'], ['Spanish', 'ES', 'es-ES, es-MX'], ['Portuguese', 'PT', 'pt-BR, pt-PT'],
  ['French', 'FR', 'fr-FR, fr-CA'], ['German', 'DE', 'de-DE'], ['Italian', 'IT', 'it-IT'],
  ['Dutch', 'NL', 'nl-NL'], ['Polish', 'PL', 'pl-PL'], ['Swedish', 'SV', 'sv-SE'],
  ['Turkish', 'TR', 'tr-TR'], ['Arabic', 'AR', 'ar-SA, ar-EG'], ['Russian', 'RU', 'ru-RU'],
  ['Greek', 'EL', 'el-GR'], ['Czech', 'CS', 'cs-CZ'], ['Hungarian', 'HU', 'hu-HU'],
  ['Mandarin', 'ZH', 'zh-CN, zh-TW'], ['Japanese', 'JA', 'ja-JP'], ['Korean', 'KO', 'ko-KR'],
  ['Indonesian', 'ID', 'id-ID'],
]

const PHRASES = [
  { lang: 'HI', glyph: 'अ', text: '"Namaste! Main aapki kaise madad kar sakta hun?"', native: 'नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ?' },
  { lang: 'TA', glyph: 'அ', text: '"Vanakkam! Ungalukku ennal udhavi seiya mudiyuma?"', native: 'வணக்கம்! உங்களுக்கு நான் எப்படி உதவலாம்?' },
  { lang: 'TE', glyph: 'అ', text: '"Namaskaram! Meeku ela sahayam cheyagalanu?"', native: 'నమస్కారం! మీకు ఎలా సహాయం చేయగలను?' },
  { lang: 'BN', glyph: 'অ', text: '"Namaskar! Ami apnar ki sahajyo korte pari?"', native: 'নমস্কার! আমি আপনাকে কীভাবে সাহায্য করতে পারি?' },
  { lang: 'MR', glyph: 'अ', text: '"Namaskar! Mi tumchi kashi madad karu shakto?"', native: 'नमस्कार! मी तुमची कशी मदत करू शकतो?' },
]

export default function Languages() {
  const [q, setQ] = useState('')
  const [pick, setPick] = useState(0)
  const [pi, setPi] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setPi((p) => (p + 1) % PHRASES.length), 3000)
    return () => clearInterval(id)
  }, [])

  const filtered = LANGS.filter(([n, c, l]) => {
    const s = q.trim().toLowerCase()
    if (!s) return true
    return n.toLowerCase().includes(s) || c.toLowerCase().includes(s) || l.toLowerCase().includes(s)
  })
  const indianCount = LANGS.filter((l) => l[2].includes('IN')).length
  const ph = PHRASES[pi]

  return (
    <section className="alt-section alt-section--paper langs" id="languages">
      <div className="alt-motif-layer" aria-hidden>
        <Mandala size={520} className="alt-mandala--ink" style={{ right: '-160px', top: '40px', opacity: 'calc(0.04 * var(--motif))' }} />
      </div>
      <div className="alt-wrap">
        <div className="alt-section-head alt-reveal">
          <div className="alt-left">
            <span className="alt-eyebrow"><span className="alt-dot" />India-first, globally ready</span>
            <h2 className="alt-h-section">31 languages.<br /><em>{indianCount} Indian</em>, rest global.</h2>
          </div>
          <div className="alt-right">
            <p className="alt-lede">Your agent speaks the caller's language &mdash; dialect included. Hindi in Lucknow sounds different from Hindi in Delhi. We handle that.</p>
          </div>
        </div>

        <div className="langs__hero alt-reveal">
          <div className="langs__phrase">
            <span className="langs__phrase-deva">{ph.glyph}</span>
            <span className="alt-mono langs__phrase-lang">SAYING IT IN &middot; {ph.lang}</span>
            <div className="langs__phrase-text" key={pi}>{ph.text}</div>
            <div className="langs__phrase-native">{ph.native}</div>
          </div>
          <div className="langs__search-card">
            <div className="langs__search">
              <svg width="15" height="15" viewBox="0 0 14 14" aria-hidden><circle cx="6" cy="6" r="4" fill="none" stroke="currentColor" /><path d="M9 9l3 3" stroke="currentColor" strokeLinecap="round" /></svg>
              <input type="text" placeholder="Search 31 languages…" value={q} onChange={(e) => setQ(e.target.value)} />
              <span className="alt-mono alt-muted">{filtered.length}/31</span>
            </div>
            <div className="langs__stat">
              <span className="langs__stat-v">{indianCount}</span>
              <span className="langs__stat-l">Indian languages &amp; dialects,<br />spoken the way locals actually speak.</span>
            </div>
          </div>
        </div>

        {!q && <div className="langs__label">Indian languages</div>}
        <div className="langs__grid alt-reveal">
          {filtered.map(([n, c, l], i) => {
            const isIndian = l.includes('IN')
            return (
              <button key={c} className={`lang ${i === pick ? 'is-on' : ''} ${isIndian && !q ? 'lang--indian' : ''}`} onClick={() => setPick(i)}>
                <span className="lang__code">{c}</span>
                <span className="lang__name">{n}</span>
                <span className="lang__locale">{l}</span>
              </button>
            )
          })}
        </div>
        {!q && <div className="langs__label" style={{ marginTop: 18 }}>Global languages</div>}
      </div>
    </section>
  )
}
