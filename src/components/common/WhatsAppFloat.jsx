import { MessageCircle } from 'lucide-react'

export function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href="https://wa.me/919876543210?text=Hi%20Modern%20Studio%2C%20I%20want%20to%20book%20a%20shoot." target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <MessageCircle /><span>Let’s talk</span>
    </a>
  )
}
