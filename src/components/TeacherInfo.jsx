import { useTranslation } from 'react-i18next';
import './TeacherInfo.css';
import fotoFluidez from '../assets/imagen-de-sonido-fluidez.png';

function TeacherInfo() {
  const { t } = useTranslation();

  return (
    <section className="teacher-info section-padding">
        <div className="bloqueDeTituloIntroduccion">
            <span className="subtituloDeBloque">{t('teacherInfo.subtitle')}</span>
            <h2 className="section-title">{t('teacherInfo.title')}</h2>
        </div>
        
      
      <div className="teacher-columnsV1">
        <div className="columnV1">
          <p className="text-muted">
            {t('teacherInfo.col1_1')}<strong> {t('teacherInfo.col1_bold1')}</strong>{t('teacherInfo.col1_2')}<strong> {t('teacherInfo.col1_bold2')}</strong>
          </p>
          <h4 className="text-green mt-20">{t('teacherInfo.col1_h4')}<br/>THE NEW E.R.A</h4>
        </div>
        <div className="columnV1">
          <p className="text-muted">
            {t('teacherInfo.col2')}
          </p>
        </div>
        <div className="columnV1">
          <p className="text-muted">
            <strong>{t('teacherInfo.col3_bold')}</strong> <br/>{t('teacherInfo.col3')}
          </p>
        </div>
      </div>

      <div className="banner-fluidezV1">
        <div className="containerBanner-image-fluidezV1">
          <img src={fotoFluidez} className="banner-image-fluidezV1" alt="Banner Fluidez" />
        </div>
        <div className="banner-content-fluidezV1">
            <h4>{t('teacherInfo.banner_subtitle')}</h4>
          <h3 className="banner-title-fluidezV1">{t('teacherInfo.banner_title')}</h3>
          <p className="text-muted">
            {t('teacherInfo.banner_desc')}
          </p>
          <blockquote className="quote-box">
            {t('teacherInfo.banner_quote')}
          </blockquote>

            <div className="containerEtiquetasFluidezV1">
                <span className="etiquetaFluidez">{t('teacherInfo.tag1')}</span>
                <span className="etiquetaFluidez">{t('teacherInfo.tag2')}</span>
                <span className="etiquetaFluidez">{t('teacherInfo.tag3')}</span>
                <span className="etiquetaFluidez">{t('teacherInfo.tag4')}</span>
                <span className="etiquetaFluidez">{t('teacherInfo.tag5')}</span>
            </div>
        </div>
      </div>
    </section>
  );
}

export default TeacherInfo;