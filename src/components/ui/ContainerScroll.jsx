import { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import './ContainerScroll.css'

export function ContainerScroll({ titleComponent, children }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const rotate = useTransform(scrollYProgress, [0, 1], [18, 0])
  const scale  = useTransform(scrollYProgress, [0, 1], isMobile ? [0.75, 0.95] : [1.04, 1])
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <div className="cs-container" ref={containerRef}>
      <div className="cs-inner">
        {/* Title above the card */}
        <motion.div className="cs-title" style={{ translateY }}>
          {titleComponent}
        </motion.div>

        {/* Tilt card */}
        <motion.div
          className="cs-card"
          style={{ rotateX: rotate, scale }}
        >
          <div className="cs-card__inner">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
