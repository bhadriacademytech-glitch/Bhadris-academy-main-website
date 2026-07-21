import { useState } from 'react'
import { SITE } from '../config.js'
import { useModal } from '../ModalContext.jsx'

const SLOTS = [
  'Weekdays · 10:00 AM – 12:00 PM',
  'Weekdays · 4:00 PM – 6:00 PM',
  'Weekdays · 6:00 PM – 8:00 PM',
  'Saturday · 10:00 AM – 1:00 PM',
  'Sunday · 10:00 AM – 12:00 PM',
]

const PURPOSES = [
  'Admission enquiry',
  'Free demo class',
  'Meet the faculty',
  'See the classrooms',
  'Other',
]

/* Small parent form for booking a visit. */
export default function VisitModal() {
  const { closeModal } = useModal()
  const [f, setF] = useState({ name: '', phone: '', grade: '', slot: '', purpose: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const submit = () => {
    const text = [
      "*Visit Request — Bhadri's Academy*",
      '',
      `Parent's Name: ${f.name || '-'}`,
      `Contact: ${f.phone || '-'}`,
      `Student's Class: ${f.grade || '-'}`,
      `Preferred Slot: ${f.slot || '-'}`,
      `Purpose: ${f.purpose || '-'}`,
    ].join('\n')
    window.open(`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="overlay" onClick={closeModal}>
      <div
        className="vmodal"
        role="dialog"
        aria-modal="true"
        aria-label="Request a visit"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-x" onClick={closeModal} aria-label="Close">✕</button>
        <h3 className="vmodal__title">Request a Visit</h3>
        <p className="vmodal__sub">
          Come see the classrooms, meet the teachers and get every question
          answered. Pick a slot that works for you.
        </p>

        <div className="form">
          <label>
            Parent's Name
            <input type="text" value={f.name} onChange={set('name')} placeholder="Your full name" />
          </label>
          <label>
            Contact Number
            <input type="tel" value={f.phone} onChange={set('phone')} placeholder="Phone number" />
          </label>
          <label>
            Student's Class
            <select value={f.grade} onChange={set('grade')}>
              <option value="">Select class</option>
              <option>Pre-Nursery / Nursery</option>
              <option>LKG / UKG</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={`Class ${i + 1}`}>Class {i + 1}</option>
              ))}
            </select>
          </label>
          <label>
            Preferred Time Slot
            <select value={f.slot} onChange={set('slot')}>
              <option value="">Select a slot</option>
              {SLOTS.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
          <label>
            Purpose of Visit
            <select value={f.purpose} onChange={set('purpose')}>
              <option value="">Select purpose</option>
              {PURPOSES.map((p) => <option key={p}>{p}</option>)}
            </select>
          </label>

          <button type="button" className="btn btn--navy" onClick={submit}>
            Request Visit <span className="arrow">→</span>
          </button>
          <p className="form__note">Opens WhatsApp with your request pre-filled — just press send.</p>
        </div>
      </div>
    </div>
  )
}
