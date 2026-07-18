export function Brand({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#home" aria-label="Modern Studio home">
      <span>MODERN STUDIO</span>
      <small>PHOTO <i>+</i> FILMS</small>
    </a>
  )
}
