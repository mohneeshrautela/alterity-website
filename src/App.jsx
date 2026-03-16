import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AnimatedBackground from './components/FloatingPaths/FloatingPaths'
import Tiles from './components/Tiles/Tiles'
import SDKSection from './components/SDKSection/SDKSection'
import WhyOpenHands from './components/WhyOpenHands/WhyOpenHands'
import AutomateSection from './components/AutomateSection/AutomateSection'
import CommunitySection from './components/CommunitySection/CommunitySection'
import CTASection from './components/CTASection/CTASection'
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

  const goHome = () => { setPage('home'); window.scrollTo(0, 0) }
  const goPricing = () => { setPage('pricing'); window.scrollTo(0, 0) }
  const goTerms = () => { setPage('terms'); window.scrollTo(0, 0) }
  const goPrivacy = () => { setPage('privacy'); window.scrollTo(0, 0) }
  const goCalculator = () => { setPage('calculator'); window.scrollTo(0, 0) }
  const goWhyUs = () => { setPage('why-us'); window.scrollTo(0, 0) }
  const goToSection = (id) => {
    setPage('home')
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  useEffect(() => {
    const openModal = () => setShowModal(true)
    const goToCalls = () => goToSection('calls')
    const goToCalc  = () => goCalculator()
    window.addEventListener('open-contact-modal', openModal)
    window.addEventListener('navigate-to-calls', goToCalls)
    window.addEventListener('navigate-to-calculator', goToCalc)
    return () => {
      window.removeEventListener('open-contact-modal', openModal)
      window.removeEventListener('navigate-to-calls', goToCalls)
      window.removeEventListener('navigate-to-calculator', goToCalc)
    }
  }, [])

  return (
    <>
      <Tiles />
      <AnimatedBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar onPricingClick={goPricing} onLogoClick={goHome} onCallsClick={() => goToSection('calls')} onUseCasesClick={() => goToSection('use-cases')} onWhyUsClick={goWhyUs} />
        {page === 'why-us' ? (
          <WhyUsPage />
        ) : page === 'pricing' ? (
          <PricingPage />
        ) : page === 'terms' ? (
          <TermsPage />
        ) : page === 'privacy' ? (
          <PrivacyPage />
        ) : page === 'calculator' ? (
          <CalculatorPage />
        ) : (
          <>
            <Hero />
            <SDKSection />
            <WhyOpenHands />
            <AutomateSection />
            <CommunitySection />
            <CTASection />
            <Footer onTermsClick={goTerms} onPrivacyClick={goPrivacy} onPricingClick={goPricing} onWhyUsClick={goWhyUs} onLogoClick={goHome} />
          </>
        )}
      </div>
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  )
}

export default App
