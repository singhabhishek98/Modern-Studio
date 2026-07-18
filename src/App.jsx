import { useEffect, useState } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { WhatsAppFloat } from './components/common/WhatsAppFloat'
import { ReelModal } from './components/overlays/ReelModal'
import { Hero } from './components/sections/Hero'
import { ServiceStrip } from './components/sections/ServiceStrip'
import { About } from './components/sections/About'
import { Portfolio } from './components/sections/Portfolio'
import { Services } from './components/sections/Services'
import { FilmShowcase } from './components/sections/FilmShowcase'
import { Process } from './components/sections/Process'
import { Testimonials } from './components/sections/Testimonials'
import { Faq } from './components/sections/Faq'
import { Contact } from './components/sections/Contact'
import './App.css'

function App() {
  const [showReel, setShowReel] = useState(false)

  useEffect(() => {
    if (!window.location.hash) return undefined
    const timer = window.setTimeout(() => {
      document.querySelector(window.location.hash)?.scrollIntoView()
    }, 150)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    }, { threshold: 0.12 })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const openReel = () => setShowReel(true)

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero onShowReel={openReel} />
        <ServiceStrip />
        <About />
        <Portfolio onShowReel={openReel} />
        <Services />
        <FilmShowcase onShowReel={openReel} />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      {showReel && <ReelModal onClose={() => setShowReel(false)} />}
    </div>
  )
}

export default App
