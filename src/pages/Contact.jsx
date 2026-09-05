import { useState } from 'react'
import { Link } from 'react-router-dom'

// Replace with your key from web3forms.com
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'

export default function Contact() {
  const [status, setStatus] = useState({ text: '', type: '' })
  const [sending, setSending] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setStatus({ text: 'Sending your message…', type: '' })

    const form = e.target
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', 'New enquiry from Tafsol Digital website')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const data = await res.json()

      if (data.success) {
        setStatus({ text: "Thanks — your message is in. We'll reply within one business day.", type: 'ok' })
        form.reset()
      } else {
        setStatus({ text: data.message || 'Something went wrong. Please try again or reach us on WhatsApp.', type: 'err' })
      }
    } catch {
      setStatus({ text: 'Network error — please try again or message us on WhatsApp.', type: 'err' })
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / Contact</div>
          <span className="hero-tag">Let's talk</span>
          <h1>Tell us about your project.</h1>
          <p>Send a message below or reach us directly on WhatsApp — we usually reply within one business day.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <form id="contact-form" onSubmit={handleSubmit}>
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <div className="field">
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone / WhatsApp (optional)</label>
                <input type="tel" id="phone" name="phone" placeholder="03XX XXXXXXX" />
              </div>
              <div className="field">
                <label htmlFor="package">Which package interests you?</label>
                <select id="package" name="package" defaultValue="Standard Website — Rs 11,999">
                  <option>Standard Website — Rs 11,999</option>
                  <option>Premium Website — Call for Price</option>
                  <option>Custom Solution — Let's Talk</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Project details</label>
                <textarea id="message" name="message" placeholder="Tell us a little about your business and what you need." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block" disabled={sending}>
                {sending ? 'Sending…' : 'Send message'}
              </button>
              <p className={`form-status${status.type ? ' ' + status.type : ''}`}>{status.text}</p>
            </form>
          </div>

          <div>
            <div className="contact-info-card">
              <div className="contact-row">
                <div className="ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/923363820234" target="_blank" rel="noopener">+92 336 3820234</a>
                </div>
              </div>
              <div className="contact-row">
                <div className="ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></svg>
                </div>
                <div>
                  <h4>Instagram</h4>
                  <a href="https://www.instagram.com/tafsoldigital/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener">@tafsoldigital</a>
                </div>
              </div>
              <div className="contact-row">
                <div className="ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </div>
                <div>
                  <h4>Facebook</h4>
                  <a href="https://www.facebook.com/profile.php?id=61594040612617" target="_blank" rel="noopener">Tafsol Digital</a>
                </div>
              </div>
              <div className="contact-row">
                <div className="ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <div>
                  <h4>Response time</h4>
                  <p>Within 1 business day, usually much faster on WhatsApp.</p>
                </div>
              </div>
            </div>

            <div className="cta-band" style={{ marginTop: 24, padding: 30 }}>
              <div>
                <h2 style={{ fontSize: '1.3rem' }}>Prefer to chat directly?</h2>
                <p style={{ fontSize: 14 }}>Skip the form and message us on WhatsApp right now.</p>
              </div>
              <div className="cta-actions">
                <a href="https://wa.me/923363820234" target="_blank" rel="noopener" className="btn btn-primary">Open WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
