import { useEffect, useRef } from 'react'
import { SITE } from '../config.js'
import { useModal } from '../ModalContext.jsx'

export default function Hero() {
  const { openApply, setEnquiryOpen } = useModal()
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tryPlay = () => {
      video.play().catch(() => {
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

      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={SITE.heroPoster}
        webkit-playsinline="true"
        x5-playsinline="true"
      >
        <source
          src="https://res.cloudinary.com/pcgf67hy/video/upload/f_auto,q_auto,w_640,c_fill/v1784612582/Cinematic_educational_institut_lzbhkq.mp4"
          media="(max-width: 640px)"
          type="video/mp4"
        />
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