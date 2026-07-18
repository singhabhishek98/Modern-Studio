import { serviceStrip } from '../../data/siteData'

export function ServiceStrip() {
  return (
    <section className="service-strip" aria-label="Services">
      {serviceStrip.map(({ icon: Icon, title }) => (
        <a href="#services" key={title}><Icon /><span>{title}</span></a>
      ))}
    </section>
  )
}
