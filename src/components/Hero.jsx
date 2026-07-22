import { useEffect, useRef } from 'react'
import { SITE } from '../config.js'
import { useModal } from '../ModalContext.jsx'

export default function Hero() {
  const { openApply, setEnquiryOpen } = useModal()
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    /* Force play on iOS — iPhones sometimes block autoplay silently */
    const tryPlay = () => {
      video.play().catch(() => {
        /* If autoplay blocked — video stays hidden, poster shows */
        video.style.opacity = '0'
      })
    }

    if (video.readyState >= 2) {
      tryPlay()
    } else {
      video.addEventListener('canplay', tryPlay, { once: true })
    }

    return () => video.removeEventListener('canplay', tryPlay)
  }, [])

  return (
    <section className="hero" id="home">

      {/* Poster — shows while video loads or if it fails on iOS */}
      <div className="hero__poster" />

      {/* Video — direct element, NOT wrapped in aria-hidden div */}
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        webkit-playsinline="true"
        x5-playsinline="true"
      >
        <source src={SITE.heroVideo} type="video/mp4" />
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