import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import des pages
import Home from './pages/home';
import CERs from './pages/CERs';

// Navbar Component
const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container">
        <a 
          className="navbar-brand d-flex align-items-center" 
          href="#"
          onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
        >
          <span className="me-2" style={{fontSize: '1.5rem'}}>📄</span>
          <span className="fw-bold">Archiva</span>
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav" center>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'home' ? 'fw-bold text-warning' : ''}`}
                href="#"
                onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
              >
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'cers' ? 'fw-bold text-warning' : ''}`}
                href="#"
                onClick={(e) => { e.preventDefault(); setCurrentPage('cers'); }}
              >
                CERs
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'favoris' ? 'fw-bold text-warning' : ''}`}
                href="#"
                onClick={(e) => { e.preventDefault(); setCurrentPage('favoris'); }}
              >
                Mes CERs Favoris
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'contact' ? 'fw-bold text-warning' : ''}`}
                href="#"
                onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}
              >
                Contact et CGU
              </a>
            </li>
            <li className="nav-item ms-lg-3">
              <button className="btn btn-warning text-white px-4">
                Connexion
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-white border-top py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              <span className="me-2">📄</span>
              <span className="fw-bold">Archiva</span>
            </div>
            <div className="d-flex flex-column gap-2 text-muted small">
              <a href="mailto:contact@archiva.com" className="text-decoration-none text-muted">
                📧 contact@archiva.com
              </a>
              <a href="tel:+33123456789" className="text-decoration-none text-muted">
                📞 +237 6 56 85 75 12
              </a>
              <span>📍 Douala, Cameroun</span>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-bold mb-3">Accueil</h6>
            <div className="d-flex flex-column gap-2">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('cers'); }}
                className="text-decoration-none text-muted small"
              >
                CERs
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('favoris'); }}
                className="text-decoration-none text-muted small"
              >
                Mes CERs Favoris
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}
                className="text-decoration-none text-muted small"
              >
                Contact et CGU
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Nous Suivre</h6>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                <i className="bi bi-facebook" style={{fontSize: '1.5rem'}}></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                <i className="bi bi-twitter" style={{fontSize: '1.5rem'}}></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                <i className="bi bi-linkedin" style={{fontSize: '1.5rem'}}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 pt-3 border-top">
          <p className="text-muted small mb-0">
            © 2025 Archiva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'cers':
        return <CERs setCurrentPage={setCurrentPage} />;
      case 'favoris':
        return (
          <div className="container py-5">
            <h1>Mes CERs Favoris</h1>
            <p className="text-muted">Cette page est en cours de développement.</p>
          </div>
        );
      case 'contact':
        return (
          <div className="container py-5">
            <h1>Contact et CGU</h1>
            <p className="text-muted">Cette page est en cours de développement.</p>
          </div>
        );
      default:
        return (
          <div className="container py-5 text-center">
            <h1 className="display-4">404</h1>
            <p className="text-muted">Page non trouvée</p>
            <button 
              onClick={() => setCurrentPage('home')}
              className="btn btn-warning text-white"
            >
              Retour à l'accueil
            </button>
          </div>
        );
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow-1">
        {renderPage()}
      </main>
      
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
