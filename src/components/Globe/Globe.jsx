import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.6,
  mapSamples: 16000,
  mapBrightness: 1.4,
  baseColor: [0.96, 0.94, 0.89],       // --cream
  markerColor: [240 / 255, 247 / 255, 107 / 255], // --yellow
  glowColor: [0.91, 0.96, 0.35],        // yellow glow
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
    { location: [51.5074, -0.1278], size: 0.08 },
    { location: [48.8566, 2.3522], size: 0.07 },
    { location: [-33.8688, 151.2093], size: 0.06 },
  ],
}

export default function Globe({ className, style, config = GLOBE_CONFIG, rotationSpeed = 0.004 }) {
  const phiRef = useRef(0)
  const widthRef = useRef(0)
  const rotationSpeedRef = useRef(rotationSpeed)
  const canvasRef = useRef(null)

  rotationSpeedRef.current = rotationSpeed

  const onResize = () => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender(state) {
        phiRef.current += rotationSpeedRef.current
        state.phi = phiRef.current
        state.width = widthRef.current * 2
        state.height = widthRef.current * 2
      },
    })

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = '1'
    })
    return () => globe.destroy()
  }, [])

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        margin: 'auto',
        aspectRatio: '1 / 1',
        width: '100%',
        maxWidth: '600px',
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          opacity: 0,
          transition: 'opacity 0.5s',
          contain: 'layout paint size',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
