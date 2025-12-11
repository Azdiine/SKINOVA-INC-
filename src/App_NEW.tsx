import React from 'react'

export default function App() {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="main-header">
        <div className="header-content">
          <div className="logo-brand">
            <img src="/logo skinova.jpg" alt="Skinova" className="brand-logo" />
            <span className="brand-name">SKINOVA</span>
          </div>
          <nav className="header-nav">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-downloads">
            <img src="/download store.png" alt="Download App" className="download-stores" />
          </div>
        </div>
      </header>

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
              <span className="rating-text">Loved by 5M users with ⭐ 4.9 rating</span>
            </div>
            
            <h1 className="hero-title">Meet SKINOVA</h1>
            <h2 className="hero-subtitle-main">Track your skin health<br/>with just a picture</h2>
            
            <p className="hero-description">
              Meet SKINOVA, the AI-powered app for easy skin analysis. Snap a 
              photo, scan your face, or describe your concerns and get instant 
              skin health and care recommendations.
            </p>
            
            <div className="hero-buttons">
              <img src="/download store.png" alt="Download App" className="download-buttons-hero" />
            </div>
          </div>
          
          <div className="hero-image">
            <div className="phone-image-container">
              <img src="/acceuil site.png" alt="Home Screen" className="phone-screenshot" />
            </div>
            
            <div className="arrow-connector">
              <svg viewBox="0 0 100 50" className="flow-arrow-svg">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#A78BFA" />
                  </marker>
                </defs>
                <path d="M 10 25 L 90 25" stroke="#A78BFA" strokeWidth="2" fill="none" 
                  strokeDasharray="5,5" markerEnd="url(#arrowhead)">
                  <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
            
            <div className="phone-image-container">
              <img src="/skin scanner site.png" alt="Analysis Screen" className="phone-screenshot" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Fonctionnalités Principales</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon scan">📸</div>
            <h3>Analyse IA Avancée</h3>
            <p>Scannez votre visage et obtenez une analyse détaillée de votre peau en quelques secondes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon health">💯</div>
            <h3>Score de Santé</h3>
            <p>Suivez votre score de santé cutanée et voyez vos progrès au fil du temps</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon routine">🌅</div>
            <h3>Routines Personnalisées</h3>
            <p>Recevez des routines matin et soir adaptées à vos besoins spécifiques</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon products">✨</div>
            <h3>Recommandations Produits</h3>
            <p>Découvrez les meilleurs produits cosmétiques pour votre type de peau</p>
          </div>
        </div>
      </section>

      {/* Skin Analysis Section */}
      <section className="skin-analysis">
        <div className="skin-analysis-container">
          <h2>Analyse Complète de Votre Peau</h2>
          
          <div className="overall-score-card">
            <div className="score-left">
              <div className="score-circle">
                <svg viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="12"/>
                  <circle cx="100" cy="100" r="90" fill="none" stroke="url(#gradient)" strokeWidth="12" 
                    strokeDasharray="565" strokeDashoffset="113" strokeLinecap="round" transform="rotate(-90 100 100)"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A78BFA"/>
                      <stop offset="100%" stopColor="#F472B6"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="score-text">
                  <span className="score-number">86</span>
                  <span className="score-total">/100</span>
                </div>
              </div>
            </div>
            <div className="score-right">
              <h3>Score Global de Santé Cutanée</h3>
              <p className="score-status good">✨ Excellente progression</p>
              <p className="score-description">
                Votre peau montre des signes d'amélioration constante.
              </p>
            </div>
          </div>

          <div className="ai-summary">
            <div className="ai-summary-header">
              <div className="ai-icon">✨</div>
              <h3>Résumé IA</h3>
            </div>
            <p className="ai-summary-text">
              Votre peau présente un profil combiné avec tendance grasse dans la zone T.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <h2>Comment Ça Marche</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Scannez Votre Visage</h3>
            <p>Prenez une photo claire de votre visage</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Analyse IA</h3>
            <p>Notre IA analyse 8 indicateurs</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Résultats Détaillés</h3>
            <p>Recevez votre score personnalisé</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Routine Sur-Mesure</h3>
            <p>Suivez votre routine personnalisée</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <h2>Pourquoi Choisir SKINOVA</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🤖</div>
            <h3>IA de Pointe</h3>
            <p>Algorithmes d'apprentissage automatique</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🔒</div>
            <h3>Données Sécurisées</h3>
            <p>Vos informations sont cryptées</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">📈</div>
            <h3>Suivi Continu</h3>
            <p>Visualisez l'évolution de votre peau</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💡</div>
            <h3>Conseils Personnalisés</h3>
            <p>Recommandations adaptées</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Prêt à Révéler Votre Meilleure Peau ?</h2>
          <p>Rejoignez des milliers d'utilisateurs</p>
          <button className="cta-button">Démarrer Maintenant</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">✨</div>
              <span className="logo-text">SKINOVA</span>
            </div>
            <p>Votre partenaire beauté</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Produit</h4>
              <a href="#features">Fonctionnalités</a>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SKINOVA. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
