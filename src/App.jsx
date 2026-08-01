import { useEffect, useState } from 'react'
import LegalDocument from './LegalDocument'
import * as privacy from './privacyContent'
import * as terms from './termsContent'
import * as pickerPrivacy from './pickerPrivacyContent'
import * as pickerTerms from './pickerTermsContent'
import './App.css'

const PAGES = {
  '/terms': { title: 'Terms & Conditions', doc: terms },
  '/picker/privacy-policy': { title: 'Fixxly Picker — Workforce Privacy Notice', doc: pickerPrivacy },
  '/picker/terms-and-conditions': { title: 'Fixxly Picker — Authorised User Terms', doc: pickerTerms },
  '/': { title: 'Privacy Policy', doc: privacy },
}

const routeFromPath = () => (PAGES[window.location.pathname] ? window.location.pathname : '/')

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
