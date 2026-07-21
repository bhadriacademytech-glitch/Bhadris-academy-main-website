import useReveal from './useReveal.js'

const WHY = [
  {
    num: '01',
    title: 'Identification & Achievement',
    text: 'We identify each student\'s strengths, weaknesses and learning gaps from day one — then build a clear path to achievement. No child is treated as average.',
  },
  {
    num: '02',
    title: 'Personalised Learning System',
    text: 'Every student gets a learning plan tailored to their pace, board and subject needs. One size never fits all — and we never pretend it does.',
  },
  {
    num: '03',
    title: 'Small Batch — 10:1 Ratio',
    text: 'A strict 10-student maximum per batch means every child gets direct attention from the teacher every single session. No hiding, no falling behind.',
  },
  {
    num: '04',
    title: 'Result-Oriented Teaching',
    text: 'Chapter-wise tests, revision cycles, previous-year papers and mock boards — everything we do is structured to translate understanding into marks.',
  },
  {
    num: '05',
    title: 'Communication Skill Development',
    text: 'We build confident speakers and clear writers alongside academics — because a child who can express themselves will always have an advantage.',
  },
  {
    num: '06',
    title: 'Honest Progress Reports',
    text: 'Regular updates, real feedback and no sugar-coating. Parents who know exactly where their child stands can actually help them grow.',
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
              Bhadri's Academy started in Bengaluru with a single classroom
              and a clear purpose: give every child the kind of focused,
              personal attention that big tuition centres simply cannot.
            </p>
            <p className="about__para">
              Five years and two branches later, that purpose has not changed.
              From Pre-Nursery to Class 10 — State Board, CBSE and ICSE — we
              sit beside every child, understand where they are struggling
              and work with them until they are not.
            </p>
            <p className="about__para">
              The families who trust us do so because they see real progress —
              not just in marks, but in confidence, in discipline and in the
              way their child talks about studying.
            </p>
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