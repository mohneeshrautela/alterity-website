import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import './Accordion.css'

export const Accordion = AccordionPrimitive.Root

export function AccordionItem({ className = '', ...props }) {
  return (
    <AccordionPrimitive.Item
      className={`accordion-item ${className}`}
      {...props}
    />
  )
}

export function AccordionTrigger({ className = '', children, ...props }) {
  return (
    <AccordionPrimitive.Header className="accordion-header">
      <AccordionPrimitive.Trigger
        className={`accordion-trigger ${className}`}
        {...props}
      >
        {children}
        <ChevronDown className="accordion-chevron" size={18} strokeWidth={2} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({ className = '', children, ...props }) {
  return (
    <AccordionPrimitive.Content
      className="accordion-content"
      {...props}
    >
      <div className={`accordion-content__inner ${className}`}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}
