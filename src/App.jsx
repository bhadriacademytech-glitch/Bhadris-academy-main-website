import { ModalProvider, useModal } from './ModalContext.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Learning from './components/Learning.jsx'
import Admissions from './components/Admissions.jsx'
import Experience from './components/Experience.jsx'
import Mosaic from './components/Mosaic.jsx'
import Founder from './components/Founder.jsx'
import Gallery from './components/Gallery.jsx'
import Reviews from './components/Reviews.jsx'
import Footer from './components/Footer.jsx'
import EnquirePanel from './components/EnquirePanel.jsx'
import MobileBottomNav from './components/MobileBottomNav.jsx'
import ProgramModal from './components/ProgramModal.jsx'
import ApplicationModal from './components/ApplicationModal.jsx'
import VisitModal from './components/VisitModal.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import BackgroundLogo from './components/BackgroundLogo.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'

function Site() {
  const { modal } = useModal()
  return (
    <>
      <BackgroundLogo />
      <Header />
      <main>
        <Hero />
        <Learning />
        <Admissions />
        <Experience />
        <Mosaic />
        <Founder />
        <Gallery />
        <Reviews />
      </main>
      <Footer />
      <EnquirePanel />
      <MobileBottomNav />
      <WhatsAppFloat />

      {modal === 'apply'  && <ApplicationModal />}
      {modal === 'visit'  && <VisitModal />}
      {typeof modal === 'object' && modal !== null && <ProgramModal index={modal.program} />}
    </>
  )
}

export default function App() {
  // No router library — just check the URL path directly.
  const path = window.location.pathname

  if (path === '/privacy-policy') {
    return <PrivacyPolicy />
  }

  return (
    <ModalProvider>
      <Site />
    </ModalProvider>
  )
}