import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowLeft, ArrowRight, Headphones, CalendarDays, Target, CreditCard, Activity, Wifi, Package } from 'lucide-react'
import './UseCasesCarousel.css'

const USE_CASES = [
  {
    id: 'support',
    icon: <Headphones size={28} strokeWidth={1.8} />,
    color: '#e8651a',
    title: 'Customer Support & Service',
    description: 'AI agents handle common questions, troubleshoot issues, and route calls to human agents — reducing call center load without sacrificing experience.',
  },
  {
    id: 'appointments',
    icon: <CalendarDays size={28} strokeWidth={1.8} />,
    color: '#0ea5a3',
    title: 'Appointment Management',
    description: 'Automate scheduling, rescheduling, and cancellations for clinics, service businesses, and real estate — reducing no-shows across the board.',
  },
  {
    id: 'leads',
    icon: <Target size={28} strokeWidth={1.8} />,
    color: '#7c3aed',
    title: 'Lead Qualification & Sales',
    description: 'Instantly call back warm leads from web forms, qualify them with precision, and book appointments directly into your calendar.',
  },
  {
    id: 'debt',
    icon: <CreditCard size={28} strokeWidth={1.8} />,
    color: '#2563eb',
    title: 'Debt Collection & Payments',
    description: 'Deliver payment reminders, negotiate payment plans, and process transactions securely — at scale, around the clock.',
  },
  {
    id: 'healthcare',
    icon: <Activity size={28} strokeWidth={1.8} />,
    color: '#e03e3e',
    title: 'Healthcare Intake',
    description: 'Collect patient symptoms, demographic details, and insurance data before connecting with clinical staff — streamlining intake from day one.',
  },
  {
    id: 'telecom',
    icon: <Wifi size={28} strokeWidth={1.8} />,
    color: '#16a34a',
    title: 'Telecommunications & IT',
    description: 'Provide troubleshooting for technical issues, manage account updates, and handle billing inquiries without wait times.',
  },
  {
    id: 'orders',
    icon: <Package size={28} strokeWidth={1.8} />,
    color: '#d4760b',
    title: 'Order Management',
    description: 'Handle e-commerce inquiries about order status, shipping updates, and returns — keeping customers informed at every step.',
  },
]

const autoplayPlugin = Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: true })

export default function UseCasesCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [autoplayPlugin]
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const update = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    update()
    emblaApi.on('select', update)
    emblaApi.on('reInit', update)
    return () => {
      emblaApi.off('select', update)
      emblaApi.off('reInit', update)
    }
  }, [emblaApi])

  return (
    <div className="uc-wrap">
      {/* Header */}
      <div className="uc-hero">
        <h2 className="uc-hero__title">Use Cases</h2>
        <p className="uc-hero__sub">
          From loan recovery to healthcare intake — Alterity voice agents handle mission-critical conversations across every vertical, 24 / 7.
        </p>
        <div className="uc-header__nav">
          <button className="uc-nav-btn" onClick={scrollPrev} aria-label="Previous">
            <ArrowLeft size={18} strokeWidth={2} />
          </button>
          <button className="uc-nav-btn" onClick={scrollNext} aria-label="Next">
            <ArrowRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="uc-embla" ref={emblaRef}>
        <div className="uc-embla__container">
          {USE_CASES.map((item, index) => (
            <div className="uc-embla__slide" key={item.id}>
              <div className={`uc-card ${index === selectedIndex ? 'uc-card--active' : ''}`}>
                <div className="uc-card__icon" style={{ background: item.color }}>
                  {item.icon}
                </div>
                <h3 className="uc-card__title">{item.title}</h3>
                <p className="uc-card__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
