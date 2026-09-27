type BrandProps = { compact?: boolean; useImage?: boolean }

export function Brand({ compact = false, useImage = false }: BrandProps) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#top" aria-label="DevStack home">
      {useImage ? <img src={`${import.meta.env.BASE_URL}assets/logo-text.png`} alt="DevStack" /> : <span>Dev<span>Stack</span></span>}
    </a>
  )
}
