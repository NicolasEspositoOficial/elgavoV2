import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './SelectPlan.css';

function SelectPlan() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  
  const [planes, setPlanes] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Se ejecuta al cargar la página para pedir los planes al backend
  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const respuesta = await fetch('http://localhost:5000/api/planes');
        const data = await respuesta.json();
        setPlanes(data);
        setCargando(false);
      } catch (error) {
        console.error("Error al cargar los planes:", error);
        setCargando(false);
      }
    };
    fetchPlanes();
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const manejarSeleccion = (plan) => {
    // Más adelante aquí conectaremos la pasarela de pagos (Stripe, MercadoPago, etc.)
    // Por ahora, redirigimos al login para que el usuario inicie sesión con su cuenta nueva
    console.log("Plan seleccionado:", plan);
    navigate('/login');
  };

  return (
    <div className="select-plan-page">
      <div className="plan-lang-selector">
        <strong onClick={() => changeLanguage('es')} className={i18n.language === 'es' ? 'text-green' : 'text-muted'} style={{cursor: 'pointer'}}>ES</strong> 
        <span className="text-muted"> | </span>
        <strong onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'text-green' : 'text-muted'} style={{cursor: 'pointer'}}>EN</strong>
      </div>

      <div className="plan-header">
        <h2 className="plan-logo">ELGAVO</h2>
        <div className="logo-underline-small" style={{ margin: '0 auto 20px auto' }}></div>
        <h1 className="plan-title">{t('selectPlan.title')}</h1>
        <p className="text-muted">{t('selectPlan.subtitle')}</p>
      </div>

      {cargando ? (
        <div className="loading-text">{t('selectPlan.loading')}</div>
      ) : (
        <div className="planes-grid">
          {planes.map((plan) => (
            <div className={`plan-card ${plan.es_gratis ? 'plan-free' : 'plan-premium'}`} key={plan.id_plan}>
              
              {plan.es_gratis && <div className="badge-free">{t('selectPlan.free_badge')}</div>}
              
              <h3 className="plan-name">{plan.nombre_plan}</h3>
              <div className="plan-price">
                ${plan.precio} <span className="currency">USD</span>
              </div>
              <p className="plan-desc">{plan.descripcion}</p>
              
              <ul className="plan-features">
                {/* Separamos las características por comas según lo guardado en MySQL */}
                {plan.caracteristicas.split(',').map((caracteristica, index) => (
                  <li key={index}><span className="check-icon">✓</span> {caracteristica}</li>
                ))}
              </ul>
              
              <button 
                className={`btn-select-plan ${plan.es_gratis ? 'btn-free' : 'btn-premium'}`}
                onClick={() => manejarSeleccion(plan)}
              >
                {t('selectPlan.btn_select')}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectPlan;