import type { Technology } from '../types'

type StackPanelProps = { stack: Technology[]; onRemove: (id: string) => void; onClear: () => void }

export function StackPanel({ stack, onRemove, onClear }: StackPanelProps) {
  return (
    <aside className="stack-panel" aria-labelledby="stack-heading">
      <div className="stack-heading">
        <div>
          <p className="eyebrow">Your workspace</p>
          <h2 id="stack-heading">Your Stack</h2>
        </div>
        <span className="stack-count">{stack.length}/6</span>
      </div>
      <p className="stack-intro">{stack.length === 0 ? 'Choose tools to shape your next project.' : `${stack.length} ${stack.length === 1 ? 'technology' : 'technologies'} selected`}</p>
      {stack.length === 0 ? (
        <div className="stack-empty"><span aria-hidden="true">⌘</span><strong>Your stack is empty</strong><small>Add technologies to see them here.</small></div>
      ) : (
        <div className="stack-list">
          {stack.map((technology) => (
            <div className="stack-item" key={technology.id}>
              <img src={technology.icon} alt="" />
              <div><strong>{technology.name}</strong><small>{technology.category}</small></div>
              <button onClick={() => onRemove(technology.id)} aria-label={`Remove ${technology.name}`}>&times;</button>
            </div>
          ))}
        </div>
      )}
      <button className="clear-button" onClick={onClear} disabled={stack.length === 0}>Remove all</button>
    </aside>
  )
}
