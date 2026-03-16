import { motion } from 'framer-motion'

const BASE_TRANSITION = {
  repeat: Infinity,
  duration: 4,
  ease: 'linear',
}

export default function BorderTrail({
  className = '',
  size = 80,
  transition,
  delay,
  onAnimationComplete,
  style = {},
}) {
  return (
    <div
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        inset: 0,
        borderRadius: 'inherit',
        border: '1px solid transparent',
        maskClip: 'padding-box, border-box',
        maskComposite: 'intersect',
        maskImage:
          'linear-gradient(transparent, transparent), linear-gradient(#000, #000)',
        WebkitMaskClip: 'padding-box, border-box',
        WebkitMaskComposite: 'destination-in',
        WebkitMaskImage:
          'linear-gradient(transparent, transparent), linear-gradient(#000, #000)',
      }}
    >
      <motion.div
        className={className}
        style={{
          position: 'absolute',
          aspectRatio: '1',
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          background: '#e8f55a',
          ...style,
        }}
        animate={{ offsetDistance: ['0%', '100%'] }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay,
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  )
}
