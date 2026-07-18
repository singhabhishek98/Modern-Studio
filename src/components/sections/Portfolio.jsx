import { useMemo, useState } from 'react'
import { ArrowDownRight, Play } from 'lucide-react'
import { portfolioFilters, works } from '../../data/siteData'
import { Lightbox } from '../overlays/Lightbox'
import { SectionHeading } from '../common/SectionHeading'

export function Portfolio({ onShowReel }) {
  const [filter, setFilter] = useState('All')
  const [lightboxWork, setLightboxWork] = useState(null)
  const filteredWorks = useMemo(
    () => filter === 'All' ? works : works.filter((work) => work.category === filter),
    [filter],
  )

  const openWork = (work) => {
    if (work.film) onShowReel()
    else setLightboxWork(work)
  }

  return (
    <>
      <section className="portfolio-section section-pad" id="portfolio">
        <div className="portfolio-head" data-reveal>
          <SectionHeading eyebrow="Selected stories" title={<>Moments that still<br /><em>feel alive.</em></>} text="A few stories from the many beautiful people who trusted us with their once-in-a-lifetime moments." light />
          <div className="portfolio-filters" role="group" aria-label="Filter portfolio">
            {portfolioFilters.map((item) => (
              <button className={filter === item ? 'is-active' : ''} key={item} type="button" onClick={() => setFilter(item)}>{item}</button>
            ))}
          </div>
        </div>
        <div className="portfolio-grid">
          {filteredWorks.map((work) => (
            <button className={`portfolio-card ${work.className}`} key={work.id} type="button" onClick={() => openWork(work)} data-reveal>
              <img src={work.image} alt={work.title} style={{ objectPosition: work.position }} loading="lazy" />
              <span className="portfolio-card__wash" />
              {work.film && <span className="portfolio-card__play"><Play fill="currentColor" /></span>}
              <span className="portfolio-card__meta"><small>{work.type}</small><strong>{work.title}</strong></span>
              <span className="portfolio-card__arrow"><ArrowDownRight /></span>
            </button>
          ))}
        </div>
      </section>
      <Lightbox work={lightboxWork} onClose={() => setLightboxWork(null)} />
    </>
  )
}
