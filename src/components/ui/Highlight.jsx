import { motion } from 'framer-motion'

export default function Highlight({ children }) {
  return (
    <motion.span
      initial={{ backgroundSize: '0% 100%' }}
      animate={{ backgroundSize: '100% 100%' }}
      transition={{ duration: 1.8, ease: 'linear', delay: 0.4 }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        backgroundImage: 'linear-gradient(to right, rgba(240,247,107,0.9), rgba(240,247,107,0.6))',
        display: 'inline',
        borderRadius: '6px',
        paddingBottom: '2px',
        paddingLeft: '4px',
        paddingRight: '4px',
      }}
    >
      {children}
    </motion.span>
  )
}
