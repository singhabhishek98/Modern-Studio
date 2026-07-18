import { ArrowRight, HeartHandshake, Play } from 'lucide-react'
import { navLinks } from '../../data/siteData'
import { Brand } from '../common/Brand'
import { SocialInstagram } from '../common/SocialInstagram'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Brand />
        <p>Stories of love, life and everything worth remembering.</p>
        <div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><SocialInstagram /> Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer"><Play /> YouTube</a>
        </div>
      </div>
      <div className="footer-nav">
        <div><small>EXPLORE</small>{navLinks.slice(0, 4).map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div>
        <div><small>SERVICES</small><a href="#services">Weddings</a><a href="#services">Pre-Wedding</a><a href="#services">Events</a><a href="#services">Commercials</a></div>
        <div><small>CONTACT</small><a href="tel:+919876543210">+91 98765 43210</a><a href="mailto:hello@modernstudio.in">hello@modernstudio.in</a><span>Varanasi, India</span></div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 MODERN STUDIO. ALL RIGHTS RESERVED.</span>
        <span>MADE WITH <HeartHandshake size={13} /> FOR TIMELESS STORIES</span>
        <a href="#home">BACK TO TOP <ArrowRight /></a>
      </div>
    </footer>
  )
}
