import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// 1. IMPORTA TU NAVBAR, FOOTER, EL HERO Y LA EXPERIENCIA
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import InteractiveHero from '../components/InteractiveHero';
import InteractiveExperience from '../components/InteractiveExperience';

import './StoryCatalog.css';

const historiasFalsas = [
  { id: 1, titulo: 'AIRPORT CONNECTION: FIRST STEPS', desc: 'Practice English while you handle the first key moment during airport connection. Every A/B/C/D choice changes the next scene.', categoria: 'Travel', dificultad: 'Basic' },
  { id: 2, titulo: 'AIRPORT CONNECTION: UNEXPECTED CHANGE', desc: 'Practice English while you solve an unexpected change during airport connection. Every A/B/C/D choice changes the next scene.', categoria: 'Travel', dificultad: 'Basic' },
  { id: 3, titulo: 'AIRPORT CONNECTION: CLEAR COMMUNICATION', desc: 'Practice English while you make the conversation clearer during airport connection. Every A/B/C/D choice changes the next scene.', categoria: 'Travel', dificultad: 'Basic' },
  { id: 4, titulo: 'AIRPORT CONNECTION: TIME PRESSURE', desc: 'Practice English while you respond while time is limited during airport connection. Every A/B/C/D choice changes the next scene.', categoria: 'Travel', dificultad: 'Intermediate' },
  { id: 5, titulo: 'AIRPORT CONNECTION: NEW CONNECTION', desc: 'Practice English while you build trust with someone new during airport connection. Every A/B/C/D choice changes the next scene.', categoria: 'Travel', dificultad: 'Intermediate' },
  { id: 6, titulo: 'AIRPORT CONNECTION: PROBLEM SOLVING', desc: 'Practice English while you solve a practical problem during airport connection. Every A/B/C/D choice changes the next scene.', categoria: 'Travel', dificultad: 'Intermediate' }
];

function StoryCatalog() {
  const { t } = useTranslation(); 
  const [busqueda, setBusqueda] = useState('');
  const [filtroActivo, setFiltroActivo] = useState('All');

  const categorias = ['All', 'Travel', 'Work', 'Real life', 'University', 'Sports'];

  const historiasFiltradas = historiasFalsas.filter(historia => {
    const coincideTexto = historia.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCat = filtroActivo === 'All' || historia.categoria === filtroActivo;
    return coincideTexto && coincideCat;
  });

  return (
    <>
      <Navbar />

      <InteractiveHero />

      {/* 2. AQUÍ SE RENDERIZA EL NUEVO BLOQUE DE EXPERIENCIA */}
      <InteractiveExperience />

      <div className="catalog-page" id="catalogo">
        <div className="catalog-content">
          <div className="catalog-header">
            <p className="pre-title">{t('stories.pre_title')}</p>
            <h1 className="main-title">{t('stories.title')}</h1>
          </div>

          <div className="catalog-controls">
            <input 
              type="text" 
              className="search-bar" 
              placeholder={t('stories.search_placeholder')}
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <div className="filter-pills">
              {categorias.map(cat => (
                <button 
                  key={cat}
                  className={`pill-btn ${filtroActivo === cat ? 'active' : ''}`}
                  onClick={() => setFiltroActivo(cat)}
                >
                  {cat === 'All' ? t('stories.filter_all') : 
                   cat === 'Travel' ? t('stories.filter_travel') : 
                   cat === 'Work' ? t('stories.filter_work') : 
                   cat === 'Real life' ? t('stories.filter_real_life') : 
                   cat === 'University' ? t('stories.filter_university') : 
                   cat === 'Sports' ? t('stories.filter_sports') : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="stories-grid">
            {historiasFiltradas.map(historia => (
              <div className="story-card" key={historia.id}>
                <div className="card-icon">✈️</div>
                <h3 className="card-title">{historia.titulo}</h3>
                <p className="card-desc">{historia.desc}</p>
                
                <div className="card-tags">
                  <span className="tag">{historia.categoria}</span>
                  <span className="tag">{historia.dificultad}</span>
                  <span className="tag">20 {t('stories.decisions_tag')}</span>
                </div>

                <Link to={`/historia/${historia.id}`} className="btn-start-route">
                  {t('stories.btn_start')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default StoryCatalog;