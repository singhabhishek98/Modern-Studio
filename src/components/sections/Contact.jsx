import { useState } from 'react'
import { Aperture, Check, Clock3, Mail, MapPin, Phone, Send } from 'lucide-react'
import { services } from '../../data/siteData'

export function Contact() {
  const [formSent, setFormSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormSent(true)
    event.currentTarget.reset()
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <div data-reveal>
          <div className="eyebrow"><span />Let's create something timeless</div>
          <h2>Your story deserves<br /><em>to be remembered.</em></h2>
          <p>Tell us a little about your celebration. We will get back within 24 hours with availability and a thoughtfully tailored quote.</p>
        </div>
        <div className="contact-details" data-reveal>
          <a href="tel:+919876543210"><Phone /><span><small>CALL / WHATSAPP</small>+91 98765 43210</span></a>
          <a href="mailto:hello@modernstudio.in"><Mail /><span><small>EMAIL US</small>hello@modernstudio.in</span></a>
          <div><MapPin /><span><small>STUDIO</small>Varanasi, Uttar Pradesh</span></div>
          <div><Clock3 /><span><small>OPEN HOURS</small>Mon–Sat · 10am–7pm</span></div>
        </div>
      </div>
      <form className="booking-form" onSubmit={handleSubmit} data-reveal>
        <div className="form-heading"><Aperture /><span><strong>Check your date</strong><small>Usually replies within 24 hours</small></span></div>
        <div className="form-grid">
          <label><span>Your name *</span><input name="name" type="text" placeholder="Full name" required /></label>
          <label><span>Phone number *</span><input name="phone" type="tel" placeholder="+91 98765 43210" required /></label>
          <label><span>What are we capturing? *</span><select name="service" defaultValue="" required><option value="" disabled>Choose a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label>
          <label><span>Event date</span><input name="date" type="date" /></label>
          <label className="field-wide"><span>Event city *</span><input name="city" type="text" placeholder="City / venue" required /></label>
          <label className="field-wide"><span>Tell us about your plans</span><textarea name="message" rows="4" placeholder="Event, functions, estimated guests and anything special..." /></label>
        </div>
        <button className="button button--dark" type="submit">Send enquiry <Send /></button>
        {formSent && <p className="form-success" role="status"><Check /> Thank you! Your enquiry is ready. We’ll contact you shortly.</p>}
        <p className="form-note">By sending this form, you agree to be contacted regarding your enquiry.</p>
      </form>
    </section>
  )
}
