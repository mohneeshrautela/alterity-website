import './FloatingPaths.css'

function FloatingPaths({ position }) {
  const paths = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.04,
    duration: 20 + i * 1.5,
  }))

  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      viewBox="-100 0 700 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {paths.map((path, i) => (
        <path
          key={path.id}
          d={path.d}
          stroke="rgba(29,18,5,0.13)"
          strokeWidth={path.width}
          fill="none"
          strokeDasharray="600 2400"
          style={{
            animation: `flowPath ${path.duration}s linear infinite`,
            animationDelay: `-${(i / 20) * path.duration}s`,
          }}
        />
      ))}
    </svg>
  )
}

export default function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  )
}
