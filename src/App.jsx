import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import CallDemo from './components/CallDemo/CallDemo'
import Capabilities from './components/Capabilities/Capabilities'
import UseCases from './components/UseCases/UseCases'
import IndiaBand from './components/IndiaBand/IndiaBand'
import Languages from './components/Languages/Languages'
import HowItWorks from './components/HowItWorks/HowItWorks'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import PricingPage from './components/PricingPage/PricingPage'
import TermsPage from './components/TermsPage/TermsPage'
import PrivacyPage from './components/PrivacyPage/PrivacyPage'
import ContactModal from './components/ContactModal/ContactModal'
import Tweaks from './components/Tweaks/Tweaks'

function App() {
  const [page, setPage] = useState('home')
  const [showModal, setShowModal] = useState(false)

  const goHome    = () => { setPage('home');    window.scrollTo(0, 0) }
  const goPricing = () => { setPage('pricing'); window.scrollTo(0, 0) }
  const goTerms   = () => { setPage('terms');   window.scrollTo(0, 0) }
  const goPrivacy = () => { setPage('privacy'); window.scrollTo(0, 0) }

  const goToSection = (id) => {
    setPage('home')
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  useEffect(() => {
    const openModal = () => setShowModal(true)
    const goToCalls = () => goToSection('product')
    window.addEventListener('open-contact-modal', openModal)
    window.addEventListener('navigate-to-privacy', goPrivacy)
    window.addEventListener('navigate-to-calls', goToCalls)
    return () => {
      window.removeEventListener('open-contact-modal', openModal)
      window.removeEventListener('navigate-to-privacy', goPrivacy)
      window.removeEventListener('navigate-to-calls', goToCalls)
    }
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('.alt-reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-in') })
    }, { threshold: 0.12 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [page])

  return (
    <>
      <div>
        <Navbar
          onPricingClick={goPricing}
          onLogoClick={goHome}
          onSectionClick={goToSection}
        />

        {page === 'pricing' ? (
          <PricingPage onPrivacyClick={goPrivacy} />
        ) : page === 'terms' ? (
          <TermsPage />
        ) : page === 'privacy' ? (
          <PrivacyPage />
        ) : (
          <>
            <Hero onContact={() => setShowModal(true)} onSectionClick={goToSection} />
            <CallDemo />
            <Capabilities />
            <UseCases />
            <IndiaBand />
            <Languages />
            <HowItWorks />
            <CTA onContact={() => setShowModal(true)} />
          </>
        )}

        <Footer
          onTermsClick={goTerms}
          onPrivacyClick={goPrivacy}
          onPricingClick={goPricing}
          onSectionClick={goToSection}
          onLogoClick={goHome}
        />
      </div>
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
      <Tweaks />
    </>
  )
}

export default App
