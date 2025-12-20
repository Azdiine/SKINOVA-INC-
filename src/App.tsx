import React, { useState } from 'react'
import { 
  Sparkles, 
  Droplets, 
  Sun, 
  Flame,
  Circle,
  AlertTriangle,
  Heart,
  Moon,
  Layers,
  Linkedin,
  Instagram,
  Camera,
  BarChart3,
  Clock,
  ShoppingBag,
  Menu,
  X
} from 'lucide-react'
import LuxuryBackground from './components/LuxuryBackground'

export default function App() {
  const [activeFeature, setActiveFeature] = useState('scan')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const featureImages: { [key: string]: string } = {
    scan: '/SkinScan.PNG',
    analysis: '/skinAnalysis.PNG',
    routines: '/routines.PNG',
    products: '/RecommendationProducts.PNG'
  }

  return (
    <LuxuryBackground>
      {/* Header */}
      <header className="main-header">
        <div className="header-content">
          <div className="logo-brand">
            <a href="#home">
              <img src="/logo skinova.jpg" alt="Skinova" className="brand-logo" />
              <span className="brand-name">SKINOVA</span>
            </a>
          </div>
          <nav className="header-nav">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
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
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      <div className="landing-page">
        {/* Hero Section */}
        <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-rating">
              <div className="user-avatars">
                <div className="avatar">👤</div>
                <div className="avatar">👤</div>
                <div className="avatar">👤</div>
              </div>
              <span className="rating-text">Loved by users with ⭐ 4.5 rating</span>
            </div>
            
            <h1 className="hero-title">Meet SKINOVA</h1>
            <h2 className="hero-subtitle-main">Track your skin health<br/>with just a picture</h2>
            
            <p className="hero-description">
              Meet SKINOVA, the AI-powered app for easy skin analysis. Snap a 
              photo, scan your face, or describe your concerns and get instant 
              skin health and care recommendations.
            </p>
            
            <div className="hero-image-container">
              <img src="/download app store.png" alt="Download App" className="download-buttons-hero" />
            </div>
          </div>
          
          <div className="phone-showcase">
            <div className="phone-image-wrapper">
              <img src="/SkinScan.PNG" alt="Skin Scan" className="phone-screen-img" />
            </div>
            
            <div className="arrow-connector">
              <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 20 L60 20 M50 10 L60 20 L50 30" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="phone-image-wrapper">
              <img src="/skinAnalysis.PNG" alt="Skin Analysis" className="phone-screen-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="features-interactive">
          <div className="features-list">
            <div 
              className={`feature-item scan-card ${activeFeature === 'scan' ? 'active' : ''}`}
              onClick={() => setActiveFeature('scan')}
            >
              <div className="feature-icon-small scan-icon">
                <Camera style={{ width: '32px', height: '32px' }} />
              </div>
              <div className="feature-content">
                <h3>AI-Powered Skin Scan</h3>
                <p>Scan your face and get a detailed analysis of your skin in seconds using advanced AI technology.</p>
              </div>
            </div>
            
            <div 
              className={`feature-item analysis-card ${activeFeature === 'analysis' ? 'active' : ''}`}
              onClick={() => setActiveFeature('analysis')}
            >
              <div className="feature-icon-small analysis-icon">
                <BarChart3 style={{ width: '32px', height: '32px' }} />
              </div>
              <div className="feature-content">
                <h3>Complete Skin Analysis</h3>
                <p>Track your skin health score and monitor your progress over time with comprehensive KPIs.</p>
              </div>
            </div>
            
            <div 
              className={`feature-item routine-card ${activeFeature === 'routines' ? 'active' : ''}`}
              onClick={() => setActiveFeature('routines')}
            >
              <div className="feature-icon-small routine-icon">
                <Clock style={{ width: '32px', height: '32px' }} />
              </div>
              <div className="feature-content">
                <h3>Personalized Routines</h3>
                <p>Receive custom morning and evening skincare routines tailored to your specific needs.</p>
              </div>
            </div>
            
            <div 
              className={`feature-item product-card ${activeFeature === 'products' ? 'active' : ''}`}
              onClick={() => setActiveFeature('products')}
            >
              <div className="feature-icon-small product-icon">
                <ShoppingBag style={{ width: '32px', height: '32px' }} />
              </div>
              <div className="feature-content">
                <h3>Product Recommendations</h3>
                <p>Discover the best skincare products perfectly matched to your skin type and concerns.</p>
              </div>
            </div>
          </div>
          
          <div className="features-image">
            <img 
              key={activeFeature}
              src={featureImages[activeFeature]} 
              alt="Feature preview" 
              className="feature-phone-img"
            />
          </div>
        </div>
      </section>

      {/* Skin Analysis Section */}
      <section className="skin-analysis">
        <div className="skin-analysis-container">
          <h2>Complete Skin Analysis</h2>
          
          <div className="overall-score-card">
            <div className="score-info">
              <span className="score-label">Overall Skin Health</span>
              <div className="score-value">
                <span className="score-number">86</span>
                <span className="scGeore-total">/100</span>
              </div>
              <span className="score-status">✨ Good progress</span>
            </div>
            <div className="score-circle">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#F3F4F6" strokeWidth="8"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient)" strokeWidth="8" 
                  strokeDasharray="251" strokeDashoffset="35" strokeLinecap="round" transform="rotate(-90 50 50)"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A78BFA"/>
                    <stop offset="100%" stopColor="#F472B6"/>
                  </linearGradient>
                </defs>
              </svg>
              <div className="score-percent">86%</div>
            </div>
          </div>

          <h3 className="kpis-title">Skin KPIs</h3>
          <div className="kpis-grid">
            <div className="kpi-card">
              <div className="kpi-header">
                <div className="kpi-icon pink">
                  <Droplets style={{ width: '20px', height: '20px', color: '#F472B6' }} />
                </div>
                <span className="kpi-name">Oiliness</span>
              </div>
              <div className="kpi-value pink">65%</div>
              <div className="kpi-bar pink"></div>
            </div>

            <div className="kpi-card">
              <div className="kpi-header">
                <div className="kpi-icon purple">
                  <Sun style={{ width: '20px', height: '20px', color: '#A78BFA' }} />
                </div>
                <span className="kpi-name">Dryness</span>
              </div>
              <div className="kpi-value purple">25%</div>
              <div className="kpi-bar purple"></div>
            </div>

            <div className="kpi-card">
              <div className="kpi-header">
                <div className="kpi-icon red">
                  <Flame style={{ width: '20px', height: '20px', color: '#EF4444' }} />
                </div>
                <span className="kpi-name">Redness</span>
              </div>
              <div className="kpi-value red">40%</div>
              <div className="kpi-bar red"></div>
            </div>

            <div className="kpi-card">
              <div className="kpi-header">
                <div className="kpi-icon blue">
                  <Circle style={{ width: '20px', height: '20px', color: '#3B82F6' }} />
                </div>
                <span className="kpi-name">Pores Visibility</span>
              </div>
              <div className="kpi-value blue">55%</div>
              <div className="kpi-bar blue"></div>
            </div>

            <div className="kpi-card">
              <div className="kpi-header">
                <div className="kpi-icon orange">
                  <AlertTriangle style={{ width: '20px', height: '20px', color: '#FB923C' }} />
                </div>
                <span className="kpi-name">Acne Risk</span>
              </div>
              <div className="kpi-value orange">70%</div>
              <div className="kpi-bar orange"></div>
            </div>

            <div className="kpi-card">
              <div className="kpi-header">
                <div className="kpi-icon green">
                  <Heart style={{ width: '20px', height: '20px', color: '#22C55E' }} />
                </div>
                <span className="kpi-name">Sensitivity</span>
              </div>
              <div className="kpi-value green">35%</div>
              <div className="kpi-bar green"></div>
            </div>

            <div className="kpi-card">
              <div className="kpi-header">
                <div className="kpi-icon violet">
                  <Moon style={{ width: '20px', height: '20px', color: '#8B5CF6' }} />
                </div>
                <span className="kpi-name">Dark Spots</span>
              </div>
              <div className="kpi-value violet">20%</div>
              <div className="kpi-bar violet"></div>
            </div>

            <div className="kpi-card">
              <div className="kpi-header">
                <div className="kpi-icon cyan">
                  <Layers style={{ width: '20px', height: '20px', color: '#06B6D4' }} />
                </div>
                <span className="kpi-name">Texture Score</span>
              </div>
              <div className="kpi-value cyan">75%</div>
              <div className="kpi-bar cyan"></div>
            </div>
          </div>

          <div className="ai-summary">
            <div className="ai-icon">
              <Sparkles style={{ width: '20px', height: '20px', color: 'white' }} />
            </div>
            <div className="ai-content">
              <h4>AI Analysis Summary</h4>
              <p>Your skin is combination with mild oiliness and dehydration. Focus on hydrating products and gentle exfoliation to improve texture.</p>
              <p className="ai-note">Powered by AI using your uploaded photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <h2>Why Choose SKINOVA</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon ai-icon-benefit">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Advanced AI</h3>
            <p>AI powered for precise analysis</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon security-icon-benefit">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Secure Data</h3>
            <p>Your information is encrypted and protected</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon tracking-icon-benefit">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Progress Tracking</h3>
            <p>Visualize your skin's evolution over time</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon personalized-icon-benefit">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M20 21C20 17 16.4183 14 12 14C7.58172 14 4 17 4 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Personalized Advice</h3>
            <p>Custom recommendations for your skin type</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Reveal Your Best Skin?</h2>
          <p>Join thousands of satisfied users today</p>
          <button className="cta-button">Get Started Now</button>
        </div>
      </section>

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
