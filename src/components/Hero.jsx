import { useEffect, useRef } from 'react'
import { useModal } from '../ModalContext.jsx'

/* Hero video — Cloudinary auto-transcodes/compresses via URL params:
   f_auto = best format per browser (mp4/webm)
   q_auto = smart compression
   w_1280 = capped width, no need to ship 4K to a hero banner
   Swap the public ID below if you upload a new video. */
const HERO_VIDEO_DESKTOP =
  'https://res.cloudinary.com/pcgf67hy/video/upload/f_auto,q_auto,w_1280,c_fill/v1785495037/BA_Website_VT_lru16g.mp4'

const HERO_VIDEO_MOBILE =
  'https://res.cloudinary.com/pcgf67hy/video/upload/f_auto,q_auto,w_640,c_fill/v1785495037/BA_Website_VT_lru16g.mp4'

const HERO_POSTER =
  'https://res.cloudinary.com/pcgf67hy/video/upload/f_auto,q_auto,w_1280,c_fill/v1785495037/BA_Website_VT_lru16g.jpg'

export default function Hero() {
  const { openApply, setEnquiryOpen } = useModal()
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Must be set as JS properties (not just HTML attributes) —
    // iOS Safari sometimes ignores the attributes alone.
    video.muted = true
    video.playsInline = true

    const tryPlay = () => {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked — poster stays visible, no broken UI
        })
      }
    }

    tryPlay()

    // Retry on first user interaction if autoplay was blocked
    const retryOnInteraction = () => {
      tryPlay()
      window.removeEventListener('touchstart', retryOnInteraction)
      window.removeEventListener('click', retryOnInteraction)
    }
    window.addEventListener('touchstart', retryOnInteraction, { once: true })
    window.addEventListener('click', retryOnInteraction, { once: true })

    return () => {
      window.removeEventListener('touchstart', retryOnInteraction)
      window.removeEventListener('click', retryOnInteraction)
    }
  }, [])

  return (
    <section className="hero" id="home">

      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={HERO_POSTER}
        webkit-playsinline="true"
        x5-playsinline="true"
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={HERO_VIDEO_MOBILE} media="(max-width: 640px)" type="video/mp4" />
        <source src={HERO_VIDEO_DESKTOP} type="video/mp4" />
      </video>

      <div className="hero__scrim" />

      <div className="container hero__content">
        <h1 className="hero__title">
          Strong Foundations <em>for</em> Bright Futures
        </h1>
        <p className="hero__sub">
          Personalised academic tutoring from Pre-Nursery to 10th Standard
          — small batches, caring teachers and steady results.
        </p>
        <div className="hero__actions">
          <button className="btn btn--solid" onClick={openApply}>
            Enrol Now <span className="arrow">→</span>
          </button>
          <button className="btn btn--light" onClick={() => setEnquiryOpen(true)}>
            Enquire <span className="arrow">→</span>
          </button>
        </div>
      </div>

    </section>
  )
}