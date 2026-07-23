import './App.css'

const LINK_RE = /(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g

// Turn bare emails and URLs inside policy text into clickable links.
function linkify(text) {
  return text.split(LINK_RE).map((part, i) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a key={i} href={part} target="_blank" rel="noreferrer">
          {part}
        </a>
      )
    }
    if (part.includes('@') && LINK_RE.test(part)) {
      return (
        <a key={i} href={`mailto:${part}`}>
          {part}
        </a>
      )
    }
    return part
  })
}

function Block({ block }) {
  if (block.sub) return <h3>{block.sub}</h3>
  if (block.p) return <p>{linkify(block.p)}</p>
  if (block.ul)
    return (
      <ul>
        {block.ul.map((item, i) => (
          <li key={i}>{linkify(item)}</li>
        ))}
      </ul>
    )
  return null
}

function LegalDocument({ title, intro, sections, contact }) {
  return (
    <main className="policy">
      <header className="policy-header">
        <h1>{title}</h1>
      </header>

      {intro.map((block, i) => (
        <Block key={i} block={block} />
      ))}

      {sections.map((section) => (
        <section key={section.h}>
          <h2>{section.h}</h2>
          {section.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </section>
      ))}

      <hr />

      <section className="contact">
        <h2>Contact</h2>
        <p>{contact.company}</p>
        <p>{contact.address}</p>
        <p>
          Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <p>
          Website:{' '}
          <a href={contact.website} target="_blank" rel="noreferrer">
            {contact.website}
          </a>
        </p>
      </section>
    </main>
  )
}

export default LegalDocument
