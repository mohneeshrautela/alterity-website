import { useMemo } from 'react'
import { motion } from 'motion/react'
import { Activity, Languages as LanguagesIcon, MessageCircle } from 'lucide-react'
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, Tooltip } from 'recharts'
import ChatInterface from '../ui/ChatInterface'
import './PlatformFeatures.css'

const CHAT_CONFIG = {
  leftPerson: { name: 'Maria', avatar: null },
  rightPerson: { name: 'Alterity AI', avatar: null },
  messages: [
    { id: 1, sender: 'left', type: 'text', content: 'Hi, I need to reschedule my appointment for next week.', loader: { enabled: true, duration: 900 } },
    { id: 2, sender: 'right', type: 'text', content: 'Of course! I found your booking for Tuesday, 10 AM.', loader: { enabled: true, duration: 1100 } },
    { id: 3, sender: 'right', type: 'text', content: 'Would Thursday at 2 PM work instead?', loader: { enabled: true, duration: 900 } },
    { id: 4, sender: 'left', type: 'text', content: 'Thursday at 2 works great, thank you!', loader: { enabled: true, duration: 800 } },
    { id: 5, sender: 'right', type: 'text-with-links', content: "You're all set — confirmation sent.", links: [{ text: 'View booking' }], loader: { enabled: true, duration: 1000 } },
  ],
}

const CHAT_UI_CONFIG = {
  height: 340,
  backgroundColor: '#faf9f4',
  autoRestart: true,
  restartDelay: 2500,
  loaderDotColor: '#9c9382',
  linkBubble: { backgroundColor: '#f3f1ea', textColor: '#1d1205', iconColor: '#1d1205', borderColor: 'rgba(29,18,5,0.18)' },
  leftChat: { backgroundColor: '#ffffff', textColor: '#1d1205', borderColor: 'rgba(29,18,5,0.16)', showBorder: true, nameColor: '#5c5849' },
  rightChat: { backgroundColor: '#1d1205', textColor: '#FFFAEB', borderColor: 'transparent', showBorder: false, nameColor: '#5c5849' },
}

// Explicit positions ringing the full card — corners, edges, everything —
// so there's no dead space, while staying clear of the centered heading's
// bounding box (roughly left 25–75%, top 40–60%).
const LANGUAGE_WORDS = [
  { text: 'অসমীয়া', left: 8, top: 10, bold: false },
  { text: 'ગુજરાતী', left: 32, top: 6, bold: true },
  { text: 'ಕನ್ನಡ', left: 68, top: 6, bold: false },
  { text: 'हिन्दी', left: 92, top: 10, bold: true },
  { text: 'Español', left: 18, top: 22, bold: false },
  { text: 'Français', left: 82, top: 22, bold: true },
  { text: 'বাংলা', left: 6, top: 38, bold: true },
  { text: 'नेपाली', left: 94, top: 38, bold: false },
  { text: 'മലയാളം', left: 6, top: 62, bold: false },
  { text: 'मराठी', left: 94, top: 62, bold: true },
  { text: 'Deutsch', left: 18, top: 78, bold: false },
  { text: 'العربية', left: 82, top: 78, bold: true },
  { text: 'سنڌي', left: 8, top: 90, bold: false },
  { text: 'தமிழ்', left: 32, top: 94, bold: true },
  { text: 'తెలుగు', left: 68, top: 94, bold: false },
  { text: 'English', left: 92, top: 90, bold: true },
  { text: 'Português', left: 50, top: 96, bold: false },
]

