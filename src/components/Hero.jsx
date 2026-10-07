import { useTranslation } from 'react-i18next';
import personajeImg from '../assets/foto-banner-esqueleto.jpg';
import './hero.css';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero section-padding">
      <div className="hero-content">
        <h1 className="hero-title">THE NEW<br />E.R.A.</h1>
        <h3 className="hero-subtitle text-green">{t('hero.subtitle')}</h3>
        
        <p className="hero-description text-muted">
          {t('hero.description')}
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary">{t('hero.btnPrimary')}</button>
          <button className="btn-secondary">{t('hero.btnSecondary')}</button>
        </div>

        
      </div>

      <div className="hero-image-container">
        {/* 2. Reemplazas el cuadro temporal por la imagen real */}
        <img 
          src={personajeImg} 
          alt="Personaje The New ERA" 
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;