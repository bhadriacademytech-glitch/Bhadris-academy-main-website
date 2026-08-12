import { useEffect, useRef } from 'react'
import { useModal } from '../ModalContext.jsx'

const HERO_VIDEO =
  'https://res.cloudinary.com/pcgf67hy/video/upload/v1786524701/BA_Website_VT_New_hxuher.mov'

export default function Hero() {
  const { openApply, setEnquiryOpen } = useModal()
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.playsInline = true

    const tryPlay = () => {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          /* Autoplay blocked — poster div stays visible behind it */
        })
      }
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

      <div className="hero__poster" />

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
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="hero__scrim" />

      <div className="container hero__content">
        <h1 className="hero__title">
          Building Strong Foundations <em>for</em> Bright Futures
        </h1>
        <p className="hero__sub">
          Personalised academic support for students from Pre-Nursery to Grade 10, designed to strengthen concepts, improve confidence and deliver consistent academic progress.
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