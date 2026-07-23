import { useEffect, useState } from 'react'
import LegalDocument from './LegalDocument'
import * as privacy from './privacyContent'
import * as terms from './termsContent'
import './App.css'

const PAGES = {
  '/terms': { title: 'Terms & Conditions', doc: terms },
  '/': { title: 'Privacy Policy', doc: privacy },
}

const routeFromPath = () => (window.location.pathname === '/terms' ? '/terms' : '/')

function App() {
  const [route, setRoute] = useState(routeFromPath)

  useEffect(() => {
    const onPopState = () => setRoute(routeFromPath())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const page = PAGES[route]

  return (
    <LegalDocument
      title={page.title}
      intro={page.doc.intro}
      sections={page.doc.sections}
      contact={page.doc.contact}
    />
  )
}

export default App
