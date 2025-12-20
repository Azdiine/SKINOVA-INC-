import React, { useState } from 'react'
import { Linkedin, Instagram, Menu, X, Sparkles, Heart, Shield, Zap } from 'lucide-react'
import LuxuryBackground from './components/LuxuryBackground'

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <LuxuryBackground>
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
            <a href="/about">About</a>
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
        
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <a href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="/#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      <div className="landing-page">
        <section className="about-hero">
          <h1>About SKINOVA</h1>
          <p className="about-hero-subtitle">
            AI-powered skincare analysis for healthier skin
          </p>
        </section>

        <section className="about-section">
          <div className="about-image-wrapper">
            <img src="/logo skinova.jpg" alt="Skinova Logo" className="about-phone-image" />
          </div>
          <h2 className="section-title-center">Our Mission</h2>
          <p className="section-subtitle-center">
            SKINOVA democratizes professional skin analysis through AI technology. 
            We provide instant, accurate insights accessible to everyone through their smartphone.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title-center">What We Offer</h2>
          
          <div className="about-features-vertical">
              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <Sparkles size={32} />
                </div>
                <h3>AI Analysis</h3>
                <p>
                  Advanced technology that identifies skin concerns from a simple photo.
                </p>
              </div>

              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <Heart size={32} />
                </div>
                <h3>Personalized Care</h3>
                <p>
                  Customized skincare routines tailored to your unique skin profile.
                </p>
              </div>

              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <Zap size={32} />
                </div>
                <h3>Instant Results</h3>
                <p>
                  Comprehensive skin health reports delivered in seconds.
                </p>
              </div>

              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <Shield size={32} />
                </div>
                <h3>Secure & Private</h3>
                <p>
                  Your data is protected with advanced encryption technology.
                </p>
              </div>
            </div>
        </section>

        <section className="about-cta-section">
          <h2>Start Your Skincare Journey</h2>
          <p>Download SKINOVA and experience professional skin analysis</p>
          <div className="about-cta-buttons">
            <img src="/download app store.png" alt="Download SKINOVA" className="about-store-badge" />
          </div>
        </section>

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
                  <a href="/about">About</a>
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
