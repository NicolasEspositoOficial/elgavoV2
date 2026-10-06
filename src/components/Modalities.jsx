function Modalities() {
  const modalities = [
    { title: 'CLASES PARTICULARES', desc: 'Atención 1 a 1. Avanza a tu propio ritmo con correcciones instantáneas y personalizadas.' },
    { title: 'PLANES MENSUALES', desc: 'Acceso a la plataforma y rutinas de estudio diseñadas para mantenerte constante.' },
    { title: 'CURSO INTENSIVO', desc: 'Inmersión total. Para quienes necesitan resultados rápidos y están dispuestos a dar el 100%.', highlight: true },
    { title: 'MASTERCLASSES', desc: 'Sesiones grupales enfocadas en resolver dudas específicas y practicar conversación real.' }
  ];

  return (
    <section className="modalities-section section-padding">
      <div className="modalities-header">
        <h4 className="text-green subtitle-small">ADAPTADO A TU RITMO</h4>
        <h2 className="section-title">MODALIDADES DE APRENDIZAJE</h2>
      </div>

      <div className="modalities-grid">
        {modalities.map((mod, index) => (
          <div className="modality-card" key={index}>
            <div className="modality-icon">
               {mod.highlight ? '🔥' : '💀'}
            </div>
            <h4>{mod.title}</h4>
            <p className="text-muted">{mod.desc}</p>
            <a href="#contacto" className="link-arrow">Ver disponibilidad &rarr;</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Modalities;