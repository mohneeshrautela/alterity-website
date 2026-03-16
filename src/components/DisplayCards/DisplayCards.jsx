import './DisplayCards.css'

function DisplayCard({ icon, title, description, tag, positionIndex, total }) {
  const pos = total - 1 - positionIndex // 0 = back, (total-1) = front
  return (
    <div className="dc-card" data-pos={pos}>
      <div className="dc-card__top">
        <span className="dc-card__icon-wrap">{icon}</span>
        <span className="dc-card__title">{title}</span>
      </div>
      <p className="dc-card__desc">{description}</p>
      <span className="dc-card__tag">{tag}</span>
    </div>
  )
}

export default function DisplayCards({ cards }) {
  // render back-to-front so front card has highest z-index in DOM
  const reversed = [...cards].reverse()
  return (
    <div className="dc-wrap">
      {reversed.map((card, i) => (
        <DisplayCard
          key={card.title}
          {...card}
          positionIndex={i}
          total={cards.length}
        />
      ))}
    </div>
  )
}