function LanguageCloud() {
  const words = useMemo(
    () =>
      LANGUAGE_WORDS.map((word, i) => ({
        ...word,
        duration: 2.6 + ((i * 37) % 10) / 4,
        delay: ((i * 53) % 24) / 8,
      })),
    []
  )

  return (
    <div className="pf-lang-cloud">
      <span className="pf-lang-word pf-lang-word--center">Speak Every Customer&apos;s Language</span>
      {words.map((word) => (
        <motion.span
          key={word.text}
          className={`pf-lang-word${word.bold ? ' pf-lang-word--bold' : ''}`}
          style={{ left: `${word.left}%`, top: `${word.top}%`, x: '-50%', y: '-50%' }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: word.duration, delay: word.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          {word.text}
        </motion.span>
      ))}
    </div>
  )
}

const CHART_DATA = [
  { month: 'Jan', outbound: 420, inbound: 260 },
  { month: 'Feb', outbound: 480, inbound: 275 },
  { month: 'Mar', outbound: 510, inbound: 290 },
  { month: 'Apr', outbound: 560, inbound: 310 },
  { month: 'May', outbound: 610, inbound: 330 },
  { month: 'Jun', outbound: 690, inbound: 350 },
]

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="pf-tooltip">
      <div className="pf-tooltip__label">{label}</div>
      {payload.map((item) => (
        <div key={item.dataKey} className="pf-tooltip__row">
          <span className="pf-tooltip__dot" style={{ background: item.color }} />
          <span className="pf-tooltip__name">{item.dataKey}</span>
          <span className="pf-tooltip__value">{item.value}</span>
        </div>
      ))}
    </div>
  )
}

function CallVolumeChart() {
  return (
    <div className="pf-chart">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={CHART_DATA} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
          <defs>
            <linearGradient id="pfFillOutbound" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#444BFB" stopOpacity={0.35} />
              <stop offset="90%" stopColor="#444BFB" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="pfFillInbound" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.55} />
              <stop offset="90%" stopColor="#22c55e" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="rgba(29,18,5,0.08)" />
          <Tooltip content={<ChartTooltip />} />
          <Area type="stepBefore" dataKey="inbound" stroke="#22c55e" strokeWidth={2} fill="url(#pfFillInbound)" stackId="a" />
          <Area type="stepBefore" dataKey="outbound" stroke="#444BFB" strokeWidth={2} fill="url(#pfFillOutbound)" stackId="a" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default function PlatformFeatures() {
  return (
    <section className="pf-section">
      <div className="pf-grid">
        {/* Location tracking */}
        <div className="pf-cell pf-cell--map">
          <div className="pf-cell__head">
            <span className="pf-eyebrow">
              <LanguagesIcon size={16} />
              Global Coverage
            </span>
            <p className="pf-cell__title">Multilingual by Design</p>
            <p className="pf-cell__body">Support customers around the world with Voice AI agents fluent in 20+ languages, helping you scale without language barriers.</p>
          </div>

          <div className="pf-map-wrap">
            <div className="pf-map-fade" />
            <LanguageCloud />
          </div>
        </div>

        {/* Conversation transcripts */}
        <div className="pf-cell pf-cell--chat">
          <div className="pf-cell__head">
            <span className="pf-eyebrow">
              <MessageCircle size={16} />
              Live conversation transcripts
            </span>
            <p className="pf-cell__title">Every call is transcribed and searchable the moment it ends.</p>
          </div>

          <div className="pf-chat-mount">
            <ChatInterface config={CHAT_CONFIG} uiConfig={CHAT_UI_CONFIG} />
          </div>
        </div>

        {/* Stat banner */}
        <div className="pf-cell pf-cell--stat">
          <p className="pf-stat">&lt;400<span className="pf-stat__unit">ms</span> Latency</p>
          <p className="pf-stat-sub">
            Alterity's orchestration engine delivers sub-400ms responses, enabling fast, natural conversations at scale.
          </p>
        </div>

        {/* Activity / call volume */}
        <div className="pf-cell pf-cell--activity">
          <div className="pf-cell__head pf-cell__head--activity">
            <span className="pf-eyebrow">
              <Activity size={16} />
              Call volume, monitored live
            </span>
            <p className="pf-cell__title">
              Every call is tracked and categorized. <span className="pf-cell__title-muted">Get a clear breakdown of inbound and outbound volume, with analytics built in.</span>
            </p>
          </div>
          <CallVolumeChart />
        </div>
      </div>
    </section>
  )
}
