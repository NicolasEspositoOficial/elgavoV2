import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Recover.css';

function Recover() {
  const { t, i18n } = useTranslation();

  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');

    try {
      // Aquí dejaremos preparada la petición para cuando creemos la ruta en tu backend
      /*
      const respuesta = await fetch('http://localhost:5000/api/users/recover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo }),
      });
      const data = await respuesta.json();
      if (!respuesta.ok) throw new Error(data.mensaje);
      */
      
      // Simulamos que el envío fue exitoso (quitar esto cuando conectes el backend real)
      setMensaje('Si el correo existe en nuestra base de datos, recibirás un enlace para restablecer tu contraseña.');
      setCorreo('');

    } catch (err) {
      console.error('Error:', err);
      setError('Error al procesar la solicitud.');
    }
  };

  return (
    <div className="recover-page">
      <div className="recover-lang-selector">
        <strong onClick={() => changeLanguage('es')} className={i18n.language === 'es' ? 'text-green' : 'text-muted'} style={{cursor: 'pointer'}}>ES</strong> 
        <span className="text-muted"> | </span>
        <strong onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'text-green' : 'text-muted'} style={{cursor: 'pointer'}}>EN</strong>
      </div>

      <div className="recover-container">
        <div className="recover-header">
          <h2 className="recover-logo">ELGAVO</h2>
          <div className="logo-underline-small" style={{ margin: '0 auto 20px auto' }}></div>
          <h1 className="recover-title">{t('recover.title')}</h1>
          <p className="text-muted">{t('recover.subtitle')}</p>
        </div>

        {error && <div className="message-box error">{error}</div>}
        {mensaje && <div className="message-box success">{mensaje}</div>}

        <form className="recover-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>{t('recover.email_label')}</label>
            <input 
              type="email" 
              placeholder={t('recover.email_placeholder')} 
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="btn-recover-submit">{t('recover.btn_submit')}</button>
        </form>

        <div className="recover-footer">
          <Link to="/login" className="back-link">{t('recover.back_login')}</Link>
        </div>
      </div>
    </div>
  );
}

export default Recover;