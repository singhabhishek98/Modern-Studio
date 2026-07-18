import {
  Baby,
  CalendarDays,
  Camera,
  CarFront,
  Clapperboard,
  Gem,
  HeartHandshake,
  MessageCircle,
  PartyPopper,
  Sparkles,
  Video,
} from 'lucide-react'

export const navLinks = [
  ['Home', 'home'],
  ['Services', 'services'],
  ['Portfolio', 'portfolio'],
  ['Films', 'films'],
  ['About', 'about'],
  ['Contact', 'contact'],
]

export const serviceStrip = [
  { icon: HeartHandshake, title: 'Weddings' },
  { icon: Sparkles, title: 'Pre-Wedding' },
  { icon: PartyPopper, title: 'Functions' },
  { icon: Baby, title: 'Maternity & Baby' },
  { icon: CarFront, title: 'Car & Bike' },
  { icon: Clapperboard, title: 'Cinematic Films' },
]

export const works = [
  { id: 1, title: 'The Royal Vows', type: 'Wedding Story', category: 'Weddings', image: '/MS.png', className: 'portfolio-card--hero', position: '68% center' },
  { id: 2, title: 'A Golden Beginning', type: 'Pre-Wedding', category: 'Pre-Wedding', image: '/pre-wedding.png', className: 'portfolio-card--portrait', position: '55% center' },
  { id: 3, title: 'Dancing Through Forever', type: 'Sangeet Night', category: 'Celebrations', image: '/sangeet.png', className: 'portfolio-card--portrait', position: '50% center' },
  { id: 4, title: 'Promises at Dusk', type: 'Engagement', category: 'Celebrations', image: '/MS.png', className: 'portfolio-card--wide', position: '40% center' },
  { id: 5, title: 'Before The Vows', type: 'Couple Portraits', category: 'Pre-Wedding', image: '/pre-wedding.png', className: 'portfolio-card--small', position: '44% center' },
  { id: 6, title: 'All Eyes On Love', type: 'Wedding Film', category: 'Films', image: '/sangeet.png', className: 'portfolio-card--small', position: '48% center', film: true },
]

export const portfolioFilters = ['All', 'Weddings', 'Pre-Wedding', 'Celebrations', 'Films']

export const services = [
  { number: '01', icon: HeartHandshake, title: 'Wedding Stories', text: 'From haldi to vidaai, every ritual, quiet glance and wild dance—captured with warmth and intention.', tags: ['Photography', 'Cinematography', 'Albums'], image: '/MS.png' },
  { number: '02', icon: Sparkles, title: 'Pre-Wedding', text: 'Concept-led couple shoots with location planning, styling direction and cinematic short films.', tags: ['Concept', 'Reels', 'Drone'], image: '/pre-wedding.png' },
  { number: '03', icon: PartyPopper, title: 'Events & Functions', text: 'Engagements, mehendi, sangeet, birthdays and family functions documented without missing the real moments.', tags: ['Candid', 'Traditional', 'Live Screen'], image: '/sangeet.png' },
  { number: '04', icon: CarFront, title: 'Delivery Shoots', text: 'Premium car and bike delivery coverage crafted for personal memories, reels and dealership campaigns.', tags: ['Car', 'Bike', 'Commercial'], image: '/pre-wedding.png' },
  { number: '05', icon: Baby, title: 'Maternity & Family', text: 'Comfortable, intimate portrait sessions for maternity, newborns, kids and growing families.', tags: ['Maternity', 'Newborn', 'Portraits'], image: '/MS.png' },
  { number: '06', icon: Video, title: 'Films & Commercials', text: 'Wedding films, music videos, brand stories, property films and social-first vertical content.', tags: ['4K Film', 'Reels', 'Editing'], image: '/sangeet.png' },
]

export const processSteps = [
  { icon: MessageCircle, number: '01', title: 'Tell us your story', text: 'Share your date, location and the moments you want covered.' },
  { icon: CalendarDays, number: '02', title: 'Plan it together', text: 'We align the team, timeline, shot ideas and every little detail.' },
  { icon: Camera, number: '03', title: 'Live the moment', text: 'You enjoy the day while we capture it naturally and unobtrusively.' },
  { icon: Gem, number: '04', title: 'Relive it forever', text: 'Receive your curated gallery, cinematic films and handcrafted album.' },
]

export const testimonials = [
  { quote: 'They did not just photograph our wedding—they preserved how every moment felt. The final film made our entire family emotional all over again.', names: 'Riya & Arjun', event: 'Wedding · Lucknow' },
  { quote: 'From location planning to poses, the team made us completely comfortable. Our pre-wedding photos look like frames from a film, but still feel like us.', names: 'Mehak & Kunal', event: 'Pre-Wedding · Jaipur' },
  { quote: 'Our new car delivery reel was delivered the next morning and looked fantastic. Professional, punctual and genuinely easy to work with.', names: 'The Sharma Family', event: 'Delivery Shoot · Varanasi' },
]

export const faqs = [
  ['How early should we book?', 'For weddings, 3–6 months in advance is ideal. Pre-wedding and smaller events can usually be planned 2–4 weeks ahead, depending on the date.'],
  ['Do you travel outside the city?', 'Yes. We cover destination weddings and shoots across India. Travel and stay are quoted transparently based on your location and schedule.'],
  ['When will we receive our photos and films?', 'Preview photographs arrive within 5–7 days. The complete edited gallery is typically delivered in 4–6 weeks and films in 6–10 weeks.'],
  ['Can we customise a package?', 'Absolutely. Every celebration is different, so coverage hours, photographers, drone, albums, reels and films can be combined around your actual needs.'],
]

export const reelFrames = [
  { image: '/MS.png', kicker: 'Weddings', title: 'Two souls. One timeless story.' },
  { image: '/pre-wedding.png', kicker: 'Pre-Wedding', title: 'The beautiful before.' },
  { image: '/sangeet.png', kicker: 'Celebrations', title: 'Joy, in every frame.' },
]
