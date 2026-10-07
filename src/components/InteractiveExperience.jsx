import { useTranslation } from 'react-i18next';
import './InteractiveExperience.css';

function InteractiveExperience() {
  const { t } = useTranslation();

  return (
    <section className="interactive-experience" id="como-funciona">
      <div className="experience-container">
        
        <div className="experience-header">
          <p className="exp-pretitle">{t('experience.pre_title')}</p>
          <h2 className="exp-title">{t('experience.title')}</h2>
          <p className="exp-desc">
            {t('experience.desc_1')}<br/>
            {t('experience.desc_2')}
          </p>
        </div>

        <div className="experience-grid">
          <div className="exp-card">
            <div className="step-badge">01</div>
            <h3 className="step-title">{t('experience.step1_title')}</h3>
            <p className="step-desc">{t('experience.step1_desc')}</p>
          </div>

          <div className="exp-card">
            <div className="step-badge">02</div>
            <h3 className="step-title">{t('experience.step2_title')}</h3>
            <p className="step-desc">{t('experience.step2_desc')}</p>
          </div>

          <div className="exp-card">
            <div className="step-badge">03</div>
            <h3 className="step-title">{t('experience.step3_title')}</h3>
            <p className="step-desc">{t('experience.step3_desc')}</p>
          </div>

          <div className="exp-card">
            <div className="step-badge">04</div>
            <h3 className="step-title">{t('experience.step4_title')}</h3>
            <p className="step-desc">{t('experience.step4_desc')}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default InteractiveExperience;