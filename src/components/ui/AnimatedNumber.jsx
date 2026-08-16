import { motion, useInView, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useEffect, useRef } from 'react'

export default function AnimatedNumber({ value, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 100, damping: 22, mass: 0.6 })
  const rounded = useTransform(spring, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, value, motionValue])

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  )
}
