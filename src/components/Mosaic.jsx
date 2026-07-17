import useReveal from './useReveal.js'

const TILES = [
  { type: 'navy', num: '2', label: 'Branches across Bengaluru' },
  { type: 'white', num: '5+', label: 'Years serving students and families' },
  { type: 'blue', num: '2400', small: 'sqft', label: 'Of clean, well-equipped learning space' },
  { type: 'gold', num: '3', label: 'Boards supported — State · CBSE · ICSE' },
  {
    type: 'photo',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=70',
    label: 'Qualified, Caring Faculty',
  },
  { type: 'white', num: '1:10', label: 'Teacher-to-student ratio in every batch' },
]

export default function Mosaic() {
  useReveal()
  return (
    <section className="mosaic">
      <div className="container">
        <h2 className="sec-title reveal">Bhadri's Academy, Bengaluru</h2>

        <div className="mosaic__grid">
          <div className="mosaic__tiles reveal">
            {TILES.map((t, i) =>
              t.type === 'photo' ? (
                <div key={i} className="tile tile--photo" style={{ backgroundImage: `url(${t.img})` }}>
                  <span>{t.label}</span>
                </div>
              ) : (
                <div key={i} className={`tile tile--${t.type}`}>
                  <p className="tile__num">
                    {t.num}
                    {t.small && <small>{t.small}</small>}
                  </p>
                  <div className="tile__rule" aria-hidden="true" />
                  <p className="tile__label">{t.label}</p>
                </div>
              ),
            )}
          </div>

          <div className="mosaic__photo reveal">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=70"
              alt="Students learning at Bhadri's Academy"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
