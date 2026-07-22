import { useState } from 'react'
import { useModal } from '../ModalContext.jsx'
import useReveal from './useReveal.js'

export const PROGRAMS = [
  {
    grades: 'Pre-Nursery – Class 1',
    title: 'Early Years',
    label: 'Early Years (Pre-Nursery – 1)',
    short: 'A gentle, joyful start — phonics, numbers and confidence built through play and patient attention.',
    text: 'The earliest years decide how a child feels about learning for life. Our Early Years batches keep things warm, playful and unhurried — children learn phonics, early reading, writing readiness and number sense through activities, rhymes and games, never pressure.',
    subjects: ['Phonics & Reading', 'Writing Readiness', 'Numbers', 'Rhymes & Activities'],
    points: [
      'Very small groups with individual attention',
      'Play-based, activity-led sessions',
      'Gentle school-readiness preparation',
      'Regular updates to parents',
    ],
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=70',
    color: '#c6a75e',
  },
  {
    grades: 'Class 1 – Class 5',
    title: 'Primary School',
    label: 'Primary School (1 – 5)',
    short: "Reading, writing and numbers become real skills here — steady practice, regular tests, and a teacher who notices the moment a concept hasn't clicked.",
    text: 'Classes 1 to 5 are where foundations are laid — and where gaps begin if no one is watching. We build strong reading, clear handwriting, confident maths and steady study habits, with homework support so learning never piles up.',
    subjects: ['English', 'Mathematics', 'EVS / Science', 'Kannada · Hindi'],
    points: [
      'Daily homework and revision support',
      'Concept-first teaching, not rote memorising',
      'Weekly practice tests with feedback',
      'Honest progress reports to parents',
    ],
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=70',
    color: '#2e6fb7',
  },
  {
    grades: 'Class 5 – Class 8',
    title: 'Middle School',
    label: 'Middle School (5 – 8)',
    short: "Subjects get harder and habits matter more. We build the structure — organised notes, regular revision, steady practice — that carries a child through the toughest years of school.",
    text: 'From Class 5 the syllabus deepens. Chapter-wise tests, revision cycles and a clear study plan keep every student on track.',
    subjects: ['Mathematics', 'Science', 'Social Science', 'English'],
    points: [
      'Chapter-wise tests and revision cycles',
      'Concept-first teaching approach',
      'Homework and doubt-clearing support',
      'Regular progress updates to parents',
    ],
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=70',
    color: '#1a3a6b',
  },
  {
    grades: 'Class 9 – Class 10',
    title: 'Board Prep',
    label: 'Board Prep (9 – 10)',
    short: "This is where marks are made. Chapter-wise tests, mock boards, previous-year papers and a clear revision plan — everything aimed at walking into the exam hall ready.",
    text: 'Classes 9 and 10 every mark matters. Our senior batches focus on full board preparation — chapter-wise tests, previous-year papers, revision cycles and mock boards that build real exam temperament.',
    subjects: ['Mathematics', 'Science', 'Social Science', 'English'],
    points: [
      'SSLC · CBSE · ICSE board preparation',
      'Chapter-wise tests and mock board exams',
      'Previous-year paper practice',
      'Dedicated doubt-clearing sessions',
    ],
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=70',
    color: '#14264b',
  },
]

export default function Learning() {
  useReveal()
  const { openProgram } = useModal()
  const [featured, setFeatured] = useState(0)
  const f = PROGRAMS[featured]

  return (
    <section className="learning" id="learning">
      <div className="container">
        <h2 className="sec-title reveal">Learning</h2>
        <p className="sec-lede reveal">
          Every stage of school asks something different of a child. Our
          batches are organised by age and class so teaching, pace and
          practice always match where your child is today.
        </p>

        <div className="learning__feature reveal">

          {PROGRAMS.map((p, i) => (
            <div
              key={p.title}
              className="learning__feature-img"
              style={{
                backgroundImage: 'url(' + p.img + ')',
                opacity: i === featured ? 1 : 0,
              }}
            />
          ))}

          <div className="learning__feature-body">
            <p className="learning__feature-grades">{f.grades}</p>
            <h3 className="learning__feature-title">{f.title}</h3>
            <p className="learning__feature-text">{f.short}</p>
            <button
              className="sq-arrow"
              aria-label={'Learn more about ' + f.title}
              onClick={() => openProgram(featured)}
            >
              →
            </button>
          </div>

          <div className="learning__thumbs">
            {PROGRAMS.map((p, i) => (
              <button
                key={p.title}
                className={'lthumb ' + (i === featured ? 'active' : '')}
                onClick={() => i === featured ? openProgram(i) : setFeatured(i)}
              >
                <div className="lthumb__img" style={{ backgroundImage: 'url(' + p.img + ')' }} />
                <div className="lthumb__label">
                  <span className="lthumb__label-text">{p.label}</span>
                  <span className="lthumb__arrow">→</span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}