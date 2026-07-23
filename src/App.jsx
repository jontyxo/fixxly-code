import { useEffect, useState } from 'react'
import LegalDocument from './LegalDocument'
import * as privacy from './privacyContent'
import * as terms from './termsContent'
import './App.css'

const PAGES = {
  privacy: { label: 'Privacy Policy', title: 'Privacy Policy', doc: privacy },
  terms: { label: 'Terms & Conditions', title: 'Terms & Conditions', doc: terms },
}

const routeFromHash = () =>
  window.location.hash.replace('#/', '') in PAGES
    ? window.location.hash.replace('#/', '')
    : 'privacy'

function App() {
  const [route, setRoute] = useState(routeFromHash)

  useEffect(() => {
    const onHashChange = () => setRoute(routeFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const page = PAGES[route]

  return (
    <>
      <nav className="policy-nav">
        <div className="policy-nav-inner">
          {Object.entries(PAGES).map(([key, { label }]) => (
            <a
              key={key}
              href={`#/${key}`}
              className={key === route ? 'active' : undefined}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
      <LegalDocument
        title={page.title}
        intro={page.doc.intro}
        sections={page.doc.sections}
        contact={page.doc.contact}
      />
    </>
  )
}

export default App
