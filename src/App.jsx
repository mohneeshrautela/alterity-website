import { lazy, Suspense, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import {
  HomePage,
  ProductPage,
  PricingPage,
  WhyUsPage,
  PrivacyPage,
  TermsPage,
  ContactPage,
  CalculatorPage,
  PricingComparisonPage,
  IVRPage,
  LanguagesPage,
  UseCasesIndex,
  IndustryPage,
} from './routeComponents'

const ContactModal = lazy(() => import('./components/ContactModal/ContactModal'))

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
          <Route path="/pricing-comparison" element={<PricingComparisonPage />} />
          <Route path="/ivr" element={<IVRPage />} />
          <Route path="/languages" element={<LanguagesPage />} />
          <Route path="/use-cases" element={<UseCasesIndex />} />
          <Route path="/use-cases/:slug" element={<IndustryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      {showModal && (
        <Suspense fallback={null}>
          <ContactModal onClose={() => setShowModal(false)} />
        </Suspense>
      )}
    </>
  )
}

export default App
