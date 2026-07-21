import { SITE } from '../config.js'
import { useModal } from '../ModalContext.jsx'

export default function Hero() {
  const { openApply, setEnquiryOpen } = useModal()

  return (
    <section className="hero" id="home">

      <div className="hero__media" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="auto">
          <source src={SITE.heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__content">
        <h1 className="hero__title">
          Strong Foundations <em>for</em> Bright Futures
        </h1>
        <p className="hero__sub">
          Personalised tuition from Pre-Nursery to 10th Standard — small
          batches, caring teachers and steady results.
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