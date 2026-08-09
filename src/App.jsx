import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import CallDemoCarousel from './components/CallDemoCarousel/CallDemoCarousel'
import TestimonialTicker from './components/TestimonialTicker/TestimonialTicker'
import ConversationsHeading from './components/ConversationsHeading/ConversationsHeading'
import PlatformFeatures from './components/PlatformFeatures/PlatformFeatures'
import WhyOpenHands from './components/WhyOpenHands/WhyOpenHands'
import IntegrationsSection from './components/IntegrationsSection/IntegrationsSection'
import DeploymentTimeline from './components/DeploymentTimeline/DeploymentTimeline'
import CTASection from './components/CTASection/CTASection'
import FAQSection from './components/FAQSection/FAQSection'
import Footer from './components/Footer/Footer'
import PricingPage from './components/PricingPage/PricingPage'
import TermsPage from './components/TermsPage/TermsPage'
import PrivacyPage from './components/PrivacyPage/PrivacyPage'
import CalculatorPage from './components/CalculatorPage/CalculatorPage'
import WhyUsPage from './components/WhyUsPage/WhyUsPage'
import ContactModal from './components/ContactModal/ContactModal'

function App() {
  const [page, setPage] = useState('home')
  const [showModal, setShowModal] = useState(false)

  const navigateTo = (target) => {
    setPage(target)
    window.history.pushState({ page: target }, '')
    window.scrollTo(0, 0)
  }

  const goHome      = () => navigateTo('home')
  const goPricing   = () => navigateTo('pricing')
  const goTerms     = () => navigateTo('terms')
  const goPrivacy   = () => navigateTo('privacy')
  const goCalculator= () => navigateTo('calculator')
  const goWhyUs     = () => navigateTo('why-us')

  const goToSection = (id) => {
    navigateTo('home')
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  useEffect(() => {
    window.history.replaceState({ page: 'home' }, '')

    const onPopState = (e) => {
      setPage(e.state?.page || 'home')
      window.scrollTo(0, 0)
    }
    const openModal = () => setShowModal(true)
    const goToCalls = () => goToSection('calls')
    const goToCalc  = () => goCalculator()
    window.addEventListener('popstate',               onPopState)
    window.addEventListener('open-contact-modal',     openModal)
    window.addEventListener('navigate-to-privacy',    goPrivacy)
    window.addEventListener('navigate-to-calls',      goToCalls)
    window.addEventListener('navigate-to-calculator', goToCalc)
    return () => {
      window.removeEventListener('popstate',               onPopState)
      window.removeEventListener('open-contact-modal',     openModal)
      window.removeEventListener('navigate-to-privacy',    goPrivacy)
      window.removeEventListener('navigate-to-calls',      goToCalls)
      window.removeEventListener('navigate-to-calculator', goToCalc)
    }
  }, [])

  return (
    <>
      <div>
        <Navbar
          onPricingClick={goPricing}
          onLogoClick={goHome}
          onCallsClick={() => goToSection('calls')}
          onUseCasesClick={() => goToSection('calls')}
          onWhyUsClick={goWhyUs}
        />

        {page === 'why-us' ? (
          <WhyUsPage />
        ) : page === 'pricing' ? (
          <PricingPage onPrivacyClick={goPrivacy} />
        ) : page === 'terms' ? (
          <TermsPage />
        ) : page === 'privacy' ? (
          <PrivacyPage />
        ) : page === 'calculator' ? (
          <CalculatorPage />
        ) : (
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
        )}

        <Footer
          onTermsClick={goTerms}
          onPrivacyClick={goPrivacy}
          onPricingClick={goPricing}
          onWhyUsClick={goWhyUs}
          onUseCasesClick={() => goToSection('calls')}
          onLogoClick={goHome}
        />
      </div>
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  )
}

export default App
