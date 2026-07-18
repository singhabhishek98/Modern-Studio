import { useEffect } from 'react'
import { X } from 'lucide-react'

export function Lightbox({ work, onClose }) {
  useEffect(() => {
    if (!work) return undefined
    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [work, onClose])

  if (!work) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={work.title} onClick={onClose}>
      <button type="button" onClick={onClose} aria-label="Close image"><X /></button>
      <img src={work.image} alt={work.title} onClick={(event) => event.stopPropagation()} />
      <div><small>{work.type}</small><strong>{work.title}</strong></div>
    </div>
  )
}
