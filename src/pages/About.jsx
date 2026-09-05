import { Link } from 'react-router-dom'

const process = [
  { num: '01', title: 'Understand', desc: 'We start with a conversation about your business, your goals, and what "done" looks like for this project.' },
  { num: '02', title: 'Scope & quote', desc: "We recommend a package, confirm what's included, and agree a price before any work begins." },
  { num: '03', title: 'Design', desc: 'We design around your brand and content — not a generic template stretched to fit.' },
  { num: '04', title: 'Build', desc: 'Development happens in the open — you can see progress and give feedback as we go.' },
  { num: '05', title: 'Launch', desc: 'We test across devices, connect your domain, and take the project live.' },
  { num: '06', title: 'Support', desc: 'We stay reachable on WhatsApp for questions, small fixes and future updates.' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / About</div>
          <span className="hero-tag">About Tafsol Digital</span>
          <h1>Digital solutions for a brighter tomorrow.</h1>
          <p>We're a digital agency helping small and growing businesses build a professional online presence — through websites, marketing, branding and practical digital tools.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap about-grid">
          <div>
            <span className="kicker">Our story</span>
            <h2>Started to make good digital work reachable.</h2>
            <p>Tafsol Digital was built around a simple idea: businesses shouldn't need a big budget to get a website and online presence that actually works. We keep our packages clear, our pricing honest, and our process fast — so a small business can compete online without an enterprise price tag.</p>
            <p>Today we work across four connected disciplines — web development, digital marketing, branding and creative design, and custom digital solutions — for clients who want a partner they can reach directly, not a support ticket queue.</p>
          </div>
          <div className="hero-visual" style={{ padding: 44 }}>
            <img src="/assets/logo-500.png" alt="Tafsol Digital emblem" style={{ maxWidth: 220 }} />
            <div className="visual-caption">DIGITAL SOLUTIONS FOR A BRIGHTER TOMORROW</div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="kicker">How we work</span>
              <h2>A clear process from first message to launch.</h2>
            </div>
            <p>Every project moves through the same sequence, so you always know what's happening next.</p>
          </div>
          <div className="process-list">
            {process.map((item) => (
              <div className="process-item" key={item.num}>
                <span className="process-num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Let's build something together.</h2>
              <p>Tell us about your business and where you'd like to grow.</p>
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
