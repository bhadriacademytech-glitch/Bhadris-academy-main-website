import { SITE, waLink } from '../config.js'
import { useModal } from '../ModalContext.jsx'
import useReveal from './useReveal.js'

const opt = (url, w) => url.replace('/upload/', `/upload/f_auto,q_auto,w_${w}/`)

export default function Admissions() {
  useReveal()
  const { openApply, openVisit, setEnquiryOpen } = useModal()

  return (
    <section className="admissions" id="admissions">
      <div className="container admissions__grid">
        <div className="reveal">
          <h2 className="admissions__title">Admissions</h2>
          <p className="admissions__subtitle">Academic Year 2026–27</p>
          <p className="admissions__text">
            Bhadri's Academy welcomes students from Pre-Nursery to Class 10
            with structured academic programmes designed around each stage
            of learning. Our admissions process is designed to understand
            the student's academic needs, identify the appropriate
            programme and ensure a strong start to their learning journey.
          </p>
        </div>

        <div className="admissions__cards">
          <button className="adcard reveal" onClick={openApply}>
            <div
              className="adcard__img"
              style={{ backgroundImage: `url('${opt('https://res.cloudinary.com/pcgf67hy/image/upload/v1786601859/ChatGPT_Image_Aug_12_2026_at_07_49_46_PM_fuzbvf.png', 800)}')` }}
            />
            <span className="adcard__bar adcard__bar--gold">
              Enrol Now
              <span className="sq-arrow" aria-hidden="true">→</span>
            </span>
          </button>

          <button className="adcard reveal" onClick={openVisit}>
            <div
              className="adcard__img"
              style={{ backgroundImage: `url('${opt('https://res.cloudinary.com/pcgf67hy/image/upload/v1786603949/visti_rbdx74.jpg', 800)}')` }}
            />
            <span className="adcard__bar adcard__bar--blue">
              Request a Visit
              <span className="sq-arrow" aria-hidden="true">→</span>
            </span>
          </button>
        </div>

        <div className="admissions__aside reveal">
          <div className="admissions__rule" aria-hidden="true" />
          <div className="admissions__contact">
            <a href={`mailto:${SITE.email}`}>✉ {SITE.email}</a>
            <a href={waLink('Hi! I have a question about admissions at Bhadri\'s Academy.')} target="_blank" rel="noreferrer">
              ✆ {SITE.phoneDisplay}
            </a>
          </div>
          <p className="admissions__note">
            Not sure where to start? Send us a quick{' '}
            <button onClick={() => setEnquiryOpen(true)}>enquiry</button> and
            we'll guide you.
          </p>
          <div className="admissions__links">
            <button onClick={openApply}>Application Form</button>
            <button onClick={openVisit}>Book a Visit</button>
            <a href="#learning">Our Programmes</a>
            <a href="#reviews">Parent Reviews</a>
          </div>
        </div>
      </div>
    </section>
  )
}