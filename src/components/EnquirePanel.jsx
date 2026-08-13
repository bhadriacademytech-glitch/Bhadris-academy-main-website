import { useState } from 'react'
import { SITE, waLink } from '../config.js'
import { useModal } from '../ModalContext.jsx'

export default function EnquirePanel() {
  const { enquiryOpen, setEnquiryOpen } = useModal()
  const [f, setF] = useState({ name: '', phone: '', grade: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const send = () => {
    const text = [
      "*Enquiry — Bhadri's Academy*",
      '',
      'Name: ' + (f.name || '-'),
      'Phone: ' + (f.phone || '-'),
      'Class: ' + (f.grade || '-'),
      'Message: ' + (f.message || '-'),
    ].join('\n')
    window.open(waLink(text), '_blank')
  }

  return (
    <>
      <button className="etab" onClick={() => setEnquiryOpen(true)}>
        Enquire Now
      </button>

      <div className={'epanel-wrap ' + (enquiryOpen ? 'open' : '')} aria-hidden={!enquiryOpen}>
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
                <option>Pre-Nursery / Nursery</option>
                <option>LKG / UKG</option>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={'Class ' + (i + 1)}>Class {i + 1}</option>
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

            {/* ── OR divider ── */}
            <div className="epanel__divider">
              <span>or</span>
            </div>

            {/* ── Call directly button ── */}
            <a href={'tel:+' + SITE.whatsappNumber} className="epanel__call">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call Directly Now
            </a>
            <p className="form__note" style={{ textAlign: 'center' }}>{SITE.phoneDisplay}</p>

          </div>
        </div>
      </div>
    </>
  )
}