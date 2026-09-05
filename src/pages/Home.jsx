import { Link } from 'react-router-dom'
import CheckIcon from '../components/CheckIcon.jsx'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="hero-tag">Websites · Marketing · Brands · Growth</span>
            <h1>Ideas today. <span className="accent">A brighter tomorrow.</span></h1>
            <p className="lede">We help businesses grow through modern websites, digital marketing, branding and creative design, and practical digital solutions — built to be used, not just launched.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Start a project</Link>
              <Link to="/work" className="btn btn-ghost">See our work</Link>
            </div>
            <div className="hero-stats">
              <div><strong>4+</strong><span>core services</span></div>
              <div><strong>4</strong><span>live client builds</span></div>
              <div><strong>48hr</strong><span>average reply time</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/assets/logo-500.png" alt="Tafsol Digital emblem" />
            <div className="visual-caption">BUILD · GROW · SCALE</div>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="section section-tight">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="kicker">What we do</span>
              <h2>Four disciplines, one team.</h2>
            </div>
            <p>Every project draws on the same core skill set, scoped to exactly what your business needs right now.</p>
          </div>
          <div className="grid-4">
            <div className="service-card">
              <div className="service-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 6 2 12 8 18" /><polyline points="16 6 22 12 16 18" /></svg>
              </div>
              <h3>Web Development</h3>
              <p>Fast, responsive websites and web apps built on modern foundations.</p>
              <Link to="/services#web-development" className="card-link">Learn more →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="20" x2="4" y2="12" /><line x1="12" y1="20" x2="12" y2="6" /><line x1="20" y1="20" x2="20" y2="14" /><line x1="4" y1="20" x2="20" y2="20" /></svg>
              </div>
              <h3>Digital Marketing</h3>
              <p>Campaigns and content that put your business in front of the right people.</p>
              <Link to="/services#digital-marketing" className="card-link">Learn more →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
              </div>
              <h3>Branding &amp; Creative Design</h3>
              <p>Logos, visual systems and identities that make a business easy to recognise.</p>
              <Link to="/services#branding" className="card-link">Learn more →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7c.5.4.9 1 .9 1.7v.6h6.2v-.6c0-.7.4-1.3.9-1.7A7 7 0 0 0 12 2z" /></svg>
              </div>
              <h3>Digital Solutions</h3>
              <p>Custom tools, integrations and automation that simplify how you work.</p>
              <Link to="/services#digital-solutions" className="card-link">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* WHY US */}
      <section className="section">
        <div className="wrap about-grid">
          <div>
            <span className="kicker">Why Tafsol</span>
            <h2>Built for how small businesses actually grow.</h2>
            <p>Most agencies sell templates or over-promise on scope. We do the opposite: a clear starting package, honest pricing, and room to grow the project as your business grows — no unnecessary complexity, no locked-in contracts.</p>
            <div className="badge-row">
              <span className="badge">Direct WhatsApp support</span>
              <span className="badge">Fixed starting price</span>
              <span className="badge">Fast turnaround</span>
            </div>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <h3>Clear scope</h3>
              <p>You know exactly what's included before you pay a rupee.</p>
            </div>
            <div className="value-item">
              <h3>Real ownership</h3>
              <p>Your site, your domain, your data — nothing held hostage.</p>
            </div>
            <div className="value-item">
              <h3>Built to convert</h3>
              <p>Every page is designed around getting you enquiries, not just looking nice.</p>
            </div>
            <div className="value-item">
              <h3>Ongoing support</h3>
              <p>We stay reachable after launch, not just during the sale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="section section-tight" id="work-preview">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="kicker">Selected work</span>
              <h2>Recent builds from the studio.</h2>
            </div>
            <Link to="/work" className="btn btn-ghost btn-sm">View all work</Link>
          </div>
          <div className="grid-3">
            <div className="work-card">
              <div className="browser-chrome">
                <div className="dots"><span></span><span></span><span></span></div>
                <div className="url">forno-pizza-murex.vercel.app</div>
              </div>
              <div className="work-preview"><span className="glyph">Forno Pizza</span></div>
              <div className="work-body">
                <span className="work-tag">Web App</span>
                <h3>Forno Pizza</h3>
                <p>An online ordering experience with a fast menu browser and clean checkout flow.</p>
                <a className="visit" href="https://forno-pizza-murex.vercel.app/" target="_blank" rel="noopener">Visit live site →</a>
              </div>
            </div>

            <div className="work-card">
              <div className="browser-chrome">
                <div className="dots"><span></span><span></span><span></span></div>
                <div className="url">comic-website-react.vercel.app</div>
              </div>
              <div className="work-preview"><span className="glyph">Comic Reader</span></div>
              <div className="work-body">
                <span className="work-tag">Web App</span>
                <h3>Comic Reader</h3>
                <p>A React-powered comic browsing app with a library view and in-browser reader.</p>
                <a className="visit" href="https://comic-website-react.vercel.app/" target="_blank" rel="noopener">Visit live site →</a>
              </div>
            </div>

            <div className="work-card">
              <div className="browser-chrome">
                <div className="dots"><span></span><span></span><span></span></div>
                <div className="url">maintainiq-frontend-alpha.vercel.app</div>
              </div>
              <div className="work-preview"><span className="glyph">MaintainIQ</span></div>
              <div className="work-body">
                <span className="work-tag">Web Platform</span>
                <h3>MaintainIQ</h3>
                <p>A maintenance-management dashboard built for tracking assets, tasks and teams.</p>
                <a className="visit" href="https://maintainiq-frontend-alpha.vercel.app/login" target="_blank" rel="noopener">Visit live site →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="kicker">Packages</span>
              <h2>Straightforward pricing to start.</h2>
            </div>
            <Link to="/pricing" className="btn btn-ghost btn-sm">Full pricing details</Link>
          </div>
          <div className="pricing-grid">
            <div className="price-card">
              <h3>Standard Website</h3>
              <p className="price-sub">Perfect for small businesses starting out</p>
              <div className="price">Rs 11,999 <span className="unit">/ one-time</span></div>
              <ul className="price-list">
                <li><CheckIcon />Up to 4 pages</li>
                <li><CheckIcon />Basic contact form</li>
                <li><CheckIcon />Mobile responsive</li>
                <li><CheckIcon />Free subdomain + SSL</li>
              </ul>
              <Link to="/pricing" className="btn btn-ghost btn-block">See full details</Link>
            </div>

            <div className="price-card popular">
              <span className="popular-badge">Most popular</span>
              <h3>Premium Website</h3>
              <p className="price-sub">Ideal for growing businesses</p>
              <div className="price talk">Call for Price</div>
              <ul className="price-list">
                <li><CheckIcon />Everything in Standard, plus</li>
                <li><CheckIcon />8+ pages</li>
                <li><CheckIcon />CMS + blog functionality</li>
                <li><CheckIcon />Advanced SEO</li>
              </ul>
              <Link to="/pricing" className="btn btn-primary btn-block">See full details</Link>
            </div>

            <div className="price-card">
              <h3>Custom Solution</h3>
              <p className="price-sub">Tailored to your unique needs</p>
              <div className="price talk">Let's Talk</div>
              <ul className="price-list">
                <li><CheckIcon />Everything in Premium, plus</li>
                <li><CheckIcon />Unlimited pages</li>
                <li><CheckIcon />E-commerce ready</li>
                <li><CheckIcon />Dedicated project manager</li>
              </ul>
              <Link to="/pricing" className="btn btn-ghost btn-block">See full details</Link>
            </div>
          </div>
          <p className="price-note">Prices are starting estimates — final scope and cost are confirmed after a quick chat.</p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="section-tight">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Have an idea? Let's build it.</h2>
              <p>Message us your project on WhatsApp or send a quick brief — we'll reply with a clear next step.</p>
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
