import { GALLERY } from '../config.js'
import useReveal from './useReveal.js'

export default function Gallery() {
  useReveal()
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="sec-title reveal">Academy Gallery</h2>
        <p className="sec-lede reveal">
          Classrooms, boards, batches and little victories — glimpses of
          everyday life at Bhadri's Academy.
        </p>

        <div className="gallery__grid">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className={`gitem ${g.cls || ''} reveal`}
              style={{ backgroundImage: `url(${g.img})` }}
            >
              {g.label && <span>{g.label}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}