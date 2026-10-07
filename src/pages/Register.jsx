import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Estados para los 6 campos de la base de datos
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [telefono, setTelefono] = useState('');
  
  const [error, setError] = useState('');
  const [exito, setExito] = useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setExito('');

    try {
      const respuesta = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, apellidos, correo, contrasena, fechaNacimiento, telefono }),
      });

      const data = await respuesta.json();

      if (respuesta.ok) {
        setExito('¡Registro exitoso! Redirigiendo a los planes...');
        // Guardamos temporalmente el ID o correo del usuario recién creado para asignarle el plan luego
        localStorage.setItem('nuevo_usuario_correo', correo); 
        
        // Lo enviamos a la pantalla de selección de planes
        setTimeout(() => {
          navigate('/seleccionar-plan');
        }, 2000);
      } else {
        setError(data.mensaje); // Mostrará si el correo ya existe, por ejemplo
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-lang-selector">
        <strong onClick={() => changeLanguage('es')} className={i18n.language === 'es' ? 'text-green' : 'text-muted'} style={{cursor: 'pointer'}}>ES</strong> 
        <span className="text-muted"> | </span>
        <strong onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'text-green' : 'text-muted'} style={{cursor: 'pointer'}}>EN</strong>
      </div>

      <div className="register-container">
        <div className="register-header">
          <h2 className="register-logo">ELGAVO</h2>
          <div className="logo-underline-small" style={{ margin: '0 auto 20px auto' }}></div>
          <h1 className="register-title">{t('register.title')}</h1>
          <p className="text-muted">{t('register.subtitle')}</p>
        </div>

        {error && <div className="message-box error">{error}</div>}
        {exito && <div className="message-box success">{exito}</div>}

        <form className="register-form" onSubmit={handleSubmit}>
          {/* Agrupamos Nombre y Apellido en una sola fila */}
          <div className="form-row">
            <div className="input-group">
              <label>{t('register.name_label')}</label>
              <input type="text" placeholder={t('register.name_placeholder')} value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>
            <div className="input-group">
              <label>{t('register.lastname_label')}</label>
              <input type="text" placeholder={t('register.lastname_placeholder')} value={apellidos} onChange={(e) => setApellidos(e.target.value)} required />
            </div>
          </div>

          <div className="input-group">
            <label>{t('register.email_label')}</label>
            <input type="email" placeholder={t('register.email_placeholder')} value={correo} onChange={(e) => setCorreo(e.target.value)} required />
          </div>

          <div className="input-group">
            <label>{t('register.password_label')}</label>
            <input type="password" placeholder={t('register.password_placeholder')} value={contrasena} onChange={(e) => setContrasena(e.target.value)} required minLength="6" />
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>{t('register.birth_label')}</label>
              <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
            </div>
            <div className="input-group">
              <label>{t('register.phone_label')}</label>
              <input type="tel" placeholder={t('register.phone_placeholder')} value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
            </div>
          </div>

          <button type="submit" className="btn-register-submit">{t('register.btn_submit')}</button>
        </form>

        <div className="register-footer">
          <p className="text-muted">
            {t('register.have_account')} <Link to="/login" className="text-green">{t('register.login_link')}</Link>
          </p>
          <Link to="/" className="back-link">{t('register.back_home')}</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;