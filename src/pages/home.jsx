import React from 'react';

const Home = ({ setCurrentPage }) => {
  const cers = [
    {
      id: 1,
      category: "API Bridge Réseaux",
      title: "Projet 1.2 Avancée Archiva Discovery",
      author: "SIELINOU NOËLLE",
      date: "12 janvier 2025",
      description: "Ce projet vise à améliorer les fonctionnalités de recherche et de découverte dans Archiva...",
      image: "../src/assets/1.png"
    },
    {
      id: 2,
      category: "API Projets Web",
      title: "Projet 2.3 Modélisation UML",
      author: "SIMO DORIAN",
      date: "15 janvier 2025",
      description: "Conception et modélisation d'une architecture système complète utilisant UML...",
      image: "../src/assets/2.png"
    },
    {
      id: 3,
      category: "API Développement logiciel",
      title: "Projet 4 | Développement mobile",
      author: "SOUOP ASTRID",
      date: "18 janvier 2025",
      description: "Développement d'une application mobile native avec React Native et intégration API...",
      image: "../src/assets/3.png"
    },
    {
      id: 4,
      category: "API Digital Research",
      title: "Projet 3.1 API et Webservices",
      author: "AMBIANA THIBAUD",
      date: "20 janvier 2025",
      description: "Mise en place d'une architecture microservices avec API RESTful et documentation...",
      image: "../src/assets/4.png"
    },
    {
      id: 5,
      category: "API Révolutions Digitales",
      title: "Projet 4.1 Architecture eCommerce",
      author: "NOUPIGANG CRIS",
      date: "22 janvier 2025",
      description: "Conception d'une plateforme e-commerce scalable avec architecture microservices...",
      image: "../src/assets/5.png"
    },
    {
      id: 6,
      category: "API Bridge Réseaux",
      title: "Projet 4.3 Architecture distribuée",
      author: "MUKAM SERGE",
      date: "25 janvier 2025",
      description: "Implémentation d'un système distribué avec gestion de la cohérence et de la résilience...",
      image: "../src/assets/6.png"
    }
  ];

  return (
    <div className="bg-light ">
      <div className="container py-5">
        <div className="row justify-content-center text-center py-5">
          <div className="col-lg-8">
            <div className="mb-4">
              <span className="text-muted" style={{fontSize: '3rem'}}>📄</span>
            </div>
            <h1 className="display-4 fw-bold mb-3">
              Bienvenue sur Archiva, votre espace
            </h1>
            <p className="lead text-muted mb-4">
              Espace d'archivage d'anciens CERs
            </p>
            <p className="text-muted small mb-4">
              Téléchargez vos propres archives au formats PDF ou Word et visualisez-les
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <button 
                className="btn btn-warning text-white px-4 py-2"
                onClick={() => setCurrentPage('cers')}
              >
                Importer un CER
              </button>
              <button 
                className="btn btn-outline-secondary px-4 py-2"
                onClick={() => setCurrentPage('cers')}
              >
                Tous les CERs
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 fw-bold mb-0">Les meilleurs CERs du moment</h2>
          <a 
            href="#" 
            className="text-decoration-none"
            onClick={(e) => { e.preventDefault(); setCurrentPage('cers'); }}
          >
            Voir tout <span>→</span>
          </a>
        </div>
        <p className="text-muted small mb-4">
          Ces projets sont classés parmi les meilleurs en fonction de leur note, pertinence et utilité
        </p>

        <div className="row g-4">
          {cers.map((cer) => (
            <div key={cer.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div 
                  className="card-img-top bg-secondary position-relative" 
                  style={{height: '200px', overflow: 'hidden'}}
                >
                  <img 
                    src={cer.image} 
                    alt={cer.title}
                    className="w-100 h-100 object-fit-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <button 
                    className="btn btn-light rounded-circle position-absolute top-0 end-0 m-3"
                    style={{width: '40px', height: '40px'}}
                  >
                    ♡
                  </button>
                </div>
                <div className="card-body">
                  <p className="text-muted small mb-2">{cer.category}</p>
                  <h5 className="card-title fw-bold mb-3">{cer.title}</h5>
                  <p className="card-text text-muted small mb-3">
                    {cer.description}
                  </p>
                  <div className="d-flex justify-content-between align-items-center text-muted small">
                    <span>{cer.author}</span>
                    <span>{cer.date}</span>
                  </div>
                </div>
                <div className="card-footer bg-white border-0 pt-0">
                  <button className="btn btn-outline-warning w-100">
                    Consulter le CER
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
