import { createContext, useContext, useEffect, useState } from 'react'

/* Central control for every popup on the site:
   modal: null | 'apply' | 'visit' | { program: index }
   enquiryOpen: right slide-in panel */
const Ctx = createContext(null)

export function ModalProvider({ children }) {
  const [modal, setModal] = useState(null)
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  const openApply = () => setModal('apply')
  const openVisit = () => setModal('visit')
  const openProgram = (i) => setModal({ program: i })
  const closeModal = () => setModal(null)

  useEffect(() => {
    const lock = modal !== null || enquiryOpen
    document.body.style.overflow = lock ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [modal, enquiryOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setModal(null)
        setEnquiryOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <Ctx.Provider
      value={{ modal, openApply, openVisit, openProgram, closeModal, enquiryOpen, setEnquiryOpen }}
    >
      {children}
    </Ctx.Provider>
  )
}

export const useModal = () => useContext(Ctx)
