import { useTranslation } from 'react-i18next';
import './InteractiveHero.css';

function InteractiveHero() {
  const { t } = useTranslation();

  return (
    <section className="interactive-hero">
      <div className="hero-content">
        
        {/* Columna Izquierda: Textos y Estadísticas */}
        <div className="hero-text-side">
          <p className="hero-subtitle">{t('heroInteractive.subtitle')}</p>
          
          <h1 className="hero-main-title">
            <span className="text-white">{t('heroInteractive.title_1')}</span><br/>
            <span className="text-purple">{t('heroInteractive.title_2')}</span><br/>
            <span className="text-white">{t('heroInteractive.title_3')}</span>
          </h1>
          
          <p className="hero-desc">{t('heroInteractive.desc')}</p>
          
          <div className="hero-buttons">
            <a href="#catalogo" className="btn-hero-primary">{t('heroInteractive.btn_explore')}</a>
            <a href="#como-funciona" className="btn-hero-secondary">{t('heroInteractive.btn_how')}</a>
          </div>

          <div className="hero-stats">
            <div className="stat-box">
              <h3>{t('heroInteractive.stat_1_num')}</h3>
              <p>{t('heroInteractive.stat_1_text')}</p>
            </div>
            <div className="stat-box">
              <h3>{t('heroInteractive.stat_2_num')}</h3>
              <p>{t('heroInteractive.stat_2_text')}</p>
            </div>
            <div className="stat-box">
              <h3>{t('heroInteractive.stat_3_num')}</h3>
              <p>{t('heroInteractive.stat_3_text')}</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de Muestra */}
        <div className="hero-card-side">
          <div className="live-demo-card">
            <div className="demo-icons">🎸 🌙 ⚡ 🤘</div>
            <p className="demo-tag">{t('heroInteractive.card_live')}</p>
            
            <h3 className="demo-question">{t('heroInteractive.card_question')}</h3>
            
            <div className="demo-options">
              <button className="opt-demo opt-green">{t('heroInteractive.card_opt_a')}</button>
              <button className="opt-demo opt-purple">{t('heroInteractive.card_opt_b')}</button>
              <button className="opt-demo opt-white">{t('heroInteractive.card_opt_c')}</button>
              <button className="opt-demo opt-white">{t('heroInteractive.card_opt_d')}</button>
            </div>

            <p className="demo-footer">{t('heroInteractive.card_footer')}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default InteractiveHero;