import { useCallback, useMemo, useRef, memo } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'
import { useDimensions } from '../../hooks/useDimensions'

function PixelDot({ id, size, fadeDuration, delay, style }) {
  const controls = useAnimationControls()

  const animatePixel = useCallback(() => {
    controls.start({
      opacity: [1, 0],
      transition: { duration: fadeDuration / 1000, delay: delay / 1000 },
    })
  }, [controls, fadeDuration, delay])

  const ref = useCallback(
    (node) => {
      if (node) node.__animatePixel = animatePixel
    },
    [animatePixel]
  )

  return (
    <motion.div
      id={id}
      ref={ref}
      style={{ width: size, height: size, ...style }}
      initial={{ opacity: 0 }}
      animate={controls}
    />
  )
}

const MemoPixelDot = memo(PixelDot)
MemoPixelDot.displayName = 'PixelDot'

export default function PixelTrail({
  pixelSize = 40,
  fadeDuration = 600,
  delay = 0,
  pixelStyle = {},
  className = '',
}) {
  const containerRef = useRef(null)
  const dimensions = useDimensions(containerRef)
  const trailId = useRef(uuidv4())

  const columns = useMemo(
    () => Math.ceil((dimensions.width || 0) / pixelSize),
    [dimensions.width, pixelSize]
  )
  const rows = useMemo(
    () => Math.ceil((dimensions.height || 0) / pixelSize),
    [dimensions.height, pixelSize]
  )

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.floor((e.clientX - rect.left) / pixelSize)
      const y = Math.floor((e.clientY - rect.top) / pixelSize)
      const el = document.getElementById(`${trailId.current}-pixel-${x}-${y}`)
      if (el?.__animatePixel) el.__animatePixel()
    },
    [pixelSize]
  )

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseMove={handleMouseMove}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'auto' }}
    >
      {Array.from({ length: rows }, (_, row) => (
        <div key={row} style={{ display: 'flex' }}>
          {Array.from({ length: columns }, (_, col) => (
            <MemoPixelDot
              key={`${col}-${row}`}
              id={`${trailId.current}-pixel-${col}-${row}`}
              size={pixelSize}
              fadeDuration={fadeDuration}
              delay={delay}
              style={pixelStyle}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
