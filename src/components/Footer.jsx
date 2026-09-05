import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img src="/assets/logo-500.png" alt="Tafsol Digital logo" />
              <span>TAFSOL<br /><small>DIGITAL SOLUTIONS</small></span>
            </Link>
            <p>Digital solutions for a brighter tomorrow. We help businesses grow through modern websites, marketing, branding and digital solutions.</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/tafsoldigital/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61594040612617" target="_blank" rel="noopener" aria-label="Facebook">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://wa.me/923363820234" target="_blank" rel="noopener" aria-label="WhatsApp">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>NAVIGATE</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>SERVICES</h4>
            <ul>
              <li><Link to="/services#web-development">Web Development</Link></li>
              <li><Link to="/services#digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/services#branding">Branding &amp; Design</Link></li>
              <li><Link to="/services#digital-solutions">Digital Solutions</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>GET IN TOUCH</h4>
            <ul>
              <li><a href="https://wa.me/923363820234" target="_blank" rel="noopener">+92 336 3820234</a></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Tafsol Digital. All rights reserved.</span>
          <span>Digital solutions for a brighter tomorrow.</span>
        </div>
      </div>
    </footer>
  )
}
