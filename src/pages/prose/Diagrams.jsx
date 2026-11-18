/* Inline SVG diagrams for prose pages, themed to the site (cream, ink, Garamond/Figtree). */

const INK = '#000000'
const BODY = '#595959'
const MUTED = '#8a8578'
const BORDER = '#d8d2c2'
const CARD = '#ffffff'
const FONT = "Figtree, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"

function Arrow({ x1, y1, x2, y2 }) {
  const angle = Math.atan2(y2 - y1, x2 - x1)
  const ah = 7
  const ax = x2 - ah * Math.cos(angle - 0.42)
  const ay = y2 - ah * Math.sin(angle - 0.42)
  const bx = x2 - ah * Math.cos(angle + 0.42)
  const by = y2 - ah * Math.sin(angle + 0.42)
  return (
    <g stroke={INK} strokeWidth="1.4" fill="none">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <polygon points={`${x2},${y2} ${ax},${ay} ${bx},${by}`} fill={INK} stroke="none" />
    </g>
  )
}

function Node({ x, y, w, h, title, sub, dark = false, titleSize = 14.5 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="10" fill={dark ? INK : CARD} stroke={dark ? INK : BORDER} strokeWidth="1.2" />
      <text x={x + w / 2} y={sub ? y + h / 2 - 4 : y + h / 2 + 5} textAnchor="middle" fontFamily={FONT} fontSize={titleSize} fontWeight="600" fill={dark ? '#FFFAEB' : INK}>
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 14} textAnchor="middle" fontFamily={FONT} fontSize="12" fill={dark ? '#d9d2bd' : BODY}>
          {sub}
        </text>
      )}
    </g>
  )
}

function LaneLabel({ x, y, children }) {
  return (
    <text x={x} y={y} fontFamily={FONT} fontSize="12" letterSpacing="1.4" fill={MUTED} style={{ textTransform: 'uppercase' }}>
      {children}
    </text>
  )
}

/* Diagram 1: the IVR-first flow - the menu answers, and hands onward only where the flow says so. */
export function IvrFirstFlowDiagram() {
  return (
    <svg viewBox="0 0 760 330" width="100%" role="img" aria-label="Diagram of an IVR-first call flow: the menu answers, then hands calls to an AI agent or the team only where configured">
      <Node x={280} y={16} w={200} h={36} title="Caller dials your number" titleSize={13.5} />
      <Arrow x1={380} y1={52} x2={380} y2={68} />
      <Node x={265} y={68} w={230} h={46} title="IVR menu answers" sub="the flow you designed, by keypress" dark />

      {/* Three branches from the menu */}
      <Arrow x1={320} y1={114} x2={130} y2={136} />
      <Arrow x1={380} y1={114} x2={380} y2={136} />
      <Arrow x1={440} y1={114} x2={630} y2={136} />

      <LaneLabel x={40} y={158}>Served in the menu</LaneLabel>
      <LaneLabel x={262} y={158}>Needs conversation</LaneLabel>
      <LaneLabel x={545} y={158}>Needs a person now</LaneLabel>

      {/* Lane 1: menu self-serve */}
      <Node x={40} y={168} w={180} h={46} title="Information · digits" sub="hours, status, IDs captured" titleSize={13} />
      <Arrow x1={130} y1={214} x2={130} y2={232} />
      <Node x={40} y={232} w={180} h={44} title="Done in the menu" sub="no agent involved" titleSize={13} />

      {/* Lane 2: AI agent step */}
      <Node x={240} y={168} w={280} h={46} title="AI voice agent step" sub="free-form speech, follow-ups, actions" titleSize={13.5} />
      <Arrow x1={330} y1={214} x2={310} y2={230} />
      <Arrow x1={430} y1={214} x2={450} y2={230} />
      <Node x={240} y={230} w={136} h={46} title="Resolved" sub="task done on the call" titleSize={13} />
      <Node x={384} y={230} w={136} h={46} title="To your team" sub="context attached" titleSize={13} />

      {/* Lane 3: direct to team */}
      <Node x={545} y={168} w={180} h={46} title="Straight to your team" sub="the menu routes the call" titleSize={12.5} />
      <Arrow x1={635} y1={214} x2={635} y2={232} />
      <Node x={545} y={232} w={180} h={44} title="Your team" sub="recording + transcript on record" titleSize={13} />

      <text x={380} y={308} textAnchor="middle" fontFamily={FONT} fontSize="12.5" fill={BODY}>
        The menu is the front door. AI and your team are steps inside the flow,
      </text>
      <text x={380} y={324} textAnchor="middle" fontFamily={FONT} fontSize="12.5" fill={BODY}>
        used only where you put them.
      </text>
    </svg>
  )
}

/* Diagram 2: an example flow on one number - menu branches mixing information, AI and human steps. */
export function IvrExampleFlowDiagram() {
  return (
    <svg viewBox="0 0 760 360" width="100%" role="img" aria-label="Example IVR Studio flow: a main menu branches to an information step, an AI voice agent step, or directly to the team">
      <Node x={30} y={142} w={150} h={40} title="Caller" titleSize={13.5} />
      <Arrow x1={180} y1={162} x2={218} y2={162} />
      <Node x={218} y={132} w={172} h={60} title="Main menu" sub="press 1 · 2 · 3" dark />

      {/* Branch 1: information */}
      <Arrow x1={390} y1={146} x2={438} y2={78} />
      <text x={402} y={104} fontFamily={FONT} fontSize="12.5" fontWeight="600" fill={MUTED}>1</text>
      <Node x={440} y={45} w={180} h={46} title="Information step" sub="plays hours and status" titleSize={13} />
      <Arrow x1={620} y1={68} x2={653} y2={68} />
      <Node x={655} y={49} w={90} h={40} title="End call" titleSize={12.5} />

      {/* Branch 2: AI agent */}
      <Arrow x1={390} y1={162} x2={438} y2={162} />
      <text x={404} y={152} fontFamily={FONT} fontSize="12.5" fontWeight="600" fill={MUTED}>2</text>
      <Node x={440} y={139} w={180} h={46} title="AI voice agent step" sub="order help, in free speech" titleSize={13} />
      <Arrow x1={620} y1={152} x2={653} y2={140} />
      <Node x={655} y={120} w={90} h={40} title="Resolved" titleSize={12.5} />
      <Arrow x1={620} y1={178} x2={653} y2={196} />
      <Node x={655} y={192} w={90} h={44} title="Your team" titleSize={12} />
      <text x={700} y={252} textAnchor="middle" fontFamily={FONT} fontSize="11" fill={BODY}>
        context attached
      </text>

      {/* Branch 3: direct to team, routed under the AI lane */}
      <path d="M 390 178 L 414 178 L 414 300 L 640 300 L 640 214 L 651 214" fill="none" stroke={INK} strokeWidth="1.4" />
      <polygon points="655,214 647,210 647,218" fill={INK} />
      <text x={396} y={196} fontFamily={FONT} fontSize="12.5" fontWeight="600" fill={MUTED}>3</text>

      <text x={380} y={336} textAnchor="middle" fontFamily={FONT} fontSize="12.5" fill={BODY}>
        Press 1 stays in the menu. Press 2 talks to the AI agent, and reaches your team
      </text>
      <text x={380} y={352} textAnchor="middle" fontFamily={FONT} fontSize="12.5" fill={BODY}>
        only if it needs to. Press 3 goes straight to your people.
      </text>
    </svg>
  )
}

export const DIAGRAMS = {
  'ivr-first-flow': IvrFirstFlowDiagram,
  'ivr-example-flow': IvrExampleFlowDiagram,
}
