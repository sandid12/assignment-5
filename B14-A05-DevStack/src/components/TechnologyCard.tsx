import type { Technology } from '../types'

type TechnologyCardProps = {
  technology: Technology
  isAdded: boolean
  onAdd: () => void
}

export function TechnologyCard({ technology, isAdded, onAdd }: TechnologyCardProps) {
  return (
    <article className={`tech-card ${isAdded ? 'tech-card--selected' : ''}`}>
      <div className="card-topline">
        <div className="tech-icon"><img src={technology.icon} alt="" /></div>
        <span className="badge">{technology.badge}</span>
      </div>
      <h3>{technology.name}</h3>
      <p>{technology.description}</p>
      <div className="card-meta">
        <span className="category-chip">{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span className="rating"><span aria-hidden="true">★</span> {technology.rating}</span>
      </div>
      <button className="card-action" disabled={isAdded} onClick={onAdd}>
        {isAdded ? 'Added to stack' : 'Add to stack'}
        <span aria-hidden="true">{isAdded ? '✓' : '+'}</span>
      </button>
    </article>
  )
}
