import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { testimonials } from '../../data/siteData'

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]
  const previous = () => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)
  const next = () => setActiveIndex((activeIndex + 1) % testimonials.length)

  return (
    <section className="testimonial-section">
      <div className="testimonial-image"><img src="/pre-wedding.png" alt="Happy couple during a pre-wedding shoot" loading="lazy" /><span>REAL STORIES<br />REAL EMOTIONS</span></div>
      <div className="testimonial-content">
        <div className="eyebrow"><span />Love notes</div>
        <Quote className="quote-icon" />
        <div className="stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} fill="currentColor" />)}</div>
        <blockquote>“{active.quote}”</blockquote>
        <div className="testimonial-author"><strong>{active.names}</strong><span>{active.event}</span></div>
        <div className="testimonial-controls">
          <button type="button" onClick={previous} aria-label="Previous testimonial"><ChevronLeft /></button>
          <span><strong>0{activeIndex + 1}</strong> / 0{testimonials.length}</span>
          <button type="button" onClick={next} aria-label="Next testimonial"><ChevronRight /></button>
        </div>
      </div>
    </section>
  )
}
