import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/* ── Individual section stylesheets ── */
import './styles/variables.css'
import './styles/header.css'
import './styles/mobile-nav.css'
import './styles/hero.css'
import './styles/learning.css'
import './styles/admissions.css'
import './styles/experience.css'
import './styles/mosaic.css'
import './styles/founder.css'
import './styles/gallery.css'
import './styles/reviews.css'
import './styles/footer.css'
import './styles/enquire.css'
import './styles/utils.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)