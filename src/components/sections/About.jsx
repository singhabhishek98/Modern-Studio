import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'

export function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="about-grid" data-reveal>
        <SectionHeading eyebrow="The studio" title={<>We preserve the feeling,<br /><em>not just the frame.</em></>} />
        <div className="about-copy">
          <p className="about-copy__lead">Modern Studio is a collective of storytellers, photographers and filmmakers creating honest, artful memories across India.</p>
          <p>We blend candid documentary moments with editorial portraits—so your photographs feel timeless today, and even more meaningful years from now.</p>
          <a className="text-link" href="#contact">Meet your storytellers <ArrowRight /></a>
        </div>
      </div>
      <div className="stats" data-reveal>
        <div><strong>10<sup>+</sup></strong><span>Years of storytelling</span></div>
        <div><strong>850<sup>+</sup></strong><span>Stories captured</span></div>
        <div><strong>42</strong><span>Cities travelled</span></div>
        <div><strong>4.9<sup>/5</sup></strong><span>Couple rating</span></div>
      </div>
    </section>
  )
}
