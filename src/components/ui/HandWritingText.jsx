import { motion } from 'framer-motion'

export default function HandWritingText({ children, color = '#8b6f00' }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block', padding: '0 6px' }}>
      {children}
      <motion.svg
        viewBox="0 0 320 80"
        initial="hidden"
        animate="visible"
        style={{
          position: 'absolute',
          top: '-12px',
          left: '-14px',
          width: 'calc(100% + 28px)',
          height: 'calc(100% + 24px)',
          overflow: 'visible',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        {/* Main circle loop — slightly irregular, hand-drawn oval */}
        <motion.path
          d="M 292 38
             C 296 12, 238 -4, 160 -6
             C 82 -8, 10 12, 6 38
             C 2 64, 72 78, 160 76
             C 248 74, 300 56, 294 34"
          fill="none"
          strokeWidth="4.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                pathLength: { duration: 2.4, ease: [0.43, 0.13, 0.23, 0.96] },
                opacity: { duration: 0.2 },
              },
            },
          }}
        />
        {/* Second pass — slightly offset for natural double-stroke feel */}
        <motion.path
          d="M 288 42
             C 294 18, 235 2, 160 0
             C 85 -2, 14 16, 10 40
             C 6 64, 76 80, 160 78
             C 244 76, 296 60, 290 38"
          fill="none"
          strokeWidth="2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 0.35,
              transition: {
                pathLength: { duration: 2.4, delay: 0.1, ease: [0.43, 0.13, 0.23, 0.96] },
                opacity: { duration: 0.2, delay: 0.1 },
              },
            },
          }}
        />
      </motion.svg>
    </span>
  )
}
