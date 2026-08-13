import useReveal from './useReveal.js'

const opt = (url, w) => url.replace('/upload/', `/upload/f_auto,q_auto,w_${w}/`)

const PHOTO_URL = 'https://res.cloudinary.com/pcgf67hy/image/upload/v1786525400/IMG_2741_ad5xnu.jpg'

const TILES = [
  { type: 'navy', num: '2', label: 'Branches across Bengaluru' },
  { type: 'white', num: '5+', label: 'Years serving students and families' },
  { type: 'blue', num: '6:1', small: 'ratio', label: 'The 6:1 Programme is desgined For Students Who Require Closer Academic Support.' },
  { type: 'gold', num: '5', label: 'Boards supported   —State · CBSE · ICSE · IB · IGCSE' },
  {
    type: 'photo',
    img: PHOTO_URL,
    label: 'Qualified, Caring Faculty',
  },
  { type: 'white', num: '12:1', label: 'Teacher-to-student ratio in every batch' },
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
                <div key={i} className="tile tile--photo" style={{ backgroundImage: `url(${opt(t.img, 500)})` }}>
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
              src={opt(PHOTO_URL, 900)}
              alt="Students learning at Bhadri's Academy"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}