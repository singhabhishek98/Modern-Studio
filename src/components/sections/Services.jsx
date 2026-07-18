import { ArrowDownRight } from 'lucide-react'
import { services } from '../../data/siteData'
import { SectionHeading } from '../common/SectionHeading'

export function Services() {
  return (
    <section className="services-section section-pad" id="services">
      <div className="services-intro" data-reveal>
        <SectionHeading eyebrow="What we capture" title={<>Every chapter,<br /><em>beautifully told.</em></>} />
        <p>From the first celebration to every milestone after—we bring the same craft, care and cinematic eye.</p>
      </div>
      <div className="services-list">
        {services.map(({ number, icon: Icon, title, text, tags, image }) => (
          <article className="service-row" key={number} data-reveal>
            <span className="service-row__number">{number}</span>
            <span className="service-row__icon"><Icon /></span>
            <div className="service-row__title"><h3>{title}</h3><div>{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
            <p>{text}</p>
            <div className="service-row__preview"><img src={image} alt="" loading="lazy" /></div>
            <a href="#contact" aria-label={`Enquire about ${title}`}><ArrowDownRight /></a>
          </article>
        ))}
      </div>
    </section>
  )
}
