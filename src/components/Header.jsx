import { useEffect, useState } from 'react'
import { SITE } from '../config.js'
import { useModal } from '../ModalContext.jsx'

const LEFT = [
  { label: 'Home',       href: '#home' },
  { label: 'Learning',   href: '#learning' },
  { label: 'Admissions', href: '#admissions' },
]

const RIGHT = [
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery',    href: '#gallery' },
]

const LOGO_SRC = '/logo.jpeg'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { openApply } = useModal()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-drawer', handler)
    return () => window.removeEventListener('open-drawer', handler)
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">

            <nav className="header__nav header__nav--left" aria-label="Primary navigation">
              {LEFT.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </nav>

            <a href="#home" className="header__logo" aria-label={SITE.name}>
              {LOGO_SRC
                ? <img src={LOGO_SRC} alt={SITE.name} className="header__logo-img" />
                : (
                  <>
                    <div className="header__crest"><span>B</span></div>
                    <div className="header__name">Bhadri's<br />Academy</div>
                    <div className="header__tag">{SITE.tagline}</div>
                  </>
                )
              }
            </a>

            <nav className="header__nav header__nav--right" aria-label="Secondary navigation">
              {RIGHT.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
              <button className="nav-accent" onClick={openApply}>Enrol Now</button>
            </nav>

            <button className={'header__burger ' + (open ? 'open' : '')} onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <span /><span /><span />
            </button>

          </div>
        </div>
      </header>

      {open && (
        <div className="drawer open">
          <button className="drawer__close" onClick={close}>✕</button>
          {[...LEFT, ...RIGHT].map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <button onClick={() => { close(); openApply() }}>Enrol Now</button>
        </div>
      )}
    </>
  )
}