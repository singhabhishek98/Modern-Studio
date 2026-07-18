import { ArrowRight, X } from 'lucide-react'
import { navLinks } from '../../data/siteData'
import { Brand } from '../common/Brand'

export function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`} aria-hidden={!open}>
      <div className="mobile-menu__top">
        <Brand compact />
        <button type="button" onClick={onClose} aria-label="Close menu"><X /></button>
      </div>
      <nav>
        {navLinks.map(([label, id], index) => (
          <a key={id} href={`#${id}`} onClick={onClose}>
            <span>0{index + 1}</span>{label}<ArrowRight />
          </a>
        ))}
      </nav>
      <div className="mobile-menu__footer">
        <span>Available across India</span>
        <a href="tel:+919876543210">+91 98765 43210</a>
      </div>
    </div>
  )
}
