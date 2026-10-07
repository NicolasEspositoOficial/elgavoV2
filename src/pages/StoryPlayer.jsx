import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './StoryPlayer.css';

// Esta estructura simula EXACTAMENTE lo que tu backend en Node.js nos enviará 
// después de que lo configures desde el futuro Panel Admin.
const historiaMock = {
  id_historia: 2,
  titulo: "AIRPORT CONNECTION: UNEXPECTED CHANGE",
  descripcion: "Practice English while you solve an unexpected change during airport connection. Every A/B/C/D choice changes the next scene.",
  categoria: "TRAVEL",
  dificultad: "BASIC",
  total_decisiones: 20,
  preguntas: [
    {
      id_pregunta: 1,
      numero: 3, // Simulando que vamos en la pregunta 3
      escenario: "AIRPORT",
      contexto: "Your curiosity reveals a detail that was not obvious before. A gate agent brings up the unclear detail connected to unexpected change. Your route has developed through 2 choices (1 direct, 1 curious, 0 adaptive, 0 careful), and the latest move was curious.",
      pregunta: "In \"Airport Connection: Unexpected Change\", Which question helps you discover the most useful detail? You need to clear up an unclear point while discussing the departure plan in unexpected change.",
      opciones: [
        { id: 'A', texto: "Using the extra context you discovered, i'd like to confirm the unclear detail for \"Airport Connection: Unexpected Change\" at decision 3 for the your connection now, please.", ruta: "DIRECT ROUTE" },
        { id: 'B', texto: "Using the extra context you discovered, could you explain how the unclear detail for \"Airport Connection: Unexpected Change\" at decision 3 affects the your connection before we continue?", ruta: "CURIOUS ROUTE" },
        { id: 'C', texto: "Using the extra context you discovered, if the unclear detail for \"Airport Connection: Unexpected Change\" at decision 3 changes, I can adjust the your connection; what works best now?", ruta: "ADAPTIVE ROUTE" },
        { id: 'D', texto: "Using the extra context you discovered, before we decide on the unclear detail for \"Airport Connection: Unexpected Change\" at decision 3, could we review the options?", ruta: "CAREFUL ROUTE" }
      ]
    }
  ]
};

function StoryPlayer() {
  const { id } = useParams(); // Obtiene el ID de la historia desde la URL
  const [pasoActual, setPasoActual] = useState(0);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  // Cargamos la pregunta actual basada en el paso en el que vamos
  const preguntaActual = historiaMock.preguntas[pasoActual];

  const manejarEnvio = () => {
    if (!opcionSeleccionada) return;
    
    console.log("Enviando respuesta al backend:", opcionSeleccionada);
    // Aquí irá el POST para guardar el error o acierto en la base de datos para el seguimiento del Admin
    
    // Y luego pasamos a la siguiente pregunta:
    // setPasoActual(pasoActual + 1);
  };

  return (
    <>
      <Navbar />
      
      <div className="player-page">
        <div className="player-container">
          
          {/* COLUMNA IZQUIERDA: Info de la Historia */}
          <aside className="player-sidebar">
            <Link to="/historias" className="back-link">← Back to stories</Link>
            
            <p className="active-label">ACTIVE STORY</p>
            <h1 className="sidebar-title">{historiaMock.titulo}</h1>
            <p className="sidebar-desc">{historiaMock.descripcion}</p>
            
            <div className="sidebar-tags">
              <span className="tag">{historiaMock.categoria}</span>
              <span className="tag">{historiaMock.dificultad}</span>
            </div>
            
            <div className="progress-section">
              <div className="progress-bar">
                {/* Calculamos el porcentaje de la barra */}
                <div className="progress-fill" style={{ width: `${(preguntaActual.numero / historiaMock.total_decisiones) * 100}%` }}></div>
              </div>
              <p className="progress-text">Decision {preguntaActual.numero} of {historiaMock.total_decisiones}</p>
            </div>

            <div className="sidebar-actions">
              <button className="btn-sidebar">🔊 LISTEN</button>
              <button className="btn-sidebar">↻ RESTART</button>
            </div>
          </aside>

          {/* COLUMNA DERECHA: El Escenario Interactivo */}
          <main className="player-main">
            <div className="scenario-header">
              <span className="scenario-tag">LIVE SCENARIO • {preguntaActual.escenario}</span>
              <span className="scenario-number">0{preguntaActual.numero}</span>
            </div>

            <p className="scenario-context">{preguntaActual.contexto}</p>
            <h2 className="scenario-question">{preguntaActual.pregunta}</h2>

            <div className="options-container">
              {preguntaActual.opciones.map((opcion) => (
                <div 
                  key={opcion.id} 
                  className={`option-card ${opcionSeleccionada === opcion.id ? 'selected' : ''}`}
                  onClick={() => setOpcionSeleccionada(opcion.id)}
                >
                  <p className="option-text"><strong>{opcion.id})</strong> {opcion.texto}</p>
                  <span className="option-route">{opcion.ruta}</span>
                </div>
              ))}
            </div>

            {/* Botón de Enviar que solo aparece si se seleccionó una opción */}
            {opcionSeleccionada && (
              <button className="btn-submit-answer" onClick={manejarEnvio}>
                CONFIRMAR DECISIÓN →
              </button>
            )}
          </main>

        </div>
      </div>
    </>
  );
}

export default StoryPlayer;