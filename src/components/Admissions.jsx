import { SITE, waLink } from '../config.js'
import { useModal } from '../ModalContext.jsx'
import useReveal from './useReveal.js'

export default function Admissions() {
  useReveal()
  const { openApply, openVisit, setEnquiryOpen } = useModal()

  return (
    <section className="admissions" id="admissions">
      <div className="container admissions__grid">
        <div className="reveal">
          <h2 className="admissions__title">Admissions</h2>
          <p className="admissions__text">
            Bhadri's Academy welcomes students from Pre-Nursery to Class 10
            throughout the academic year. Start with a visit or a free demo
            class — then enrol with confidence.
          </p>
        </div>

        <div className="admissions__cards">
          <button className="adcard reveal" onClick={openApply}>
            <div
              className="adcard__img"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=70')" }}
            />
            <span className="adcard__bar adcard__bar--gold">
              Enrol Now
              <span className="sq-arrow" aria-hidden="true">→</span>
            </span>
          </button>

          <button className="adcard reveal" onClick={openVisit}>
            <div
              className="adcard__img"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=70')" }}
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
