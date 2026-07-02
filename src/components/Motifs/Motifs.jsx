/* ============================================================
   Motifs — Indian-inspired decorative primitives, generated
   from simple shapes (no hand-drawn illustration).
   ============================================================ */

/* Mandala / chakra watermark: concentric rings + radial spokes +
   a ring of lotus-petal diamonds. Purely decorative. */
export function Mandala({ size = 480, spokes = 24, className = '', style = {}, spin = false }) {
  const c = size / 2
  const petals = Math.round(spokes / 2)
  return (
    <svg
      className={`alt-mandala ${spin ? 'alt-spin' : ''} ${className}`}
      width={size} height={size} viewBox={`0 0 ${size} ${size}`}
      style={style} aria-hidden fill="none"
    >
      {[0.30, 0.52, 0.74, 0.94].map((r, i) => (
        <circle key={i} cx={c} cy={c} r={c * r} stroke="currentColor" strokeWidth="1" />
      ))}
      {Array.from({ length: spokes }).map((_, i) => {
        const a = (i / spokes) * Math.PI * 2
        const x1 = c + Math.cos(a) * c * 0.30
        const y1 = c + Math.sin(a) * c * 0.30
        const x2 = c + Math.cos(a) * c * 0.94
        const y2 = c + Math.sin(a) * c * 0.94
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.8" />
      })}
      {Array.from({ length: petals }).map((_, i) => {
        const a = (i / petals) * 360
        const r = c * 0.83
        return (
          <g key={i} transform={`rotate(${a} ${c} ${c})`}>
            <path
              d={`M ${c} ${c - r - 10} L ${c + 9} ${c - r} L ${c} ${c - r + 10} L ${c - 9} ${c - r} Z`}
              stroke="currentColor" strokeWidth="0.9"
            />
          </g>
        )
      })}
      <circle cx={c} cy={c} r={c * 0.10} stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

/* Temple-arch / lotus-bud band — a scalloped skyline of ogee
   arches (Mughal/temple silhouette), filled with a soft
   vertical gradient. */
export function ArchBand({ count = 5, width = 1440, height = 200, from = 'var(--w-peri)', flip = false, opacity = 0.5, className = '', style = {} }) {
  const unit = width / count
  const gid = 'ag-' + Math.random().toString(36).slice(2, 8)
  const arch = (cx) => {
    const w = unit * 0.62
    const l = cx - w, r = cx + w
    const spring = height
    const apex = height * 0.14
    const sh = height * 0.62
    return `M ${l} ${spring}
      C ${l} ${sh}, ${cx - w * 0.42} ${sh * 0.86}, ${cx - w * 0.30} ${height * 0.40}
      C ${cx - w * 0.14} ${height * 0.20}, ${cx - w * 0.04} ${apex + 6}, ${cx} ${apex}
      C ${cx + w * 0.04} ${apex + 6}, ${cx + w * 0.14} ${height * 0.20}, ${cx + w * 0.30} ${height * 0.40}
      C ${cx + w * 0.42} ${sh * 0.86}, ${r} ${sh}, ${r} ${spring} Z`
  }
  return (
    <svg
      className={`alt-arch-band ${className}`} viewBox={`0 0 ${width} ${height}`}
      width="100%" height={height} preserveAspectRatio="none"
      style={{ transform: flip ? 'scaleY(-1)' : 'none', ...style }} aria-hidden
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor={from} stopOpacity={opacity} />
          <stop offset="0.55" stopColor={from} stopOpacity={opacity * 0.32} />
          <stop offset="1" stopColor={from} stopOpacity="0" />
        </linearGradient>
      </defs>
      {Array.from({ length: count + 1 }).map((_, i) => (
        <path key={i} d={arch(i * unit)} fill={`url(#${gid})`} />
      ))}
    </svg>
  )
}

/* Lotus petal frame around an icon — a ring of rounded petals
   (rotated rounded-diamond) framing a glyph. */
export function PetalFrame({ size = 84, petals = 8, color = 'var(--accent)', bg = 'transparent', children }) {
  const c = size / 2
  const pr = size * 0.40
  const pw = size * 0.15
  const pl = size * 0.17
  return (
    <div className="petal-frame" style={{ width: size, height: size, position: 'relative' }} aria-hidden>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ position: 'absolute', inset: 0 }} fill="none">
        {Array.from({ length: petals }).map((_, i) => {
          const a = (i / petals) * 360
          return (
            <g key={i} transform={`rotate(${a} ${c} ${c})`}>
              <path
                d={`M ${c} ${c - pr - pl} C ${c + pw} ${c - pr - pl * 0.3}, ${c + pw} ${c - pr + pl * 0.3}, ${c} ${c - pr + pl}
                    C ${c - pw} ${c - pr + pl * 0.3}, ${c - pw} ${c - pr - pl * 0.3}, ${c} ${c - pr - pl} Z`}
                fill={color} opacity={0.16 + (i % 2) * 0.06}
              />
            </g>
          )
        })}
      </svg>
      <div style={{
        position: 'absolute', inset: '24%', borderRadius: '50%',
        background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
        color
      }}>
        {children}
      </div>
    </div>
  )
}

/* Grainy gradient wash panel background — soft radial blooms
   in a given hue + grain overlay. */
export function GradientWash({ hue = 'var(--w-peri)', hue2, className = '', grain = true, style = {} }) {
  const h2 = hue2 || hue
  return (
    <div className={`alt-gwash ${className}`} style={{ position: 'absolute', inset: 0, overflow: 'hidden', ...style }} aria-hidden>
      <div style={{
        position: 'absolute', inset: '-20%',
        background: `radial-gradient(60% 70% at 25% 15%, ${hue}, transparent 70%),
                     radial-gradient(70% 80% at 85% 90%, ${h2}, transparent 72%)`,
      }} />
      {grain && <div className="alt-grain alt-grain--light" />}
    </div>
  )
}

export function Grain({ light = false }) {
  return <div className={`alt-grain ${light ? 'alt-grain--light' : ''}`} aria-hidden />
}
