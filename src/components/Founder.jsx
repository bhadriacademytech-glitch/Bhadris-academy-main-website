import useReveal from './useReveal.js'

const WHY = [
  {
    num: '01',
    title: 'Identification & Achievement',
    text: 'We identify each student’s strengths, learning gaps and individual learning needs from day one, creating a clear and structured path for academic growth. Every student receives focused attention and purposeful support.',
  },
  {
    num: '02',
    title: 'Personalised Learning System',
    text: "Learning plans are tailored to each student’s pace, academic level, board and subject requirements. Our approach adapts to the learner rather than relying on a one-size-fits-all method.",
  },
  {
    num: '03',
    title: 'Small Batch — 12:1 Ratio',
    text: 'With a maximum of 12 students per batch, every learner receives individual attention, regular questioning and timely correction. Every student is actively engaged throughout the session.',
  },
  {
    num: '04',
    title: 'Result-Oriented Teaching',
    text: "Concept learning is reinforced through chapter tests, revision cycles, previous-year papers and mock examinations. Every stage is designed to strengthen understanding and improve academic performance.",
  },
  {
    num: '05',
    title: 'Communication Skill Development',
    text: "Students are encouraged to understand, articulate and write in their own words rather than rely on memorisation. We build the confidence and clarity needed to communicate knowledge effectively.",
  },
  {
    num: '06',
    title: 'Honest Progress Reports',
    text: "Regular progress updates provide clear, constructive and transparent feedback. Parents gain an accurate understanding of their child’s performance, strengths and areas requiring improvement.",
  },
]

export default function Founder() {
  useReveal()

  return (
    <section className="founder" id="founder">
      <div className="container">

        {/* ── Top split ── */}
        <div className="about__top reveal">

          <div className="about__story">
            <h2 className="about__big-title">About Bhadri's Academy</h2>
            <p className="about__para">
              Bhadri's Academy began in Bengaluru with one classroom. Our purpose is twofold, and we state it plainly.

            </p>
            <p className="about__para">
              Every child improves, every day.Whatever a child's starting point — struggling, average or ahead — there must be visible improvement each day, in every aspect that matters: understanding, confidence, discipline and expression.
            </p>
            <p className="about__para">
              We raise our standard every year. Year on year, we strengthen how we teach, until Bhadri's Academy is recognised not only in Bengaluru but globally.

            </p>

            <p>Five years and two branches later, both hold. Pre-Nursery to Class 10 — State Board, CBSE, ICSE, IB, IGCSE. We find where a child's understanding breaks, and stay until it holds.</p>

            
            
            <div className="about__tag-row">
              <span className="about__tag">Bengaluru</span>
              <span className="about__tag">2 Branches</span>
              <span className="about__tag">5+ Years</span>
              <span className="about__tag">Pre-Nursery – Class 10</span>
            </div>
          </div>



        </div>

        {/* ── Divider ── */}
        <div className="about__divider reveal">
          <span>Why Bhadri's Academy</span>
        </div>

        {/* ── Why cards ── */}
        <div className="about__why">
          {WHY.map((w) => (
            <div className="about__why-card reveal" key={w.num}>
              <span className="about__why-num">{w.num}</span>
              <div className="about__why-body">
                <h3 className="about__why-title">{w.title}</h3>
                <p className="about__why-text">{w.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA strip ── */}
        <div className="about__cta reveal">
          <div className="about__cta-text">
            <h3 className="about__cta-title">Come See It for Yourself</h3>
            <p className="about__cta-sub">
              Book a free demo class — no commitment, no pressure.
              Just bring your child and let the teaching speak.
            </p>
          </div>
          <a href="#admissions" className="btn btn--solid">
            Book a Free Demo <span className="arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}