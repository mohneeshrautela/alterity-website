import { motion } from 'framer-motion'

export function GradientBackground({ children, style }) {
  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', ...style }}>
      {/* Base layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#e8e4fa',
        }}
      />

      {/* Moving blob layer */}
      <div style={{ position: 'absolute', inset: 0, filter: 'blur(70px)' }}>
        {/* Purple/lavender blob — top-left */}
        <motion.div
          style={{
            position: 'absolute',
            width: '65%',
            height: '65%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(180,150,255,0.85) 0%, transparent 70%)',
            top: '-15%',
            left: '-10%',
          }}
          animate={{ top: ['-15%', '25%', '-15%'], left: ['-10%', '15%', '-10%'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Sky-blue blob — right side */}
        <motion.div
          style={{
            position: 'absolute',
            width: '60%',
            height: '60%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(120,190,255,0.75) 0%, transparent 70%)',
            top: '10%',
            right: '-15%',
          }}
          animate={{ top: ['10%', '45%', '10%'], right: ['-15%', '5%', '-15%'] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Cyan/teal blob — bottom-center */}
        <motion.div
          style={{
            position: 'absolute',
            width: '55%',
            height: '55%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(150,220,255,0.65) 0%, transparent 70%)',
            bottom: '-20%',
            left: '25%',
          }}
          animate={{ bottom: ['-20%', '10%', '-20%'], left: ['25%', '40%', '25%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />

        {/* Soft periwinkle blob — center */}
        <motion.div
          style={{
            position: 'absolute',
            width: '45%',
            height: '45%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(160,155,255,0.55) 0%, transparent 70%)',
            top: '30%',
            left: '30%',
          }}
          animate={{ top: ['30%', '5%', '30%'], left: ['30%', '55%', '30%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Content */}
      {children && (
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      )}
    </div>
  )
}
