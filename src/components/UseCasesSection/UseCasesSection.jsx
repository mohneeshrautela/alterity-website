import { useCallback, useEffect, useState, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Banknote, Package, CalendarCheck, Users, PhoneCall, Check } from 'lucide-react'
import './UseCasesSection.css'

const USE_CASES = [
  {
    Icon: Banknote,
    iconBg: '#5B9CF6',
    title: 'Collection',
    description: 'Identify overdue accounts and screen payment capabilities. Automate follow-ups for better recovery rates.',
    features: ['Handles payment objections automatically', 'Escalates to human agent on demand', 'Works across all DPD buckets'],
    tags: ['BFSI', 'NBFCs', 'Lending'],
  },
  {
    Icon: Package,
    iconBg: '#F59E0B',
    title: 'Last Mile Delivery',
    description: 'Identify delivery windows and screen recipient availability. Automate delivery coordination for better success rates.',
    features: ['Confirms delivery slots in real time', 'Sends instant re-attempt scheduling', 'Reduces failed delivery costs at scale'],
    tags: ['Logistics', 'Quick Commerce', 'D2C'],
  },
  {
    Icon: CalendarCheck,
    iconBg: '#38BDF8',
    title: 'Appointment Booking',
    description: 'Identify patient needs and screen appointment preferences. Automate scheduling for better booking conversions.',
    features: ['Books and reschedules without human input', 'Sends automated reminders to reduce no-shows', 'Collects pre-visit information from patients'],
    tags: ['Healthcare', 'Diagnostics', 'Clinics'],
  },
  {
    Icon: PhoneCall,
    iconBg: '#34D399',
    title: 'Lead Qualification',
    description: 'Engage inbound leads instantly and qualify by intent. Automate outreach for higher conversion rates.',
    features: ['Responds to leads within seconds of sign-up', 'Scores and routes based on intent signals', 'Runs follow-up sequences without manual effort'],
    tags: ['Real Estate', 'EdTech', 'Insurance'],
  },
  {
    Icon: Users,
    iconBg: '#A78BFA',
    title: 'Candidate Screening',
    description: 'Screen candidates efficiently and identify top talent faster. Automate first-round interviews for better hiring outcomes.',
    features: ['Runs structured screening calls at scale', 'Summarises responses for recruiter review', 'Coordinates interview scheduling automatically'],
    tags: ['Staffing', 'HR Tech', 'Recruitment'],
  },
]

export default function UseCasesSection() {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }))

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [autoplay.current]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="uc-section" id="use-cases">
      <div className="uc-header">
        <p className="uc-eyebrow">USE CASES</p>
        <h2 className="uc-heading">Industries We Supercharge</h2>
        <p className="uc-subheading">Voice AI built for the workflows that matter most in your industry.</p>
      </div>

      <div className="uc-carousel-outer">
        <div className="uc-carousel-viewport" ref={emblaRef}>
          <div className="uc-track">
            {USE_CASES.map(({ Icon, iconBg, title, description, features, tags }, i) => {
              const isActive = i === selectedIndex
              return (
                <div
                  key={i}
                  className={`uc-slide${isActive ? ' uc-slide--active' : ''}`}
                  onClick={() => {
                    emblaApi?.scrollTo(i)
                    autoplay.current.reset()
                  }}
                >
                  <div className="uc-slide__inner">
                    <div className="uc-icon" style={{ background: iconBg }}>
                      <Icon size={26} color="#fff" strokeWidth={1.8} />
                    </div>

                    <h3 className="uc-title">{title}</h3>
                    <p className="uc-desc">{description}</p>

                    <ul className="uc-features">
                      {features.map((f, fi) => (
                        <li key={fi} className="uc-feature">
                          <Check size={14} strokeWidth={2.5} className="uc-feature__icon" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="uc-divider" />

                    <div className="uc-tags">
                      {tags.map((t, ti) => (
                        <span key={ti} className="uc-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="uc-dots">
        {USE_CASES.map((_, i) => (
          <button
            key={i}
            className={`uc-dot${i === selectedIndex ? ' uc-dot--active' : ''}`}
            onClick={() => {
              emblaApi?.scrollTo(i)
              autoplay.current.reset()
            }}
          />
        ))}
      </div>
    </section>
  )
}
