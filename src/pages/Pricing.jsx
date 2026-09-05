import { useState } from 'react'
import { Link } from 'react-router-dom'
import CheckIcon from '../components/CheckIcon.jsx'

const faqs = [
  {
    q: "What's included in the Rs 11,999 Standard package?",
    a: 'A responsive, up-to-4-page website with a working contact form, basic SEO, map integration, a free Vercel subdomain and SSL — everything a small business needs to have a professional presence online.',
  },
  {
    q: 'Why do Premium and Custom say "Call for Price"?',
    a: "Once a project needs a CMS, e-commerce or custom features, the right price depends on scope — number of pages, integrations and timeline. We'll give you an exact quote after a short conversation.",
  },
  {
    q: "Do I own the website after it's built?",
    a: "Yes. The domain, hosting and code are yours. We don't lock projects behind ongoing contracts.",
  },
  {
    q: 'How long does a Standard website take?',
    a: 'Most Standard builds are ready within 5–7 working days of receiving your content. Larger Premium and Custom builds are scoped with a clear timeline upfront.',
  },
  {
    q: 'Can I upgrade my package later?',
    a: 'Yes — a Standard site can be extended into a Premium or Custom build as your business grows, without starting over.',
  },
]

export default function Pricing() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / Pricing</div>
          <span className="hero-tag">Web Development packages</span>
          <h1>Flexible packages, matched to your budget.</h1>
          <p>Starting points, not fixed boxes — every project can be scoped further once we talk.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="pricing-grid">
            <div className="price-card">
              <h3>Standard Website</h3>
              <p className="price-sub">Perfect for small businesses and startups</p>
              <div className="price">Rs 11,999 <span className="unit">/ one-time</span></div>
              <ul className="price-list">
                <li><CheckIcon />Up to 4 pages</li>
                <li><CheckIcon />Basic contact form</li>
                <li><CheckIcon />Mobile responsive design</li>
                <li><CheckIcon />Basic SEO optimisation</li>
                <li><CheckIcon />Map integration</li>
                <li><CheckIcon />Free Vercel-provided subdomain</li>
                <li><CheckIcon />SSL certificate included</li>
              </ul>
              <a href="https://wa.me/923363820234" target="_blank" rel="noopener" className="btn btn-ghost btn-block">Get started</a>
            </div>

            <div className="price-card popular">
              <span className="popular-badge">Most popular</span>
              <h3>Premium Website</h3>
              <p className="price-sub">Ideal for growing businesses</p>
              <div className="price talk">Call for Price</div>
              <ul className="price-list">
                <li><CheckIcon />Everything in Standard, plus</li>
                <li><CheckIcon />8+ pages</li>
                <li><CheckIcon />Advanced SEO optimisation</li>
                <li><CheckIcon />CMS integration</li>
                <li><CheckIcon />Blog functionality</li>
              </ul>
              <a href="https://wa.me/923363820234" target="_blank" rel="noopener" className="btn btn-primary btn-block">Get started</a>
            </div>

            <div className="price-card">
              <h3>Custom Solution</h3>
              <p className="price-sub">Tailored to your unique needs</p>
              <div className="price talk">Let's Talk</div>
              <ul className="price-list">
                <li><CheckIcon />Everything in Premium, plus</li>
                <li><CheckIcon />Unlimited pages</li>
                <li><CheckIcon />E-commerce ready</li>
                <li><CheckIcon />Custom features &amp; integrations</li>
                <li><CheckIcon />Dedicated project manager</li>
              </ul>
              <Link to="/contact" className="btn btn-ghost btn-block">Contact us</Link>
            </div>
          </div>
          <p className="price-note">Prices are starting estimates — final scope and cost are confirmed after a quick consultation.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-tight">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="section-head" style={{ marginBottom: 12 }}>
            <div>
              <span className="kicker">FAQ</span>
              <h2>Questions, answered clearly.</h2>
            </div>
          </div>
          {faqs.map((item, i) => (
            <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={item.q}>
              <div
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className="plus">+</span>
              </div>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Ready to start?</h2>
              <p>Tell us a bit about your business and we'll recommend the right package.</p>
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
