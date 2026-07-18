import { Film, Play } from 'lucide-react'

export function FilmShowcase({ onShowReel }) {
  return (
    <section className="film-section" id="films">
      <img src="/sangeet.png" alt="A joyful sangeet celebration" loading="lazy" />
      <div className="film-section__shade" />
      <div className="film-section__content" data-reveal>
        <div className="eyebrow eyebrow--center"><span />Stories in motion<span /></div>
        <h2>Not a video.<br /><em>A feeling you can replay.</em></h2>
        <button className="reel-button" type="button" onClick={onShowReel}><Play fill="currentColor" /><span>PLAY SHOWREEL<small>01:24 MIN</small></span></button>
      </div>
      <div className="film-section__note"><Film size={16} /> WEDDING FILMS · TEASERS · REELS · DRONE</div>
    </section>
  )
}
