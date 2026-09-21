import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import CallDemoCarousel from '../components/CallDemoCarousel/CallDemoCarousel'
import TestimonialTicker from '../components/TestimonialTicker/TestimonialTicker'
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
      <CallDemoCarousel />
      <TestimonialTicker />
      <ConversationsHeading />
      <PlatformFeatures />
      <IntegrationsSection />
      <DeploymentTimeline />
      <CTASection />
      <FAQSection />
    </>
  )
}
