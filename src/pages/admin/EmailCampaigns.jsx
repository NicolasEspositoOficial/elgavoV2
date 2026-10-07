import './EmailCampaigns.css';

function EmailCampaigns() {
  const copiarEtiqueta = (e) => {
    navigator.clipboard.writeText('{{nombre_estudiante}}');
    const textoOriginal = e.target.innerText;
    e.target.innerText = '¡Copiado!';
    setTimeout(() => e.target.innerText = textoOriginal, 2000);
  };

  return (
    <div className="admin-panel">
      <h2>Campañas de Correo</h2>
      
      <div className="email-helper-box">
        <strong>💡 Tip de Personalización:</strong> 
        Para saludar al usuario por su nombre, copia y pega esta etiqueta exacta en tu asunto o mensaje: 
        <code className="copy-tag" onClick={copiarEtiqueta}>{`{{nombre_estudiante}}`}</code>
      </div>

      <form className="email-form">
        <div className="form-group">
          <label>Asunto del correo</label>
          <input type="text" placeholder="Ej: ¡Hola {{nombre_estudiante}}, tenemos una oferta para ti!" />
        </div>
        <div className="form-group">
          <label>Mensaje HTML o Texto</label>
          <textarea rows="10" placeholder="Escribe tu mensaje aquí..."></textarea>
        </div>
        <button type="button" className="btn-admin-primary">Enviar Correos Masivos</button>
      </form>
    </div>
  );
}

export default EmailCampaigns;