import { processSteps } from '../../data/siteData'
import { SectionHeading } from '../common/SectionHeading'

export function Process() {
  return (
    <section className="process-section section-pad">
      <div className="process-head" data-reveal>
        <SectionHeading eyebrow="How it works" title={<>Easy from hello<br /><em>to forever.</em></>} />
        <p>No confusing process or last-minute surprises. We keep everything clear, personal and beautifully organised.</p>
      </div>
      <div className="process-grid" data-reveal>
        {processSteps.map(({ icon: Icon, number, title, text }) => (
          <article key={number}><span className="process-icon"><Icon /></span><small>{number}</small><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
    </section>
  )
}
