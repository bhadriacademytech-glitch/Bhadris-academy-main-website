import { SITE, waLink } from '../config.js'
import { useModal } from '../ModalContext.jsx'

function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function YtIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8z" />
      <polygon points="10 15 15.2 12 10 9" fill="white" />
    </svg>
  )
}

function LiIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

const ARIAR_URL = 'https://www.ariartech.com'
const WA_MSG = "Hi! I have a question about Bhadri's Academy."

export default function Footer() {
  const { openApply, openVisit } = useModal()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">

          <div className="footer__brand">
            <img src="/logo.jpeg" alt="Bhadri's Academy" className="footer__logo-img" />
            <p className="footer__brand-name">Bhadri's Academy</p>
            <p className="footer__brand-tag">Right Method + Right Results</p>
            <p className="footer__brand-city">Bengaluru</p>
            <div className="footer__socials">
              <a href="https://www.instagram.com/bhadris_academy/" target="_blank" rel="noreferrer" aria-label="Instagram" className="footer__social-icon"><IgIcon /></a>
              <a href="https://youtube.com/@bhadrisacademy" target="_blank" rel="noreferrer" aria-label="YouTube" className="footer__social-icon"><YtIcon /></a>
              <a href="https://linkedin.com/company/bhadrisacademy" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer__social-icon"><LiIcon /></a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact Us</h4>
            <address className="footer__addr">
              {SITE.address.map((line) => (
                <span key={line}>{line}<br /></span>
              ))}
            </address>
            <div className="footer__contacts">
              <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer">
                <span className="footer__contact-icon">✆</span>
                {SITE.phoneDisplay}
              </a>
              <a href={'mailto:' + SITE.email}>
                <span className="footer__contact-icon">✉</span>
                {SITE.email}
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Programmes</h4>
            <ul className="footer__links">
              <li><a href="#learning">Early Years (Pre-Nursery – 1)</a></li>
              <li><a href="#learning">Primary School (1 – 5)</a></li>
              <li><a href="#learning">Middle School (5 – 8)</a></li>
              <li><a href="#learning">Board Prep (9 – 10)</a></li>
              <li><a href="#experience">Experience the Academy</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li><button onClick={openApply}>Enrol Now</button></li>
              <li><button onClick={openVisit}>Request a Visit</button></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#founder">About Us</a></li>
              <li><a href="#reviews">Parent Reviews</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer__ariar">
        <div className="container">
          <p className="footer__ariar-text">
            Design & Maintained by{' '}
            <a href={ARIAR_URL} target="_blank" rel="noreferrer" className="footer__ariar-link">
              Ariar Technology
            </a>
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <span className="footer__copy">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
        </div>
      </div>

    </footer>
  )
}