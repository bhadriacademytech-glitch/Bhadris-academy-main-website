import { useState } from 'react'
import { useModal } from '../ModalContext.jsx'
import useReveal from './useReveal.js'

export const PROGRAMS = [
  {
    grades: 'Pre-Nursery – Class 1',
    title: 'Early Years',
    label: 'Early Years (Pre-Nursery – 1)',
    short: 'Building Learning Readiness Developing language, communication, early numeracy, motor skills, attention and positive learning habits.',
    text: 'The early years are where children develop their first learning habits. Our programme focuses on language development, phonics, early numeracy, motor coordination, attention and social confidence through age-appropriate, activity-based learning.',
    subjects: ['Language & Communication', 'Phonics & Pre-Reading', 'Early Numeracy', 'Pre-Writing & Motor Skills', 'Attention & Learning Habits'],
    points: [
      'Small-group learning with individual attention',
      'Activity-based and age-appropriate sessions',
      'Progressive school-readiness development',
      'Regular practice and reinforcement',
      'Parent progress updates',
    ],
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=70',
    color: '#c6a75e',
  },
  {
    grades: 'Class 1 – Class 5',
    title: 'Primary School',
    label: 'Primary School (1 – 5)',
    short: "Where foundational skills become lasting understanding — strengthening literacy, numeracy and conceptual clarity through purposeful practice, regular assessment and personalised academic support.",
    text: "Strong foundations determine future academic progress. Our Primary programme strengthens literacy, numeracy, conceptual understanding and effective study habits through structured teaching, regular practice and individual academic support.",
    subjects: ['English', 'Mathematics', 'EVS / Science','Social Studies', 'Kannada', ' Hindi'],
    points: [
      'Concept-based teaching and guided practice',
      'Daily homework and revision support',
      'Daily homework and revision support',
      'Individual attention to learning gaps',
      'Progress monitoring and parent updates',
    ],
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=70',
    color: '#2e6fb7',
  },
  {
    grades: 'Class 5 – Class 8',
    title: 'Middle School',
    label: 'Middle School (5 – 8)',
    short: "Strengthening Conceptual Understanding - Developing subject knowledge, analytical thinking, problem-solving, written expression and effective study habits through structured instruction, application-based practice and regular ",
    text: "A stage of deeper concepts, stronger reasoning and greater academic independence. Our programme develops conceptual clarity, subject application, problem-solving and disciplined study through structured teaching, regular assessment and targeted support.",
    subjects: ['English', 'Mathematics', 'EVS / Science','Social Studies', 'Kannada', ' Hindi'],
    points: [
      'Concept-focused teaching and application',
      'Chapter-wise practice and assessments',
      'Structured revision and study planning',
      'Homework and doubt-resolution support',
      'Individual progress monitoring',
      'Regular parent updates',
    ],
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=70',
    color: '#1a3a6b',
  },
  {
    grades: 'Class 9 – Class 10',
    title: 'Board Prepration',
    label: 'Board Prep (9 – 10)',
    short: "Developing examination readiness through complete syllabus coverage, conceptual mastery, application-based practice, answer-writing, structured revision and continuous assessment—enabling students to identify gaps, improve performance and approach board examinations with confidence.",
    text: "A structured board-preparation programme focused on conceptual mastery, application, answer-writing and examination readiness, with continuous assessment and targeted academic improvement.",
   subjects: ['English', 'Mathematics', 'EVS / Science','Social Studies', 'Kannada', ' Hindi'],
    points: [
      'Complete and structured syllabus coverage',
      'Conceptual and application-based learning',
      'Chapter-wise and cumulative assessments',
      'Mock examinations and performance analysis',
      'Previous-year and competency-based practice',
      'Targeted revision and doubt resolution',
      'Individual progress tracking',
      'Regular academic progress updates to parents',
      
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
  Learning That Builds Understanding, Confidence, and Progress.
  Every learner is different, Our teaching adapts to where they are today — and prepares them for what comes next.
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