import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>ELGAVO</h2>
        <div className="logo-underline"></div>
      </div>
      
      <ul className="navbar-links">
        <li><a href="/#inicio">{t('nav.home')}</a></li>
        <li><a href="/#metodologia" className="text-green">{t('nav.methodology')}</a></li>
        <li><a href="/#precios">{t('nav.pricing')}</a></li>
        <li><a href="/#programa">{t('nav.program')}</a></li>
        
        {/* Nuevo enlace al catálogo de historias usando Link */}
        <li><Link to="/historias" className="text-green">{t('nav.interactive')}</Link></li>
        
        <li><a href="/#contacto">{t('nav.contact')}</a></li>
      </ul>

      <div className="navbar-actions">
        <span className="lang-selector">
          <strong 
            onClick={() => changeLanguage('es')} 
            className={i18n.language === 'es' ? 'text-green' : 'text-muted'}
            style={{ cursor: 'pointer' }}
          >ES</strong> 
          <span className="text-muted"> | </span>
          <strong 
            onClick={() => changeLanguage('en')} 
            className={i18n.language === 'en' ? 'text-green' : 'text-muted'}
            style={{ cursor: 'pointer' }}
          >EN</strong>
        </span>
        
        <Link to="/login">
          <button className="btn-login">{t('nav.login')}</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;