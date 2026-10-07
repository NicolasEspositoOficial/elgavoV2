import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">ELGAVO</h2>
          <div className="logo-underline-small"></div>
          <p className="text-muted mt-20">
            {t('footer.desc')}
          </p>
        </div>
        
        <div className="footer-links-group">
          <h4>{t('footer.nav_title')}</h4>
          <ul>
            <li><a href="#inicio">{t('footer.nav_home')}</a></li>
            <li><a href="#metodologia">{t('footer.nav_methodology')}</a></li>
            <li><a href="#programa">{t('footer.nav_program')}</a></li>
            <li><a href="#precios">{t('footer.nav_pricing')}</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>{t('footer.legal_title')}</h4>
          <ul>
            <li><a href="#terminos">{t('footer.legal_terms')}</a></li>
            <li><a href="#privacidad">{t('footer.legal_privacy')}</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="text-muted">
          &copy; {new Date().getFullYear()} KERN Agency / ELGAVO. {t('footer.rights')}
        </p>
        <div className="footer-socials">
          <span>YT</span>
          <span>TK</span>
          <span>IG</span>
          <span>FB</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;