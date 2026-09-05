import { Link } from 'react-router-dom'

const projects = [
  {
    url: 'forno-pizza-murex.vercel.app',
    href: 'https://forno-pizza-murex.vercel.app/',
    glyph: 'Forno Pizza',
    tag: 'Web App · Food & Ordering',
    title: 'Forno Pizza',
    desc: 'An online ordering experience for a pizzeria brand, built around a fast menu browser and a clean, distraction-free checkout flow.',
  },
  {
    url: 'comic-website-react.vercel.app',
    href: 'https://comic-website-react.vercel.app/',
    glyph: 'Comic Reader',
    tag: 'Web App · Media',
    title: 'Comic Reader',
    desc: 'A React-powered comic browsing app with a library view and an in-browser reader for individual issues.',
  },
  {
    url: 'maintainiq-frontend-alpha.vercel.app/login',
    href: 'https://maintainiq-frontend-alpha.vercel.app/login',
    glyph: 'MaintainIQ',
    tag: 'Web Platform · SaaS',
    title: 'MaintainIQ',
    desc: 'A maintenance-management platform for tracking assets, work orders and teams, with a secure login and dashboard.',
  },
  {
    url: 'jobs-portal-react.vercel.app',
    href: 'https://jobs-portal-react.vercel.app/',
    glyph: 'Jobs Portal',
    tag: 'Web App · Recruitment',
    title: 'Jobs Portal',
    desc: 'A job-listing and application platform built in React, with search, filtering and a straightforward application flow.',
  },
]

export default function Work() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / Work</div>
          <span className="hero-tag">Selected work</span>
          <h1>Built for real use, not just screenshots.</h1>
          <p>A look at recent websites and web applications from the studio. Every link below is a live, working build.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid-2">
            {projects.map((p) => (
              <div className="work-card" key={p.title}>
                <div className="browser-chrome">
                  <div className="dots"><span></span><span></span><span></span></div>
                  <div className="url">{p.url}</div>
                </div>
                <div className="work-preview"><span className="glyph">{p.glyph}</span></div>
                <div className="work-body">
                  <span className="work-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <a className="visit" href={p.href} target="_blank" rel="noopener">Visit live site →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Like what you see?</h2>
              <p>Let's talk about what a build like this would look like for your business.</p>
            </div>
            <div className="cta-actions">
              <a href="https://wa.me/923363820234" target="_blank" rel="noopener" className="btn btn-primary">Chat on WhatsApp</a>
              <Link to="/contact" className="btn btn-ghost">Send a message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
