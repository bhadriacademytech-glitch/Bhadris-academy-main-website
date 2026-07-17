import { useEffect, useRef, useState } from 'react'

const ITEMS = [
  {
    label: 'Beyond Learning',
    caption: 'Values, discipline and steady study habits — we shape students, not just scores.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=70',
  },
  {
    label: 'Our Facilities',
    caption: 'Clean, well-equipped classrooms across two Bengaluru branches — calm spaces built for focus.',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=70',
  },
  {
    label: 'Our Faculty',
    caption: 'Qualified, patient teachers who know every student in the batch by name.',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=70',
  },
]

/* Left list + right image; the active item switches automatically as
   the visitor scrolls through the section (Harrow-style). */
export default function Experience() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      if (total <= 0) return
      const progress = Math.min(Math.max(-rect.top / total, 0), 0.999)
      setActive(Math.floor(progress * ITEMS.length))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="experience" id="experience">
      <div
        className="experience__track"
        ref={trackRef}
        style={{ height: `${ITEMS.length * 100}vh` }}
      >
        <div className="experience__viewport">
          <div className="experience__left">
            <h2 className="experience__title">Experience Bhadri's Academy</h2>
            <p className="experience__lede">
              Marks are the result, not the method. Our method is attention,
              structure and care — applied consistently, batch after batch.
            </p>
            <div className="experience__list">
              {ITEMS.map((it, i) => (
                <div
                  key={it.label}
                  className={`experience__item ${i === active ? 'active' : ''}`}
                >
                  {it.label}
                </div>
              ))}
            </div>
          </div>

          <div className="experience__right">
            {ITEMS.map((it, i) => (
              <div
                key={it.label}
                className={`experience__img ${i === active ? 'active' : ''}`}
                style={{ backgroundImage: `url(${it.img})` }}
              />
            ))}
            <p className="experience__caption">{ITEMS[active].caption}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
