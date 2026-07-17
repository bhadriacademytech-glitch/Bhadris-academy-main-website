import { PARENT_REELS } from '../config.js'
import Reel from './Reel.jsx'
import useReveal from './useReveal.js'

const REVIEWS = [
  {
    text: 'My daughter used to fear maths. Within one term her marks improved, but more than that — she started enjoying it. The teachers genuinely care.',
    name: 'Parent of a Class 7 student',
    meta: 'Mathematics · CBSE',
  },
  {
    text: 'The 10th board preparation was very systematic — weekly tests, revision plans and honest updates to us at every step. We always knew where our son stood.',
    name: 'Parent of a Class 10 student',
    meta: 'SSLC Board Prep',
  },
  {
    text: 'Small batches make all the difference. My son gets the attention he simply could not get in a big tuition centre. Highly recommended for young kids.',
    name: 'Parent of a Class 2 student',
    meta: 'Primary School',
  },
]

export default function Reviews() {
  useReveal()
  return (
    <section className="reviews on-dark" id="reviews">
      <div className="container">
        <h2 className="sec-title reveal">What Parents Say</h2>

        <div className="reviews__cards">
          {REVIEWS.map((r) => (
            <div className="rcard reveal" key={r.name}>
              <div className="rcard__stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="rcard__text">“{r.text}”</p>
              <div>
                <p className="rcard__name">{r.name}</p>
                <p className="rcard__meta">{r.meta}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reels">
          {PARENT_REELS.map((r) => <Reel key={r.tag} {...r} />)}
        </div>
      </div>
    </section>
  )
}
