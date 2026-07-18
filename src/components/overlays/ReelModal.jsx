import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { reelFrames } from '../../data/siteData'
import { Brand } from '../common/Brand'

export function ReelModal({ onClose }) {
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % reelFrames.length)
    }, 3200)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
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
  }, [onClose])

  return (
    <div className="reel-modal" role="dialog" aria-modal="true" aria-label="Modern Studio showreel">
      <button className="reel-modal__close" type="button" onClick={onClose} aria-label="Close showreel"><X /></button>
      <div className="reel-stage">
        {reelFrames.map((frame, index) => <img className={frameIndex === index ? 'is-active' : ''} src={frame.image} alt="" key={frame.image} />)}
        <div className="reel-stage__shade" />
        <Brand compact />
        <div className="reel-stage__copy" key={frameIndex}>
          <small>{reelFrames[frameIndex].kicker}</small>
          <h2>{reelFrames[frameIndex].title}</h2>
        </div>
        <div className="reel-timeline">
          {reelFrames.map((_, index) => (
            <button className={frameIndex === index ? 'is-active' : ''} type="button" onClick={() => setFrameIndex(index)} key={index} aria-label={`Show reel scene ${index + 1}`}><i /></button>
          ))}
        </div>
        <span className="reel-demo-note">CINEMATIC SHOWREEL · DEMO PREVIEW</span>
      </div>
    </div>
  )
}
