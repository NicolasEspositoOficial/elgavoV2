function CallToAction() {
  return (
    <section className="cta-section section-padding">
      
      {/* Bloque 1: Entiende. Decide. Habla. */}
      <div className="cta-block border-bottom">
        <div className="cta-text">
          <h2 className="cta-title">ENTIENDE.<br/>DECIDE.<br/>HABLA.</h2>
          <p className="text-muted">
            Las decisiones se toman en segundos. El idioma no debe ser 
            una barrera, sino tu mejor herramienta de conexión.
          </p>
        </div>
        
        <div className="cta-card purple-card">
          <p>Llegas a un concierto en Londres. Alguien te pregunta: <em>"Can I help you?"</em></p>
          <div className="cta-card-buttons">
            <button className="btn-primary">Responder con seguridad</button>
            <button className="btn-secondary">Quedarte en blanco</button>
          </div>
        </div>
      </div>

      {/* Bloque 2: Cierre final */}
      <div className="cta-block">
        <div className="cta-text">
          <h2 className="cta-title">"EL CONOCIMIENTO NO SIRVE DE MUCHO CUANDO UNO SE LO GUARDA."</h2>
          <p className="text-muted">
            Has llegado hasta aquí. Sabes que el método tradicional no funciona. 
            Es hora de intentar algo diseñado para tu cerebro.
          </p>
          <h3 className="text-green welcome-text">WELCOME!</h3>
        </div>
        
        <div className="cta-card dark-card">
          <h3>¿LISTO PARA EMPEZAR?</h3>
          <p className="text-muted" style={{ marginBottom: '20px' }}>
            Únete a la nueva era del aprendizaje y domina la fluidez.
          </p>
          <button className="btn-primary full-width">COMENZAR MI CAMINO</button>
        </div>
      </div>

    </section>
  );
}

export default CallToAction;