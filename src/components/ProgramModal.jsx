import { PROGRAMS } from './Learning.jsx'
import { useModal } from '../ModalContext.jsx'

export default function ProgramModal({ index }) {
  const { closeModal, openApply, setEnquiryOpen } = useModal()
  const p = PROGRAMS[index]
  if (!p) return null

  return (
    <div className="overlay" onClick={closeModal}>
      <div
        className="pmodal"
        role="dialog"
        aria-modal="true"
        aria-label={p.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-x" onClick={closeModal} aria-label="Close">✕</button>
        <div className="pmodal__banner" style={{ backgroundImage: `url(${p.img})` }}>
          <div className="pmodal__banner-text">
            <p className="pmodal__grades">{p.grades}</p>
            <h3 className="pmodal__title">{p.title}</h3>
          </div>
        </div>
        <div className="pmodal__body">
          <p className="pmodal__text">{p.text}</p>

          <p className="pmodal__h">Subjects Covered</p>
          <ul className="pmodal__chips">
            {p.subjects.map((s) => <li key={s}>{s}</li>)}
          </ul>

          <p className="pmodal__h">How This Batch Works</p>
          <ul className="pmodal__points">
            {p.points.map((pt) => <li key={pt}>{pt}</li>)}
          </ul>

          <div className="pmodal__cta">
            <button className="btn btn--navy" onClick={() => { closeModal(); openApply() }}>
              Enrol Now <span className="arrow">→</span>
            </button>
            <button className="btn" onClick={() => { closeModal(); setEnquiryOpen(true) }}>
              Ask a Question <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
