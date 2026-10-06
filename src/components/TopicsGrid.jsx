function TopicsGrid() {
  const topics = [
    { num: '01', title: 'FONÉTICA Y SONIDO', desc: 'Aprende a pronunciar y reconocer los sonidos del inglés desde el primer día.' },
    { num: '02', title: 'SUSTANTIVOS Y DETERMINANTES', desc: 'Identifica y utiliza correctamente los elementos básicos de cualquier oración.' },
    { num: '03', title: 'PRONOMBRES', desc: 'Domina los pronombres para evitar repeticiones y sonar más natural.' },
    { num: '04', title: 'VERBOS', desc: 'El motor del idioma. Aprende a usarlos sin tener que traducir en tu cabeza.' },
    { num: '05', title: 'TIEMPOS VERBALES', desc: 'Comprende el pasado, presente y futuro sin confundirte con fórmulas complejas.' },
    { num: '06', title: 'ADJETIVOS Y ADVERBIOS', desc: 'Dale color y detalle a tus descripciones para comunicarte con precisión.' },
    { num: '07', title: 'PREPOSICIONES Y CONECTORES', desc: 'Une tus ideas de forma fluida y lógica, creando oraciones más largas.' },
    { num: '08', title: 'ESTRUCTURAS INVERSAS', desc: 'Domina las preguntas y estructuras avanzadas que desafían la lógica del español.', highlight: true },
    { num: '09', title: 'AGILIDAD Y FLUIDEZ', desc: 'Pon todo en práctica. Deja de pensar en español y empieza a responder en inglés.' }
  ];

  return (
    <section className="topics-grid-section section-padding">
      <div className="topics-header">
        <div>
          <h4 className="text-green subtitle-small">EL PROGRAMA COMPLETO</h4>
          <h2 className="section-title">UN CAMINO, NO NUEVE TEMAS<br/>AISLADOS</h2>
        </div>
        <p className="text-muted max-w-400">
          Cada módulo representa un paso integral en la formación de tu 
          pensamiento en otro idioma. No saltamos etapas.
        </p>
      </div>

      <div className="grid-container">
        {topics.map((topic, index) => (
          <div className="grid-card" key={index}>
            <div className={`icon-box ${topic.highlight ? 'bg-green' : 'bg-purple'}`}>
              {topic.num}
            </div>
            <h4>{topic.title}</h4>
            <p className="text-muted">{topic.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopicsGrid;