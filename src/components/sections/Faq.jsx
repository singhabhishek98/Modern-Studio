import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { faqs } from '../../data/siteData'
import { SectionHeading } from '../common/SectionHeading'

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq-section section-pad">
      <div className="faq-intro" data-reveal>
        <SectionHeading eyebrow="Good to know" title={<>A few things you<br /><em>may be wondering.</em></>} />
        <p>Still have a question? Just say hello—we are always happy to help.</p>
        <a className="text-link" href="https://wa.me/919876543210" target="_blank" rel="noreferrer">Chat on WhatsApp <MessageCircle /></a>
      </div>
      <div className="faq-list" data-reveal>
        {faqs.map(([question, answer], index) => (
          <article className={openIndex === index ? 'is-open' : ''} key={question}>
            <button type="button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)} aria-expanded={openIndex === index}>
              <span>0{index + 1}</span><strong>{question}</strong><ChevronDown />
            </button>
            <div><p>{answer}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}
