import { useTranslation } from 'react-i18next';
import './CallToAction.css';

function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className="cta-v2-section section-padding">
      
      {/* BLOQUE 1: HISTORIAS INTERACTIVAS */}
      <div className="cta-v2-block">
        <div className="cta-v2-text-content">
          <span className="cta-v2-subtitle-green">{t('cta.interactive_subtitle')}</span>
          <h2 className="cta-v2-title">{t('cta.interactive_title1')}<br/>{t('cta.interactive_title2')}</h2>
          <p className="cta-v2-desc">
            {t('cta.interactive_desc')}
          </p>
          <div className="cta-v2-tags">
            <span className="cta-v2-tag">{t('cta.tag1')}</span>
            <span className="cta-v2-tag">{t('cta.tag2')}</span>
            <span className="cta-v2-tag">{t('cta.tag3')}</span>
            <span className="cta-v2-tag">{t('cta.tag4')}</span>
          </div>
        </div>
        
        <div className="cta-v2-card cta-v2-card-interactive">
          <div className="cta-v2-icons">
             🎸 🌙 ⚡ 🤘
          </div>
          <span className="cta-v2-live-text">{t('cta.live_scenario')}</span>
          <h3 className="cta-v2-scenario">
            {t('cta.scenario_question')}
          </h3>
          <div className="cta-v2-scenario-btns">
            <button className="cta-v2-btn-a">{t('cta.scenario_btn_a')}</button>
            <button className="cta-v2-btn-b">{t('cta.scenario_btn_b')}</button>
          </div>
          <p className="cta-v2-card-footer">{t('cta.scenario_footer')}</p>
        </div>
      </div>

      {/* BLOQUE 2: CIERRE FINAL */}
      <div className="cta-v2-block cta-v2-margin-top">
        <div className="cta-v2-text-content">
          <span className="cta-v2-subtitle-gray">{t('cta.closing_subtitle')}</span>
          <h2 className="cta-v2-title">{t('cta.closing_title')}</h2>
          <p className="cta-v2-desc">
            {t('cta.closing_desc')}
          </p>
          <h3 className="cta-v2-welcome">{t('cta.closing_welcome')}</h3>
        </div>
        
        <div className="cta-v2-card cta-v2-card-contact">
          <h2 className="cta-v2-contact-title">{t('cta.contact_title')}</h2>
          <p className="cta-v2-contact-desc">
            {t('cta.contact_desc')}
          </p>
          
          <div className="cta-v2-contact-btns">
            <button className="cta-v2-btn-whatsapp">WHATSAPP · +57 324 832 4224</button>
            <button className="cta-v2-btn-email">DEMENTEREVES@GMAIL.COM</button>
          </div>

          <div className="cta-v2-socials">
            <span>YouTube</span>
            <span>TikTok</span>
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>

    </section>
  );
}

export default CallToAction;