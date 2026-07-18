import { ArrowDownRight, MapPin, Play } from 'lucide-react'
import { SocialInstagram } from '../common/SocialInstagram'

export function Hero({ onShowReel }) {
  return (
    <section className="hero-section" id="home">
      <img className="hero-section__image" src="/MS.png" alt="Indian wedding couple in a cinematic night portrait" />
      <div className="hero-section__shade" />
      <div className="hero-social" aria-label="Social links">
        <span>FOLLOW</span><i />
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><SocialInstagram size={15} /></a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><Play size={14} /></a>
      </div>
      <div className="hero-content">
        <div className="hero-kicker"><span>EST. 2014</span><i /></div>
        <h1>Stories,<br /><em>framed forever.</em></h1>
        <p>Cinematic photography & films for weddings, celebrations and everything in between.</p>
        <div className="hero-actions">
          <a className="button button--gold" href="#portfolio">Explore our work <ArrowDownRight /></a>
          <button className="play-link" type="button" onClick={onShowReel}><span><Play fill="currentColor" /></span>Watch showreel</button>
        </div>
      </div>
      <div className="hero-location"><MapPin size={17} /><span>VARANASI · INDIA</span><i /></div>
      <div className="hero-count"><strong>01</strong><span>/ 05</span></div>
      <div className="scroll-hint"><span>SCROLL TO DISCOVER</span><ArrowDownRight /></div>
    </section>
  )
}
