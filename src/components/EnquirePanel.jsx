import { useState } from 'react'
import { SITE } from '../config.js'
import { useModal } from '../ModalContext.jsx'

/* Gold vertical tab fixed to the right edge (always visible) +
   slide-in enquiry panel. Sends the enquiry to WhatsApp. */
export default function EnquirePanel() {
  const { enquiryOpen, setEnquiryOpen } = useModal()
  const [f, setF] = useState({ name: '', phone: '', grade: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const send = () => {
    const text = [
      "*Enquiry — Bhadri's Academy*",
      '',
      `Name: ${f.name || '-'}`,
      `Phone: ${f.phone || '-'}`,
      `Class: ${f.grade || '-'}`,
      `Message: ${f.message || '-'}`,
    ].join('\n')
    window.open(`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <>
      <button className="etab" onClick={() => setEnquiryOpen(true)}>
        Enquire Now
      </button>

      <div className={`epanel-wrap ${enquiryOpen ? 'open' : ''}`} aria-hidden={!enquiryOpen}>
        <div className="epanel-scrim" onClick={() => setEnquiryOpen(false)} />
        <div className="epanel" role="dialog" aria-modal="true" aria-label="Enquiry form">
          <button className="modal-x" onClick={() => setEnquiryOpen(false)} aria-label="Close">✕</button>
          <h3 className="epanel__title">Enquire Now</h3>
          <p className="epanel__sub">
            Tell us a little about your child — we reply on WhatsApp the same day.
          </p>

          <div className="form">
            <label>
              Your Name
              <input type="text" value={f.name} onChange={set('name')} placeholder="Parent's name" />
            </label>
            <label>
              Phone Number
              <input type="tel" value={f.phone} onChange={set('phone')} placeholder="Your contact number" />
            </label>
            <label>
              Student's Class
              <select value={f.grade} onChange={set('grade')}>
                <option value="">Select class</option>
                <option>Class 01 / Nursery</option>
                <option>LKG / UKG</option>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={`Class ${i + 1}`}>Class {i + 1}</option>
                ))}
              </select>
            </label>
            <label>
              Message
              <textarea value={f.message} onChange={set('message')} placeholder="Subjects needed, preferred timings…" />
            </label>
            <button type="button" className="btn btn--navy" onClick={send}>
              Send on WhatsApp <span className="arrow">→</span>
            </button>
            <p className="form__note">Opens WhatsApp with your enquiry pre-filled — just press send.</p>
          </div>
        </div>
      </div>
    </>
  )
}
