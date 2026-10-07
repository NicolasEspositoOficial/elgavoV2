import { useTranslation } from 'react-i18next';
import personajeImg from '../assets/foto-banner-esqueleto.jpg';
import './hero.css';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="main-hero-section section-padding">
      <div className="main-hero-content">
        <h1 className="main-hero-title">THE NEW<br />E.R.A.</h1>
        <h3 className="main-hero-subtitle text-green">{t('hero.subtitle')}</h3>
        
        <p className="main-hero-desc text-muted">
          {t('hero.description')}
        </p>
        
        <div className="main-hero-buttons">
          <button className="main-hero-btn-primary">{t('hero.btnPrimary')}</button>
          <button className="main-hero-btn-secondary">{t('hero.btnSecondary')}</button>
        </div>
      </div>

      <div className="main-hero-img-container">
        <img 
          src={personajeImg} 
          alt="Personaje The New ERA" 
          className="main-hero-img"
        />
      </div>
    </section>
  );
}

export default Hero;