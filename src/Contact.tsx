import React, { useState } from 'react'
import { Linkedin, Instagram, Menu, X, Send } from 'lucide-react'
import LuxuryBackground from './components/LuxuryBackground'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSending, setIsSending] = useState(false)
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setSendStatus('idle')

    try {
      await emailjs.send(
        'service_skinova_gmail',  // Service ID
        'template_pb2u3ce',        // Template ID
        {
          from_name: 'Skinova-contact',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email
        },
        'mvbvvKlb5TEj53Gas'        // Public Key
      )
      
      setSendStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSendStatus('idle'), 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSendStatus('error')
      setTimeout(() => setSendStatus('idle'), 5000)
    } finally {
      setIsSending(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <LuxuryBackground>
      <div className="legal-page">
        <header className="main-header">
        <div className="header-content">
          <div className="logo-brand">
            <a href="/">
              <img src="/logo skinova.jpg" alt="Skinova" className="brand-logo" />
              <span className="brand-name">SKINOVA</span>
            </a>
          </div>
          <nav className="header-nav">
            <a href="/">Home</a>
            <a href="/#features">Features</a>
            <a href="/#about">About</a>
            <a href="/contact">Contact</a>
          </nav>
          <div className="header-right">
            <div className="header-downloads">
              <img src="/download app store.png" alt="Download App" className="download-stores" />
            </div>
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <a href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="/#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="/#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      <div className="legal-content">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p className="contact-subtitle">Get in touch with our team for media inquiries, support, and questions.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Media inquiry subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please provide details about your inquiry, including deadline, outlet information, and specific questions you'd like answered..."
                rows={8}
                required
              />
            </div>

            <button type="submit" className="submit-button" disabled={isSending}>
              <Send size={20} />
              {isSending ? 'Sending...' : 'Send Inquiry'}
            </button>

            {sendStatus === 'success' && (
              <div className="form-message success-message">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {sendStatus === 'error' && (
              <div className="form-message error-message">
                ✗ Failed to send message. Please try again or contact us directly.
              </div>
            )}
          </form>

          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Email Support</h3>
              <p>support@skinova.app</p>
            </div>
            <div className="contact-info-item">
              <h3>Press Inquiries</h3>
              <p>press@skinova.app</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand-section">
            <div className="footer-logo">
              <img src="/logo skinova.jpg" alt="SKINOVA" className="footer-logo-img" />
              <span className="footer-brand-name">SKINOVA</span>
            </div>
            <p className="footer-download-text">Download SKINOVA</p>
            <div className="footer-app-buttons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/download app store.png" alt="Download App" className="footer-store-badge" />
              </a>
            </div>
          </div>

          <div className="footer-links-center">
            <div className="footer-links-section">
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-use">Terms of use</a>
              </div>

              <div className="footer-column">
                <h4>Company</h4>
                <a href="/contact">Contact</a>
              </div>
            </div>
          </div>

          <div className="footer-empty-section"></div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© Copyright 2025, All rights reserved</p>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Instagram size={20} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      </div>
    </LuxuryBackground>
  )
}
