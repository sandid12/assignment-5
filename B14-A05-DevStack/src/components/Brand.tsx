import logoText from '../../assets/logo-text.png'

type BrandProps = { compact?: boolean; useImage?: boolean }

export function Brand({ compact = false, useImage = false }: BrandProps) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#top" aria-label="DevStack home">
      {useImage ? <img src={logoText} alt="DevStack" /> : <span>Dev<span>Stack</span></span>}
    </a>
  )
}
