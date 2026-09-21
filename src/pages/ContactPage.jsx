import { Mail, MapPin } from 'lucide-react'
import FlowButton from '../components/FlowButton/FlowButton'
import './ContactPage.css'

export default function ContactPage({ onOpenContact }) {
  return (
    <div className="contact-page">
      <div className="contact-page__inner">
        <span className="terms-page__eyebrow">Contact</span>
        <h1 className="terms-page__title">Talk to Alterity</h1>
        <p className="terms-page__intro">Contact information stays available even if the enquiry form is unavailable.</p>
        <div className="contact-page__grid">
          <section className="contact-page__card"><Mail size={22} /><h2>Email</h2><a href="mailto:contact@alterity.io">contact@alterity.io</a></section>
          <section className="contact-page__card"><MapPin size={22} /><h2>Company</h2><p>Alterity Labs Pvt Ltd.</p><p><strong>Correspondence address</strong><br />C-703, Winsway Complex, Sampada Society, Andheri East, Mumbai, Maharashtra 400069</p></section>
        </div>
        <FlowButton text="Start a Pilot" onClick={onOpenContact} />
      </div>
    </div>
  )
}
