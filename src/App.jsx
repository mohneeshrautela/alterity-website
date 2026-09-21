import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ProductPage from './pages/ProductPage'
import PricingPage from './components/PricingPage/PricingPage'
import TermsPage from './components/TermsPage/TermsPage'
import PrivacyPage from './components/PrivacyPage/PrivacyPage'
import CalculatorPage from './components/CalculatorPage/CalculatorPage'
import WhyUsPage from './components/WhyUsPage/WhyUsPage'
import ContactModal from './components/ContactModal/ContactModal'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Routes>
        <Route element={<SiteLayout onOpenContact={() => setShowModal(true)} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactPage onOpenContact={() => setShowModal(true)} />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  )
}

export default App
