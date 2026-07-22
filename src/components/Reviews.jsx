import { Fragment, useRef, useState, useEffect } from 'react'
import { PARENT_REELS } from '../config.js'
import useReveal from './useReveal.js'

const REVIEWS = [
  {
    text: 'My daughter used to fear maths. Within one term her marks improved — but more than that, she started enjoying it. The teachers genuinely care.',
    name: 'Parent of a Class 7 student',
    meta: 'Mathematics · CBSE',
  },
  {
    text: 'The 10th board preparation was very systematic — weekly tests, revision plans and honest updates at every step. We always knew where our son stood.',
    name: 'Parent of a Class 10 student',
    meta: 'SSLC Board Prep',
  },
  {
    text: 'Small batches make all the difference. My son gets the attention he simply could not get in a big tuition centre. Highly recommended.',
    name: 'Parent of a Class 2 student',
    meta: 'Primary School',
  },
]

function VideoPreview({ src, poster, tag }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [thumb, setThumb] = useState(poster || '')

  useEffect(() => {
    if (!src) return
    const v = document.createElement('video')
    v.src = src
    v.crossOrigin = 'anonymous'
    v.preload = 'metadata'
    v.muted = true
    v.playsInline = true
    v.addEventListener('loadeddata', () => { v.currentTime = 1 })
    v.addEventListener('seeked', () => {
      const c = document.createElement('canvas')
      c.width  = v.videoWidth  || 400
      c.height = v.videoHeight || 700
      const ctx = c.getContext('2d')
      ctx.drawImage(v, 0, 0, c.width, c.height)
      try { setThumb(c.toDataURL('image/jpeg', 0.85)) } catch(e) {}
      v.src = ''
    })
    v.load()
  }, [src])

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (playing) { v.pause(); setPlaying(false) }
    else         { v.play();  setPlaying(true)  }
  }

  return (
    <div
      className="rv__inner"
      onClick={src ? toggle : undefined}
      style={{ cursor: src ? 'pointer' : 'default' }}
    >
      <div className="rv__bg" />

      {thumb && (
        <div
          className="rv__poster"
          style={{
            backgroundImage: 'url(' + thumb + ')',
            opacity: playing ? 0 : 1,
          }}
        />
      )}

      {src && (
        <video
          ref={videoRef}
          src={src}
          playsInline
          preload="metadata"
          loop
          className="rv__el"
          style={{ opacity: playing ? 1 : 0 }}
          onEnded={() => setPlaying(false)}
        />
      )}

      <div className="rv__play" style={{ opacity: playing ? 0 : 1 }}>
        <span>▶</span>
      </div>

      <div className="rv__tag">{tag}</div>
    </div>
  )
}

export default function Reviews() {
  const scrollRef = useRef(null)
  useReveal()

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * 330, behavior: 'smooth' })
  }

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

      {/* Full-width scrollable track */}
      <div className="reviews__outer">
        <div className="reviews__track" ref={scrollRef}>
          <div className="reviews__pad" />

          {REVIEWS.map((r, i) => (
            <Fragment key={i}>

              {/* Review text card */}
              <div className="rcard reveal">
                <div className="rcard__top">
                  <span className="rcard__stars">★★★★★</span>
                  <span className="rcard__num">0{i + 1}</span>
                </div>
                <p className="rcard__text">"{r.text}"</p>
                <div className="rcard__footer">
                  <div className="rcard__avatar">{r.name.charAt(0)}</div>
                  <div>
                    <p className="rcard__name">{r.name}</p>
                    <p className="rcard__meta">{r.meta}</p>
                  </div>
                </div>
              </div>

              {/* Video preview card */}
              {PARENT_REELS[i] && (
                <div className="rv reveal">
                  <VideoPreview
                    src={PARENT_REELS[i].src}
                    poster={PARENT_REELS[i].poster}
                    tag={PARENT_REELS[i].tag}
                  />
                </div>
              )}

            </Fragment>
          ))}

          <div className="reviews__pad" />
        </div>
      </div>

      {/* Mobile swipe hint */}
      <div className="container">
        <p className="reviews__hint">← Swipe to explore →</p>
      </div>

    </section>
  )
}