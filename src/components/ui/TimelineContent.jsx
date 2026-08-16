import { motion } from 'motion/react'

const DEFAULT_VARIANTS = {
  hidden: { opacity: 0, y: -20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export default function TimelineContent({
  as: as_ = 'div',
  animationNum = 0,
  timelineRef, // eslint-disable-line no-unused-vars
  customVariants,
  className = '',
  children,
  ...props
}) {
  const MotionTag = motion[as_] || motion.div

  return (
    <MotionTag
      custom={animationNum}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={customVariants || DEFAULT_VARIANTS}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
