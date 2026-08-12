import { useState } from 'react'
import { SITE } from '../config.js'
import { useModal } from '../ModalContext.jsx'

const STEP_LABELS = ['Student', 'Parent', 'Preferences']

const INIT = {
  studentName: '', dob: '', gender: '',
  applyClass: '', board: '', currentSchool: '', prevMarks: '',
  parentName: '', relation: '', phone: '', altPhone: '',
  email: '', area: '', branch: '', heard: '', message: '',
}

const REQUIRED = {
  0: ['studentName', 'dob', 'gender', 'applyClass', 'board'],
  1: ['parentName', 'relation', 'phone', 'email'],
  2: [],
}

export default function ApplicationModal() {
  const { closeModal } = useModal()
  const [step, setStep] = useState(0)
  const [f, setF] = useState(INIT)
  const [errors, setErrors] = useState({})

  const set = (k) => (e) => setF((prev) => ({ ...prev, [k]: e.target.value }))

  const blur = (k) => () => {
    if (REQUIRED[step]?.includes(k) && !f[k].trim()) {
      setErrors((prev) => ({ ...prev, [k]: true }))
    } else {
      setErrors((prev) => ({ ...prev, [k]: false }))
    }
  }

  const err = (k) => errors[k]

  const canNext = () => REQUIRED[step].every((k) => f[k].trim())

  const next = () => {
    const e = {}
    REQUIRED[step].forEach((k) => { if (!f[k].trim()) e[k] = true })
    setErrors(e)
    if (Object.keys(e).length === 0) setStep((s) => s + 1)
  }

  const submit = () => {
    const lines = [
      "🎓 *New Admission — Bhadri's Academy*",
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      '',
      '*STUDENT*',
      'Name: ' + f.studentName,
      'DOB: ' + f.dob,
      'Gender: ' + f.gender,
      'Class: ' + f.applyClass,
      'Board: ' + f.board,
      'Current School: ' + (f.currentSchool || '—'),
      'Previous Marks: ' + (f.prevMarks || '—'),
      '',
      '*PARENT / GUARDIAN*',
      'Name: ' + f.parentName,
      'Relation: ' + f.relation,
      'Phone: ' + f.phone,
      'Alt Phone: ' + (f.altPhone || '—'),
      'Email: ' + f.email,
      'Area: ' + (f.area || '—'),
      '',
      '*PREFERENCES*',
      'Branch: ' + (f.branch || '—'),
      'Heard via: ' + (f.heard || '—'),
      'Message: ' + (f.message || '—'),
      '',
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      'Sent from bhadrisacademy.in',
    ]
    window.open(
      'https://wa.me/' + SITE.whatsappNumber + '?text=' + encodeURIComponent(lines.join('\n')),
      '_blank',
    )
  }

  return (
    <div className="af">

      {/* ── Sticky Header ── */}
      <div className="af__header">
        <div className="af__header-inner container">
          <div className="af__brand">
            <img src="/logo.jpeg" alt="Bhadri's Academy" className="af__brand-logo" />
            <div>
              <p className="af__brand-name">Bhadri's Academy</p>
              <p className="af__brand-tag">Right Method + Right Results · Bengaluru</p>
            </div>
          </div>
          <div className="af__header-right">
            <div>
              <p className="af__eyebrow">Admissions {new Date().getFullYear()}</p>
              <h2 className="af__title">Application Form</h2>
            </div>
            <button className="af__close" onClick={closeModal} aria-label="Close">✕</button>
          </div>
        </div>

        {/* Step bar */}
        <div className="af__stepbar container">
          {STEP_LABELS.map((s, i) => (
            <div
              key={s}
              className={'af__step' + (i === step ? ' is-active' : '') + (i < step ? ' is-done' : '')}
            >
              <div className="af__step-circle">{i < step ? '✓' : i + 1}</div>
              <span className="af__step-name">{s}</span>
              {i < STEP_LABELS.length - 1 && <div className="af__step-line" />}
            </div>
          ))}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="af__body">
        <div className="container">
          <div className="af__card">

            {/* ══ STEP 1 — Student ══ */}
            {step === 0 && (
              <div>
                <div className="af__section-title">
                  <span className="af__section-num">01</span>
                  <div>
                    <h3>Student Details</h3>
                    <p>Tell us about the student applying</p>
                  </div>
                </div>

                <div className="af__row-2">
                  <div className={'af__field' + (err('studentName') ? ' af__field--err' : '')}>
                    <label className="af__label">
                      Student's Full Name <span className="af__req">*</span>
                      {err('studentName') && <span className="af__errmsg">Required</span>}
                    </label>
                    <input
                      className="af__input"
                      type="text"
                      value={f.studentName}
                      onChange={set('studentName')}
                      onBlur={blur('studentName')}
                      placeholder="Enter full name"
                    />
                  </div>
                  <div className={'af__field' + (err('dob') ? ' af__field--err' : '')}>
                    <label className="af__label">
                      Date of Birth <span className="af__req">*</span>
                      {err('dob') && <span className="af__errmsg">Required</span>}
                    </label>
                    <input
                      className="af__input"
                      type="date"
                      value={f.dob}
                      onChange={set('dob')}
                      onBlur={blur('dob')}
                    />
                  </div>
                </div>

                <div className="af__row-3">
                  <div className={'af__field' + (err('gender') ? ' af__field--err' : '')}>
                    <label className="af__label">
                      Gender <span className="af__req">*</span>
                      {err('gender') && <span className="af__errmsg">Required</span>}
                    </label>
                    <div className="af__select-wrap">
                      <select className="af__input af__select" value={f.gender} onChange={set('gender')} onBlur={blur('gender')}>
                        <option value="">Select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className={'af__field' + (err('applyClass') ? ' af__field--err' : '')}>
                    <label className="af__label">
                      Applying For Class <span className="af__req">*</span>
                      {err('applyClass') && <span className="af__errmsg">Required</span>}
                    </label>
                    <div className="af__select-wrap">
                      <select className="af__input af__select" value={f.applyClass} onChange={set('applyClass')} onBlur={blur('applyClass')}>
                        <option value="">Select class</option>
                        <option>Pre-Nursery</option>
                        <option>Nursery</option>
                        <option>LKG</option>
                        <option>UKG</option>
                        {Array.from({ length: 10 }, (_, i) => (
                          <option key={i}>Class {i + 1}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={'af__field' + (err('board') ? ' af__field--err' : '')}>
                    <label className="af__label">
                      Board <span className="af__req">*</span>
                      {err('board') && <span className="af__errmsg">Required</span>}
                    </label>
                    <div className="af__select-wrap">
                      <select className="af__input af__select" value={f.board} onChange={set('board')} onBlur={blur('board')}>
                        <option value="">Select board</option>
                        <option>State Board</option>
                        <option>CBSE</option>
                        <option>ICSE</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="af__row-2">
                  <div className="af__field">
                    
                    <label className="af__label">
                      Current School <span className="af__req">*</span>
                      {err('Current School') && <span className="af__errmsg">Required</span>}
                    </label>
                    <input
                      className="af__input"
                      type="text"
                      value={f.currentSchool}
                      onChange={set('currentSchool')}
                      placeholder="Name of current school"
                    />
                  </div>
                  <div className="af__field">
                    <label className="af__label">Previous Year Marks / Grade</label>
                    <input
                      className="af__input"
                      type="text"
                      value={f.prevMarks}
                      onChange={set('prevMarks')}
                      placeholder="e.g. 85% or Grade A"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ══ STEP 2 — Parent ══ */}
            {step === 1 && (
              <div>
                <div className="af__section-title">
                  <span className="af__section-num">02</span>
                  <div>
                    <h3>Parent / Guardian Details</h3>
                    <p>We will contact you on these details</p>
                  </div>
                </div>

                <div className="af__row-2">
                  <div className={'af__field' + (err('parentName') ? ' af__field--err' : '')}>
                    <label className="af__label">
                      Parent / Guardian Name <span className="af__req">*</span>
                      {err('parentName') && <span className="af__errmsg">Required</span>}
                    </label>
                    <input
                      className="af__input"
                      type="text"
                      value={f.parentName}
                      onChange={set('parentName')}
                      onBlur={blur('parentName')}
                      placeholder="Full name"
                    />
                  </div>

                  <div className={'af__field' + (err('relation') ? ' af__field--err' : '')}>
                    <label className="af__label">
                      Relationship to Student <span className="af__req">*</span>
                      {err('relation') && <span className="af__errmsg">Required</span>}
                    </label>
                    <div className="af__select-wrap">
                      <select className="af__input af__select" value={f.relation} onChange={set('relation')} onBlur={blur('relation')}>
                        <option value="">Select</option>
                        <option>Father</option>
                        <option>Mother</option>
                        <option>Guardian</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="af__row-2">
                  <div className={'af__field' + (err('phone') ? ' af__field--err' : '')}>
                    <label className="af__label">
                      Primary Phone Number <span className="af__req">*</span>
                      {err('phone') && <span className="af__errmsg">Required</span>}
                    </label>
                    <input
                      className="af__input"
                      type="tel"
                      value={f.phone}
                      onChange={set('phone')}
                      onBlur={blur('phone')}
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div className="af__field">
                    <label className="af__label">Alternate Phone Number</label>
                    <input
                      className="af__input"
                      type="tel"
                      value={f.altPhone}
                      onChange={set('altPhone')}
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div className="af__row-2">
                  <div className={'af__field' + (err('email') ? ' af__field--err' : '')}>
                    <label className="af__label">
                      Email Address <span className="af__req">*</span>
                      {err('email') && <span className="af__errmsg">Required</span>}
                    </label>
                    <input
                      className="af__input"
                      type="email"
                      value={f.email}
                      onChange={set('email')}
                      onBlur={blur('email')}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="af__field">
                    <label className="af__label">Area / Locality in Bengaluru</label>
                    <input
                      className="af__input"
                      type="text"
                      value={f.area}
                      onChange={set('area')}
                      placeholder="Your area"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ══ STEP 3 — Preferences ══ */}
            {step === 2 && (
              <div>
                <div className="af__section-title">
                  <span className="af__section-num">03</span>
                  <div>
                    <h3>Preferences & Message</h3>
                    <p>A few final details — all optional</p>
                  </div>
                </div>

                <div className="af__row-2">
                  <div className="af__field">
                    <label className="af__label">
                      Preferred Branch <span className="af__req">*</span>
                      {err('Preferred Branc') && <span className="af__errmsg">Required</span>}
                    </label>
                    
                    <div className="af__select-wrap">
                      <select className="af__input af__select" value={f.branch} onChange={set('branch')}>
                        <option value="">Select branch</option>
                        <option>Building Strong Foundations</option>
                        <option>Branch 2 - Siddedahalli</option>
                      </select>
                    </div>
                  </div>
                  <div className="af__field">
                    <label className="af__label">How Did You Hear About Us?</label>
                    <div className="af__select-wrap">
                      <select className="af__input af__select" value={f.heard} onChange={set('heard')}>
                        <option value="">Select</option>
                        <option>Friends / Family</option>
                        <option>Google Search</option>
                        <option>Instagram</option>
                        <option>Facebook</option>
                        <option>YouTube</option>
                        <option>Walked Past the Academy</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="af__field">
                  <label className="af__label">Message / Additional Information</label>
                  <textarea
                    className="af__input af__textarea"
                    value={f.message}
                    onChange={set('message')}
                    placeholder="Subjects needed, preferred timings, learning needs..."
                  />
                </div>

                {/* Summary */}
                <div className="af__summary">
                  <p className="af__summary-title">Review Your Application</p>
                  <div className="af__summary-grid">
                    {[
                      { l: 'Student Name', v: f.studentName },
                      { l: 'Date of Birth', v: f.dob },
                      { l: 'Gender',        v: f.gender },
                      { l: 'Class',         v: f.applyClass },
                      { l: 'Board',         v: f.board },
                      { l: 'School',        v: f.currentSchool },
                      { l: 'Parent Name',   v: f.parentName },
                      { l: 'Relation',      v: f.relation },
                      { l: 'Phone',         v: f.phone },
                      { l: 'Email',         v: f.email },
                      { l: 'Area',          v: f.area },
                      { l: 'Branch',        v: f.branch },
                    ].map((item) => (
                      <div key={item.l} className="af__summary-item">
                        <span className="af__summary-label">{item.l}</span>
                        <span className="af__summary-value">{item.v || '—'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── Nav ── */}
            <div className="af__nav">
              {step > 0
                ? <button className="af__btn-back" onClick={() => setStep((s) => s - 1)}>← Back</button>
                : <span />
              }
              <div className="af__nav-right">
                <span className="af__step-count">Step {step + 1} of {STEP_LABELS.length}</span>
                {step < STEP_LABELS.length - 1
                  ? <button className="af__btn-next" onClick={next}>Next Step →</button>
                  : <button className="af__btn-submit" onClick={submit}>Submit on WhatsApp →</button>
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}