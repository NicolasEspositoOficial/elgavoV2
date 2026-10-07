import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Estados para capturar los datos
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const respuesta = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, contrasena }),
      });

      const data = await respuesta.json();

      if (respuesta.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('usuario', JSON.stringify(data.usuario));
        navigate('/'); // Redirige al inicio si es exitoso
      } else {
        setError(data.mensaje); // Muestra error si la contraseña está mal
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-lang-selector">
        <strong onClick={() => changeLanguage('es')} className={i18n.language === 'es' ? 'text-green' : 'text-muted'} style={{cursor: 'pointer'}}>ES</strong> 
        <span className="text-muted"> | </span>
        <strong onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'text-green' : 'text-muted'} style={{cursor: 'pointer'}}>EN</strong>
      </div>

      <div className="login-container">
        <div className="login-header">
          <h2 className="login-logo">ELGAVO</h2>
          <div className="logo-underline-small" style={{ margin: '0 auto 20px auto' }}></div>
          <h1 className="login-title">{t('login.title')}</h1>
          <p className="text-muted">{t('login.subtitle')}</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>{t('login.email_label')}</label>
            <input 
              type="email" 
              placeholder={t('login.email_placeholder')} 
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required 
            />
          </div>

          <div className="input-group">
            <label>{t('login.password_label')}</label>
            <input 
              type="password" 
              placeholder={t('login.password_placeholder')} 
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required 
            />
          </div>

          {/* Cambiado a componente Link apuntando a /recuperar */}
          <Link to="/recuperar" className="forgot-link">{t('login.forgot_password')}</Link>
          
          <button type="submit" className="btn-login-submit">{t('login.btn_submit')}</button>
        </form>

        <div className="login-footer">
          <p className="text-muted">
            {/* Cambiado a componente Link apuntando a /registro */}
            {t('login.no_account')} <Link to="/registro" className="text-green">{t('login.register_link')}</Link>
          </p>
          <Link to="/" className="back-link">{t('login.back_home')}</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;