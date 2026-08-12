import { useEffect, useRef, useState } from 'react'

const ITEMS = [
  {
    label: 'Beyond Learning',
    
    img: 'https://res.cloudinary.com/pcgf67hy/image/upload/v1785495383/IMG_2326_zhsmgn.jpg',
  },
  {
    label: 'Our Facilities',
    
    img: 'https://res.cloudinary.com/pcgf67hy/image/upload/v1786525009/IMG_2719_e3ftgh.jpg',
  },
  {
    label: 'Our Faculty',
    // caption: "Every teacher here is chosen for patience as much as subject mastery. A strict 1:12 ratio means they know each child's gaps by name, not by roll number.",
    img: 'https://res.cloudinary.com/pcgf67hy/image/upload/v1786525228/IMG_2718_b5mhpf.jpg',
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
              A structured approach to learning that builds strong foundations, academic discipline and measurable progress.

              Concept-focused teaching, individual attention, guided practice and continuous assessment help students strengthen understanding, address learning gaps and achieve consistent academic growth.
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
