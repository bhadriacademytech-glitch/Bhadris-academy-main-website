import { useRef, useState, useEffect } from 'react'
import { PARENT_REELS } from '../config.js'
import useReveal from './useReveal.js'

function ReelThumb({ src, poster, tag, onOpen }) {
  const [thumb, setThumb] = useState(poster || '')

  useEffect(() => {
    if (!src || poster) return
    const v = document.createElement('video')
    v.src = src
    v.crossOrigin = 'anonymous'
    v.preload = 'metadata'
    v.muted = true
    v.playsInline = true
    v.addEventListener('loadeddata', () => { v.currentTime = 1 })
    v.addEventListener('seeked', () => {
      const c = document.createElement('canvas')
      c.width = v.videoWidth || 400
      c.height = v.videoHeight || 700
      const ctx = c.getContext('2d')
      ctx.drawImage(v, 0, 0, c.width, c.height)
      try { setThumb(c.toDataURL('image/jpeg', 0.85)) } catch (e) {}
      v.src = ''
    })
    v.load()
  }, [src, poster])

  return (
    <div className="rv__inner" onClick={onOpen} style={{ cursor: 'pointer' }}>
      <div className="rv__bg" />
      {thumb && (
        <div className="rv__poster" style={{ backgroundImage: `url(${thumb})` }} />
      )}
      <div className="rv__play"><span>▶</span></div>
      <div className="rv__tag">{tag}</div>
    </div>
  )
}

export default function Reviews() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(null)
  useReveal()

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * 330, behavior: 'smooth' })
  }

  const closeReel = () => setActiveIndex(null)

  // Esc key closes the lightbox (and stops the video, since it unmounts)
  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e) => { if (e.key === 'Escape') closeReel() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIndex])

  const active = activeIndex !== null ? PARENT_REELS[activeIndex] : null

  return (
    <section className="reviews" id="reviews">

      <div className="container">
        <div className="reviews__head reveal">
          <div>
            <p className="reviews__eyebrow">Testimonials</p>
            <h2 className="reviews__title">What Parents Say</h2>
          </div>
          <div className="reviews__arrows">
            <button className="reviews__arr" onClick={() => scroll(-1)} aria-label="Previous">←</button>
            <button className="reviews__arr" onClick={() => scroll(1)} aria-label="Next">→</button>
          </div>
        </div>
      </div>

      {/* Full-width scrollable track — videos only */}
      <div className="reviews__outer">
        <div className="reviews__track" ref={scrollRef}>
          <div className="reviews__pad" />

          {PARENT_REELS.map((reel, i) => (
            <div className="rv reveal" key={i}>
              <ReelThumb
                src={reel.src}
                poster={reel.poster}
                tag={reel.tag}
                onOpen={() => setActiveIndex(i)}
              />
            </div>
          ))}

          <div className="reviews__pad" />
        </div>
      </div>

      <div className="container">
        <p className="reviews__hint">← Swipe to explore →</p>
      </div>

      {/* Lightbox — single video element, so opening a new one always stops the old one */}
      {active && (
        <div className="rv__lightbox" onClick={closeReel}>
          <button className="rv__close" onClick={closeReel} aria-label="Close">✕</button>
          <video
            key={activeIndex}
            src={active.src}
            autoPlay
            controls
            playsInline
            className="rv__lightbox-video"
            onClick={(e) => e.stopPropagation()}
            onEnded={closeReel}
          />
        </div>
      )}

    </section>
  )
}