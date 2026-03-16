import { ArrowRight } from 'lucide-react'
import './FlowButton.css'

const MODAL_TRIGGERS = ['Start a Pilot', 'Talk to Sales', 'Contact us']
const CALLS_TRIGGERS = ['Hear a Real Call']
const CALC_TRIGGERS  = ['Calculator']

export default function FlowButton({ text, variant = 'dark', className = '', onClick, children }) {
  const label = text || children

  const handleClick = (e) => {
    if (onClick) onClick(e)
    if (MODAL_TRIGGERS.includes(label)) {
      window.dispatchEvent(new CustomEvent('open-contact-modal'))
    } else if (CALLS_TRIGGERS.includes(label)) {
      window.dispatchEvent(new CustomEvent('navigate-to-calls'))
    } else if (CALC_TRIGGERS.includes(label)) {
      window.dispatchEvent(new CustomEvent('navigate-to-calculator'))
    }
  }

  return (
    <button
      className={`flow-btn flow-btn--${variant} ${className}`}
      onClick={handleClick}
    >
      <ArrowRight className="flow-btn__arrow-left" size={15} strokeWidth={2.2} />
      <span className="flow-btn__text">{text || children}</span>
      <span className="flow-btn__circle" />
      <ArrowRight className="flow-btn__arrow-right" size={15} strokeWidth={2.2} />
    </button>
  )
}
