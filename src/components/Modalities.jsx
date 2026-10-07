import { useTranslation } from 'react-i18next';
import './Modalities.css';

function Modalities() {
  const { t } = useTranslation();

  const modalities = [
    { title: t('modalities.mod1_title'), desc: t('modalities.mod1_desc'), icon: '💀' },
    { title: t('modalities.mod2_title'), desc: t('modalities.mod2_desc'), icon: '🗓️' },
    { title: t('modalities.mod3_title'), desc: t('modalities.mod3_desc'), icon: '🔥', highlight: true },
    { title: t('modalities.mod4_title'), desc: t('modalities.mod4_desc'), icon: '🎤' }
  ];

  return (
    <section className="modalities-section section-padding">
      <div className="modalities-header">
        {/* Agrupamos los títulos para que queden a la izquierda */}
        <div className="header-titles">
          <h4 className="text-green subtitle-small">{t('modalities.subtitle')}</h4>
          <h2 className="section-title">{t('modalities.title')}</h2>
        </div>
        <p className="header-description">
          {t('modalities.desc')}
        </p>
      </div>

      <div className="modalities-grid">
        {modalities.map((mod, index) => (
          <div className="modality-card" key={index}>
            <div className="modality-icon">
               {mod.icon}
            </div>
            <h4 className={`card-title-impact ${mod.highlight ? 'text-orange' : ''}`}>
              {mod.title}
            </h4>
            <p className="text-muted">{mod.desc}</p>
            {/* Cambiamos la clase para darle estilo de botón */}
            <a href="#contacto" className="btn-outline">{t('modalities.btn_info')}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Modalities;