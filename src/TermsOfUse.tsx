import React, { useState } from 'react'
import { Linkedin, Instagram, Menu, X } from 'lucide-react'

export default function TermsOfUse() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
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
            <a href="/#contact">Contact</a>
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
            <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      <div className="legal-content">
        <div className="legal-container">
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last Updated: November 28, 2025</p>
          <p>Please read these Terms and Conditions carefully before accessing or using the Skinova Service.</p>

          <br />
          <section className="legal-section">
            <h2>1. Interpretation and Definitions</h2>
            <h3>1.1 Interpretation</h3>
            <p>Capitalized terms have the meanings provided in this Section or otherwise defined in these Terms. The definitions apply regardless of whether terms appear in singular or plural.</p>
            
            <h3>1.2 Definitions</h3>
            <ul>
              <li><strong>Affiliate</strong> – Means any entity that controls, is controlled by, or is under common control with the Company, where "control" means direct or indirect ownership of at least fifty percent (50%) of equity interests or voting securities.</li>
              <li><strong>Application</strong> – Means the mobile application titled "Skinova – AI Skin Analyzer", including all related features, tools, content, and updates.</li>
              <li><strong>Company, We, Us, or Our</strong> – Means Skinova, Inc., with a principal mailing address at [Insert your actual company address].</li>
              <li><strong>Device</strong> – Means any device capable of accessing the Service.</li>
              <li><strong>Service</strong> – Means, collectively, the Application, the Website, associated software, AI-powered skin analysis tools, routines, product recommendations, and any services offered by the Company.</li>
              <li><strong>User Content</strong> – Means any facial images, photos, text notes, metadata, skincare information, or other materials uploaded, submitted, or transmitted by You through the Service.</li>
              <li><strong>Website</strong> – Means skinova.app and any associated subdomains.</li>
              <li><strong>You</strong> – Means the individual using the Service or the legal entity on whose behalf the individual uses the Service.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Agreement to Terms</h2>
            <p>Your access to and use of the Service is conditioned upon Your acceptance of these Terms and the Skinova Privacy Policy.</p>
            <p>By accessing or using the Service, You acknowledge that You have read, understood, and agreed to be bound by these Terms.</p>
            <p>If You do not agree, You must discontinue use of the Service immediately.</p>
          </section>

          <section className="legal-section">
            <h2>3. Eligibility; Age Requirements</h2>
            <p>You represent and warrant that You are at least 13 years old.</p>
            <p>If You are between 13 and 17 years old, You may use the Service only with the supervision and consent of a parent or legal guardian, who is fully responsible for all activities.</p>
          </section>

          <section className="legal-section">
            <h2>4. Skin Health, Cosmetic, and Safety Disclaimers</h2>
            <p>Skinova provides AI-generated cosmetic analysis, not medical care.</p>
            <p>You acknowledge and agree that:</p>
            <ul>
              <li>Skin analysis is based on automated approximations and may be incomplete or inaccurate.</li>
              <li>Skinova does not provide medical advice, dermatological diagnosis, or clinical treatment.</li>
              <li>The Service is not intended to diagnose, cure, treat, or prevent any medical skin condition.</li>
              <li>Product recommendations are informational only and not professional advice.</li>
              <li>You should consult a licensed dermatologist or healthcare provider for skin concerns.</li>
            </ul>
            <p>The Company is not liable for:</p>
            <ul>
              <li>Inaccurate skin assessments</li>
              <li>Incorrect product suggestions</li>
              <li>Any decisions you make based on the Service</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. User Content; License Grant</h2>
            <p>By submitting User Content (including face photos), You represent that:</p>
            <ul>
              <li>You own or have permission to use the content.</li>
              <li>You have obtained lawful consent from anyone appearing in the content.</li>
              <li>The content complies with all applicable laws.</li>
            </ul>
            <p>You grant the Company a worldwide, irrevocable, royalty-free, transferable, sublicensable license to:</p>
            <ul>
              <li>Use, reproduce, process, analyze, and modify User Content</li>
              <li>Generate cosmetic insights</li>
              <li>Improve the Service and its AI models</li>
              <li>Create anonymized datasets</li>
              <li>Operate and support the Service</li>
            </ul>
            <p>You agree not to upload:</p>
            <ul>
              <li>Unlawful or harmful content</li>
              <li>Images of minors without legal consent</li>
              <li>Images of other individuals without explicit permission</li>
              <li>Content that violates privacy or intellectual property rights</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Prohibited Uses</h2>
            <p>You agree not to engage in activities including but not limited to:</p>
            <ul>
              <li>Uploading explicit, violent, or illegal content</li>
              <li>Reverse engineering the Service or analyzing internal algorithms</li>
              <li>Attempting unauthorized access</li>
              <li>Uploading facial images of others without lawful consent</li>
              <li>Interfering with or disrupting the Service</li>
              <li>Using Skinova for competitive intelligence or dataset harvesting</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Subscription, Billing, and In-App Purchases</h2>
            <p>Purchases, subscriptions, and payments are processed through third-party platforms such as:</p>
            <ul>
              <li>Apple App Store</li>
              <li>Google Play Store</li>
            </ul>
            <p>Their terms govern payment processing, renewals, and refund policies.</p>
            <p><strong>Subscriptions:</strong></p>
            <ul>
              <li>Automatically renew unless cancelled at least 24 hours before the current period ends</li>
              <li>May be cancelled directly in your App Store / Play Store account</li>
              <li>Skinova does not process refunds directly.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Third-Party Services</h2>
            <p>The Service may include integrations or links to third-party websites or tools.</p>
            <p>The Company does not control and is not responsible for:</p>
            <ul>
              <li>Their content</li>
              <li>Their privacy practices</li>
              <li>Their performance or availability</li>
            </ul>
            <p>Use of third-party services is at your own risk.</p>
          </section>

          <section className="legal-section">
            <h2>9. Intellectual Property</h2>
            <p>All rights in and to the Service (excluding User Content) are owned exclusively by the Company or its licensors, including:</p>
            <ul>
              <li>Software</li>
              <li>Algorithms</li>
              <li>AI models</li>
              <li>UI/UX designs</li>
              <li>Branding</li>
              <li>Images, text, and graphics</li>
            </ul>
            <p>You may not:</p>
            <ul>
              <li>Copy</li>
              <li>Modify</li>
              <li>Distribute</li>
              <li>Sell</li>
              <li>Reverse engineer</li>
              <li>Train competing models using Skinova content</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>10. Termination</h2>
            <p>The Company may suspend or terminate Your access immediately if:</p>
            <ul>
              <li>You violate these Terms</li>
              <li>You misuse the Service</li>
              <li>You upload prohibited or harmful content</li>
            </ul>
            <p>Upon termination:</p>
            <ul>
              <li>Your rights to use the Service cease</li>
              <li>Certain data may be retained for legal or security reasons</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>11. "AS IS" and "AS AVAILABLE" Disclaimer</h2>
            <p>The Service is provided "AS IS" and "AS AVAILABLE," without warranties of any kind.</p>
            <p>The Company disclaims all warranties, express or implied, including:</p>
            <ul>
              <li>Accuracy</li>
              <li>Reliability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Error-free or uninterrupted operation</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>12. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, the Company's total liability shall not exceed the greater of:</p>
            <ul>
              <li>The amount You paid to the Company in the past 12 months, or</li>
              <li>One hundred dollars (USD $100)</li>
            </ul>
            <p>The Company is not liable for:</p>
            <ul>
              <li>Loss of data</li>
              <li>Loss of profits</li>
              <li>Skin reactions from recommended products</li>
              <li>Decisions made based on AI-generated insights</li>
              <li>Consequential or incidental damages</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>13. DMCA Notice</h2>
            <p>Copyright infringement notices may be submitted to the Company's designated agent as described on the Website.</p>
          </section>

          <section className="legal-section">
            <h2>14. Governing Law</h2>
            <p>These Terms are governed by the laws of the jurisdiction where the Company is legally registered (e.g., Delaware, Canada, EU, or your local region).</p>
            <p>You agree to exclusive jurisdiction in that region's courts, except where arbitration applies.</p>
          </section>

          <section className="legal-section">
            <h2>15. Arbitration and Class Action Waiver</h2>
            <p>All disputes must be resolved through binding individual arbitration.</p>
            <p>You waive:</p>
            <ul>
              <li>The right to a trial</li>
              <li>Participation in class actions</li>
              <li>Representative actions</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>16. Severability and Waiver</h2>
            <p>If any provision is found invalid, the remaining terms remain valid and enforceable.</p>
            <p>Failure to enforce a right does not constitute a waiver.</p>
          </section>

          <section className="legal-section">
            <h2>17. Changes to These Terms</h2>
            <p>The Company may update these Terms at any time.</p>
            <p>Material changes will be communicated through reasonable notice in the Application or Website.</p>
            <p>Continued use after changes constitutes acceptance.</p>
          </section>

          <section className="legal-section">
            <h2>18. Contact Information</h2>
            <p>If You have questions about these Terms, You may contact Us at:</p>
            <p>📧 support@skinova.app</p>
          </section>

          <div className="legal-back">
            <a href="/" className="back-button">← Back to Home</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">✨</div>
              <span className="logo-text">SKINOVA</span>
            </div>
            <p>Your beauty partner</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="/#features">Features</a>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 SKINOVA. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin style={{ width: '20px', height: '20px' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Instagram style={{ width: '20px', height: '20px' }} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-legal-links">
          <a href="/privacy-policy" className="legal-link">Privacy Policy</a>
          <span className="legal-separator">•</span>
          <a href="/terms-of-use" className="legal-link">Terms of Use</a>
        </div>
      </footer>
    </div>
  )
}
