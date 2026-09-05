import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / Services</div>
          <span className="hero-tag">What we do</span>
          <h1>Four disciplines. One team behind every project.</h1>
          <p>From a first website to ongoing marketing and custom tools, everything we build works together — because it's designed and built by the same people.</p>
        </div>
      </section>

      {/* WEB DEVELOPMENT */}
      <section className="section" id="web-development">
        <div className="wrap about-grid">
          <div>
            <span className="kicker">01 — Web Development</span>
            <h2>Websites that load fast and work on every screen.</h2>
            <p>We design and build responsive websites — from a simple 4-page presence to a full multi-page platform with CMS and blog. Every build is hand-coded around your content, not forced into a generic template.</p>
            <div className="badge-row">
              <span className="badge">Responsive design</span>
              <span className="badge">SEO foundations</span>
              <span className="badge">Fast hosting on Vercel</span>
            </div>
          </div>
          <div className="values-grid">
            <div className="value-item"><h3>Business websites</h3><p>Clear, trust-building sites for small and growing businesses.</p></div>
            <div className="value-item"><h3>Web applications</h3><p>Dashboards, portals and tools built for real day-to-day use.</p></div>
            <div className="value-item"><h3>E-commerce</h3><p>Product catalogues, checkout flows and payment integrations.</p></div>
            <div className="value-item"><h3>Maintenance</h3><p>Ongoing updates, fixes and improvements after launch.</p></div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* DIGITAL MARKETING */}
      <section className="section" id="digital-marketing">
        <div className="wrap about-grid">
          <div className="values-grid" style={{ order: 2 }}>
            <div className="value-item"><h3>Social media growth</h3><p>Content calendars and posting that build an audience over time.</p></div>
            <div className="value-item"><h3>Search &amp; SEO</h3><p>On-page optimisation so people can actually find your site.</p></div>
            <div className="value-item"><h3>Paid campaigns</h3><p>Targeted ads on Meta and Google built around a clear goal.</p></div>
            <div className="value-item"><h3>Analytics &amp; reporting</h3><p>Straightforward monthly reports on what's working.</p></div>
          </div>
          <div style={{ order: 1 }}>
            <span className="kicker">02 — Digital Marketing</span>
            <h2>Get in front of the people who are ready to buy.</h2>
            <p>A great website needs an audience. We plan and run marketing that's matched to your budget — from organic social growth to targeted paid campaigns — and report back in plain language, not vanity metrics.</p>
            <div className="badge-row">
              <span className="badge">Meta &amp; Google Ads</span>
              <span className="badge">Content strategy</span>
              <span className="badge">Monthly reporting</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* BRANDING */}
      <section className="section" id="branding">
        <div className="wrap about-grid">
          <div>
            <span className="kicker">03 — Branding &amp; Creative Design</span>
            <h2>An identity people recognise before they read a word.</h2>
            <p>Logos, colour systems, typography and brand guidelines that give a business a consistent look everywhere it shows up — on a website, a business card, or a delivery bag.</p>
            <div className="badge-row">
              <span className="badge">Logo design</span>
              <span className="badge">Brand guidelines</span>
              <span className="badge">Social templates</span>
            </div>
          </div>
          <div className="values-grid">
            <div className="value-item"><h3>Logo &amp; identity</h3><p>A distinct mark built around what your business actually does.</p></div>
            <div className="value-item"><h3>Visual systems</h3><p>Colour, type and layout rules kept consistent across every touchpoint.</p></div>
            <div className="value-item"><h3>Print &amp; packaging</h3><p>Business cards, menus, packaging — designed to match the brand.</p></div>
            <div className="value-item"><h3>Social creative</h3><p>Templates so your team can post on-brand without a designer every time.</p></div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* DIGITAL SOLUTIONS */}
      <section className="section" id="digital-solutions">
        <div className="wrap about-grid">
          <div className="values-grid" style={{ order: 2 }}>
            <div className="value-item"><h3>Automation</h3><p>Cut out repetitive manual work with connected tools and workflows.</p></div>
            <div className="value-item"><h3>Integrations</h3><p>Payments, forms, CRMs and third-party tools connected to your site.</p></div>
            <div className="value-item"><h3>Custom features</h3><p>Anything off-the-shelf software can't do, built specifically for you.</p></div>
            <div className="value-item"><h3>Ongoing support</h3><p>A team you can message when something needs to change.</p></div>
          </div>
          <div style={{ order: 1 }}>
            <span className="kicker">04 — Digital Solutions</span>
            <h2>Custom tools for problems generic software can't solve.</h2>
            <p>When a template or plugin isn't enough, we build the specific feature, integration or automation your business needs — scoped clearly, and supported after launch.</p>
            <div className="badge-row">
              <span className="badge">Workflow automation</span>
              <span className="badge">Custom integrations</span>
              <span className="badge">Dedicated support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Not sure which service fits?</h2>
              <p>Tell us what you're trying to achieve and we'll recommend where to start.</p>
            </div>
            <div className="cta-actions">
              <a href="https://wa.me/923363820234" target="_blank" rel="noopener" className="btn btn-primary">Chat on WhatsApp</a>
              <Link to="/pricing" className="btn btn-ghost">View pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
