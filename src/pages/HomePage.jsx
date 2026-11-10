import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import { useState } from 'react'
import { Pause, Play } from 'lucide-react'
import CallDemoCarousel from '../components/CallDemoCarousel/CallDemoCarousel'
import ConversationsHeading from '../components/ConversationsHeading/ConversationsHeading'
import PlatformFeatures from '../components/PlatformFeatures/PlatformFeatures'
import IntegrationsSection from '../components/IntegrationsSection/IntegrationsSection'
import DeploymentTimeline from '../components/DeploymentTimeline/DeploymentTimeline'
import CTASection from '../components/CTASection/CTASection'
import FAQSection from '../components/FAQSection/FAQSection'

export default function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }))
  }, [hash])

  return (
    <>
      <Hero />
      <SupportedBy />
      <CallDemoCarousel />
      <ConversationsHeading />
      <PlatformFeatures />
      <IntegrationsSection />
      <DeploymentTimeline />
      <CTASection />
      <FAQSection />
    </>
  )
}

const supporters = [
  { name: 'Cartesia', file: 'cartesia', src: '/logos/cartesia.svg' },
  { name: 'AWS', file: 'aws', src: '/logos/aws.svg' },
  { name: 'Google Cloud', file: 'google', src: '/logos/google.svg' },
  { name: 'Claude', file: 'claude', src: '/logos/claude.svg' },
  { name: 'Deepgram', file: 'deepgram', src: '/logos/deepgram.svg' },
  { name: 'AssemblyAI', file: 'assemblyai', src: '/logos/assemblyai.svg' },
]

function SupportedBy() {
  const [paused, setPaused] = useState(false)
  return (
    <section className="supported-by" id="supported-by" aria-labelledby="supported-by-heading">
      <div className="supported-by__header">
        <h2 id="supported-by-heading">Supported by</h2>
        <button className="supported-by__toggle" aria-label={paused ? 'Play partner logos' : 'Pause partner logos'} aria-pressed={paused} onClick={() => setPaused(!paused)}>
          {paused ? <Play size={14} /> : <Pause size={14} />}
        </button>
      </div>
      <div className={`supported-by__lane${paused ? ' supported-by__lane--paused' : ''}`}>
        <div className="supported-by__track">
          {[0, 1, 2, 3].map((copy) => (
            <ul className="supported-by__group" key={copy} aria-hidden={copy > 0 ? true : undefined}>
              {supporters.map(({ name, file, src }) => (
                <li className={`supported-by__logo supported-by__logo--${file}`} key={file}>
                  <img src={src} alt={copy === 0 ? name : ''} width="180" height="48" loading="lazy" decoding="async" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
