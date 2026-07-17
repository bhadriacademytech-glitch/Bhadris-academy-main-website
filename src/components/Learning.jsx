import { useState } from 'react'
import { useModal } from '../ModalContext.jsx'
import useReveal from './useReveal.js'

export const PROGRAMS = [
  
  {
    grades: 'Class 1 – Class 5',
    title: 'Primary School',
    short: 'Strong reading, writing and number skills — the foundation years handled with structure and care.',
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
    grades: 'Class 5 – Class 10',
    title: 'Middle & High School',
    short: 'Concept mastery through to board exams — SSLC, CBSE and ICSE preparation with structure and discipline.',
    text: 'From Class 5 the syllabus deepens, and by Classes 9 and 10 every mark matters. Our senior batches move from concept mastery to full board preparation — chapter-wise tests, previous-year papers, revision cycles and mock boards that build real exam temperament.',
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

          {/* Background images */}
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

          {/* Left body text */}
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

          {/* Thumbnail strip */}
          <div className="learning__thumbs">
            {PROGRAMS.map((p, i) => (
              <button
                key={p.title}
                className={'lthumb ' + (i === featured ? 'active' : '')}
                onClick={() => i === featured ? openProgram(i) : setFeatured(i)}
              >
                <div
                  className="lthumb__img"
                  style={{ backgroundImage: 'url(' + p.img + ')' }}
                />
                <div className="lthumb__label">
                  <div className="lthumb__label-content">
                    <span className="lthumb__label-text">{p.title}</span>
                    <span className="lthumb__label-grades">{p.grades}</span>
                  </div>
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