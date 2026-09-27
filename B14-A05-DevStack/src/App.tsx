import { useState } from 'react'
import toast from 'react-hot-toast'
import technologiesData from './data/technologies.json'
import { Brand } from './components/Brand'
import { Footer } from './components/Footer'
import { StackPanel } from './components/StackPanel'
import { TechnologyCard } from './components/TechnologyCard'
import type { Technology } from './types'

const technologies = technologiesData as Technology[]

function App() {
  const [stack, setStack] = useState<Technology[]>([])
  const [menuOpen, setMenuOpen] = useState(false)

  const addToStack = (technology: Technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast('That technology is already in your stack.')
      return
    }
    if (stack.length >= 12) {
      toast.error('Your stack is full. Remove one tool to continue.')
      return
    }
    setStack((current) => [...current, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const removeFromStack = (id: string) => {
    const removed = stack.find((technology) => technology.id === id)
    setStack((current) => current.filter((technology) => technology.id !== id))
    if (removed) toast(`${removed.name} removed from your stack.`)
  }

  const clearStack = () => {
    if (stack.length === 0) return
    setStack([])
    toast.success('Your stack has been cleared.')
  }

  return <div id="top" className="app-shell">
    <header className="site-header">
      <div className="nav-wrap">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><span /><span /><span /></button>
        <Brand useImage />
        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Main navigation">
          <a className="active" href="#top" onClick={() => setMenuOpen(false)}>Home</a><a href="#technologies" onClick={() => setMenuOpen(false)}>Technologies</a><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="nav-actions"><a className="sign-in" href="#contact">Sign in</a><a className="sign-up" href="#contact">Login <span aria-hidden="true">↗</span></a></div>
      </div>
    </header>

    <main>
      <section className="hero section-wrap">
        <div className="hero-copy"><h1>Build your <span>ideal<br className="desktop-break" /> development stack.</span></h1><p className="hero-description">Explore the tools behind great products, compare your options, and assemble a stack that feels right for the work ahead.</p><div className="hero-actions"><a className="primary-button" href="#technologies">Explore technologies <span aria-hidden="true">↓</span></a><a className="secondary-button" href="#about">Learn more <span aria-hidden="true">↗</span></a></div></div>
        <div className="hero-art"><img src="/assets/banner-stack.png" alt="A glowing layered stack of development tools" /><span className="art-dot art-dot--one" /><span className="art-dot art-dot--two" /></div>
      </section>

      <section className="explorer section-wrap" id="technologies"><div className="section-heading"><div><h2>Explore <span>technologies.</span></h2><p>Pick the building blocks that will move your next idea forward.</p></div></div><div className="explorer-layout"><div className="technology-grid">{technologies.map((technology) => <TechnologyCard key={technology.id} technology={technology} isAdded={stack.some((item) => item.id === technology.id)} onAdd={() => addToStack(technology)} />)}</div><StackPanel stack={stack} onRemove={removeFromStack} onClear={clearStack} /></div></section>

    </main>
    <Footer />
  </div>
}

export default App
