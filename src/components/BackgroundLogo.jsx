import '../styles/BackgroundLogo.css'

const logo = '/logo.jpeg' // served directly from the public/ folder

/**
 * Fixed background layer: rotating scribble ring + faded logo.
 * Sits behind ALL page content, visible on scroll from Learning section
 * down to the Footer (Hero has its own video bg so it won't show there).
 *
 * Mount ONCE in App.jsx, above <Header />.
 */
export default function BackgroundLogo() {
  return (
    <div className="bg-logo-layer" aria-hidden="true">
      <div className="bg-logo-inner">
        <svg viewBox="0 0 400 400" className="bg-logo-ring">
          <path
            d="M200,40
               C300,40 360,110 355,190
               C350,270 290,330 210,345
               C130,360 60,320 45,250
               C30,180 70,100 150,55
               C170,45 185,42 200,40 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        <img src={logo} alt="" className="bg-logo-img" />
      </div>
    </div>
  )
}