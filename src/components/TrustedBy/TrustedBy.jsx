import './TrustedBy.css'

const LOGOS_ROW1 = [
  { name: 'TikTok', symbol: '♪' },
  { name: 'VMware', symbol: '⬡' },
  { name: 'Roche', symbol: '◆' },
  { name: 'Amazon', symbol: '≋' },
  { name: 'Cloudera', symbol: '☁' },
  { name: 'Fujitsu', symbol: '⬢' },
  { name: 'C3.ai', symbol: '∑' },
  { name: 'Netflix', symbol: '▶' },
  { name: 'Mastercard', symbol: '◎' },
]

const LOGOS_ROW2 = [
  { name: 'Red Hat', symbol: '🎩' },
  { name: 'MongoDB', symbol: '◉' },
  { name: 'Apple', symbol: '⌘' },
  { name: 'NVIDIA', symbol: '▣' },
  { name: 'Google', symbol: 'G' },
  { name: 'AMD', symbol: '▲' },
]

function LogoItem({ logo }) {
  return (
    <div className="trusted-logo">
      <span className="trusted-logo__symbol">{logo.symbol}</span>
      <span className="trusted-logo__name">{logo.name}</span>
    </div>
  )
}

export default function TrustedBy() {
  return (
    <section className="trusted-by">
      <div className="trusted-by__inner">
        <p className="trusted-by__heading">Trusted by engineers at</p>
        <div className="trusted-by__row">
          {LOGOS_ROW1.map((logo) => (
            <LogoItem key={logo.name} logo={logo} />
          ))}
        </div>
        <div className="trusted-by__row trusted-by__row--centered">
          {LOGOS_ROW2.map((logo) => (
            <LogoItem key={logo.name} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
