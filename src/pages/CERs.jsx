import React, { useState } from 'react';

const CERs = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [sortBy, setSortBy] = useState('titre');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { name: 'Tous', count: 24 },
    { name: 'API', count: 8 },
    { name: 'Web', count: 6 },
    { name: 'Mobile', count: 5 },
    { name: 'DevOps', count: 3 },
    { name: 'Cloud', count: 2 }
  ];

  const cers = [
    {
      id: 1,
      category: "API Bridge Réseaux",
      title: "Projet 1.2 Avancée Archiva Discovery",
      description: "Ce projet améliore les fonctionnalités de recherche avancée dans Archiva. Il implémente des algorithmes de recherche intelligents et des filtres personnalisables...",
      author: "SIELINOU NOËLLE",
      date: "12 janvier 2025",
      image: "../src/assets/1.png"
    },
    {
      id: 2,
      category: "API Projets Web",
      title: "Projet 2.3 Modélisation UML",
      description: "Une étude complète de la modélisation UML appliquée aux systèmes d'information. Ce projet couvre les diagrammes de classes, de séquences et d'activités...",
      author: "SIMO DORIAN",
      date: "15 janvier 2025",
      image: "../src/assets/2.png"
    },
    {
      id: 3,
      category: "API Digital Research",
      title: "Projet 3.1 API et Webservices",
      description: "Mise en place d'une architecture microservices complète avec documentation OpenAPI. Intégration de patterns REST et GraphQL pour une flexibilité maximale...",
      author: "SOUOP ASTRID",
      date: "18 janvier 2025",
      image: "../src/assets/3.png"
    },
    {
      id: 4,
      category: "API Développement logiciel",
      title: "Projet 4 | Développement mobile",
      description: "Développement d'applications mobiles cross-platform avec React Native. Gestion de l'état, navigation, et intégration d'API tierces pour une expérience utilisateur optimale...",
      author: "AMBIANA THIBAUD",
      date: "20 janvier 2025",
      image: "../src/assets/4.png"
    },
    {
      id: 5,
      category: "API Révolutions Digitales",
      title: "Projet 4.1 Architecture eCommerce",
      description: "Conception d'une plateforme e-commerce scalable avec gestion des paiements, inventaire et livraisons. Architecture orientée événements pour une meilleure résilience...",
      author: "NOUPIGANG CRIS",
      date: "22 janvier 2025",
      image: "../src/assets/5.png"
    },
    {
      id: 6,
      category: "API Bridge Réseaux",
      title: "Projet 4.3 Architecture distribuée",
      description: "Implémentation d'un système distribué robuste avec gestion de la cohérence éventuelle. Utilisation de Kafka pour le streaming de données et Redis pour le cache...",
      author: "MUKAM SERGE",
      date: "25 janvier 2025",
      image: "../src/assets/6.png"
    }
  ];

  // Filtrer par recherche et catégorie
  const filteredCers = cers
    .filter(cer =>
      (selectedCategory === 'Tous' || cer.category.includes(selectedCategory)) &&
      (cer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       cer.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'titre') return a.title.localeCompare(b.title);
      if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      return 0;
    });

  return (
    <div className="bg-light min-vh-100">
      <div className="bg-white border-bottom">
        <div className="container py-4">
          <h1 className="h3 fw-bold mb-4">Tous les CERs</h1>

          {/* Recherche + filtres */}
          <div className="row g-3 mb-4">
            <div className="col-lg-4">
              <input
                type="text"
                className="form-control"
                placeholder="Rechercher par titre ou mot-clé"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="col-lg-3">
              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name} ({cat.count})
                  </option>
                ))}
              </select>
            </div>

            <div className="col-lg-3">
              <select
                className="form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="titre">Trier par titre</option>
                <option value="date">Trier par date</option>
              </select>
            </div>

            <div className="col-lg-2 d-flex justify-content-end">
              <button
                className={`btn me-2 ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setViewMode('grid')}
              >
                Grille
              </button>
              <button
                className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setViewMode('list')}
              >
                Liste
              </button>
            </div>
          </div>

          {/* Résultats */}
          <div className={viewMode === 'grid' ? 'row g-4' : 'list-group'}>
            {filteredCers.map(cer => (
              <div
                key={cer.id}
                className={viewMode === 'grid' ? 'col-md-4' : 'list-group-item'}
              >
                <div className="card h-100 shadow-sm">
                  <img
                    src={cer.image}
                    className="card-img-top"
                    alt={cer.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{cer.title}</h5>
                    <p className="card-text text-muted">{cer.description}</p>
                  </div>
                  <div className="card-footer text-muted small">
                    Par {cer.author} • {cer.date}
                  </div>
                </div>
              </div>
            ))}

            {filteredCers.length === 0 && (
              <p className="text-center text-muted">Aucun résultat trouvé.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CERs;
