import { useState, useEffect } from 'react';

function StoryManager() {
  const [historias, setHistorias] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Estado para el formulario gigante de creación de historia
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    categoria: 'Travel',
    dificultad: 'Basic',
    contexto: '',
    pregunta: '',
    opcion_a: '',
    opcion_b: '',
    opcion_c: '',
    opcion_d: '',
    respuesta_correcta: 'A'
  });

  // Simulamos cargar historias (luego lo conectaremos a tu Node.js)
  useEffect(() => {
    cargarHistorias();
  }, []);

  const cargarHistorias = async () => {
    // Por ahora usamos datos falsos para maquetar
    setHistorias([
      { id_historia: 1, titulo: 'AIRPORT CONNECTION', categoria: 'Travel', dificultad: 'Basic', activo: true }
    ]);
  };

  const guardarHistoria = (e) => {
    e.preventDefault();
    console.log("Datos listos para enviar al backend:", formData);
    alert("Historia guardada (Simulación)");
    setIsModalOpen(false);
  };

  return (
    <div className="admin-panel">
      <div className="panel-header">
        <h2>Gestión de Historias Interactivas</h2>
        <button className="btn-admin-primary" onClick={() => setIsModalOpen(true)}>
          + NUEVA HISTORIA
        </button>
      </div>

      {/* TABLA DE HISTORIAS */}
      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Título del Escenario</th>
              <th>Categoría</th>
              <th>Dificultad</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {historias.map(historia => (
              <tr key={historia.id_historia}>
                <td><strong>{historia.titulo}</strong></td>
                <td>{historia.categoria}</td>
                <td>{historia.dificultad}</td>
                <td><span style={{color: historia.activo ? '#88ff00' : 'red'}}>Activo</span></td>
                <td className="actions-cell">
                  <button className="btn-edit">Editar</button>
                  <button className="btn-delete">Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL PARA CREAR HISTORIA */}
      {isModalOpen && (
        <div className="admin-modal-overlay" style={{ overflowY: 'auto', padding: '20px 0' }}>
          <div className="admin-modal" style={{ maxWidth: '800px', marginTop: 'auto', marginBottom: 'auto' }}>
            <h2>Crear Nuevo Escenario Interactivo</h2>
            
            <form onSubmit={guardarHistoria}>
              {/* SECCIÓN 1: Info General */}
              <h3 style={{ color: '#88ff00', fontSize: '14px', marginBottom: '15px' }}>1. INFORMACIÓN GENERAL</h3>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div className="form-group" style={{ flex: 2 }}>
                  <label>Título del Escenario</label>
                  <input type="text" required value={formData.titulo} onChange={(e) => setFormData({...formData, titulo: e.target.value})} placeholder="Ej: AIRPORT CONNECTION" />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Categoría</label>
                  <select value={formData.categoria} onChange={(e) => setFormData({...formData, categoria: e.target.value})} className="form-input" style={{ width: '100%', padding: '12px', backgroundColor: '#111', color: '#fff', border: '1px solid #2a2235', borderRadius: '6px' }}>
                    <option value="Travel">Travel</option>
                    <option value="Work">Work</option>
                    <option value="Real life">Real life</option>
                  </select>
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Dificultad</label>
                  <select value={formData.dificultad} onChange={(e) => setFormData({...formData, dificultad: e.target.value})} className="form-input" style={{ width: '100%', padding: '12px', backgroundColor: '#111', color: '#fff', border: '1px solid #2a2235', borderRadius: '6px' }}>
                    <option value="Basic">Basic</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Descripción corta (Para la tarjeta del catálogo)</label>
                <textarea required rows="2" value={formData.descripcion} onChange={(e) => setFormData({...formData, descripcion: e.target.value})}></textarea>
              </div>

              {/* SECCIÓN 2: Interacción */}
              <h3 style={{ color: '#88ff00', fontSize: '14px', marginTop: '30px', marginBottom: '15px' }}>2. CONTENIDO INTERACTIVO</h3>
              <div className="form-group">
                <label>Contexto de la situación (Texto superior)</label>
                <textarea required rows="3" value={formData.contexto} onChange={(e) => setFormData({...formData, contexto: e.target.value})}></textarea>
              </div>

              <div className="form-group">
                <label>Pregunta Principal</label>
                <input type="text" required value={formData.pregunta} onChange={(e) => setFormData({...formData, pregunta: e.target.value})} />
              </div>

              {/* Opciones A, B, C, D */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div className="form-group">
                  <label>Opción A</label>
                  <input type="text" required value={formData.opcion_a} onChange={(e) => setFormData({...formData, opcion_a: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Opción B</label>
                  <input type="text" required value={formData.opcion_b} onChange={(e) => setFormData({...formData, opcion_b: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Opción C</label>
                  <input type="text" required value={formData.opcion_c} onChange={(e) => setFormData({...formData, opcion_c: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Opción D</label>
                  <input type="text" required value={formData.opcion_d} onChange={(e) => setFormData({...formData, opcion_d: e.target.value})} />
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '10px' }}>
                <label style={{ color: '#a100ff', fontWeight: 'bold' }}>¿Cuál es la respuesta correcta?</label>
                <select value={formData.respuesta_correcta} onChange={(e) => setFormData({...formData, respuesta_correcta: e.target.value})} style={{ padding: '12px', backgroundColor: '#111', color: '#fff', border: '1px solid #a100ff', borderRadius: '6px' }}>
                  <option value="A">Opción A</option>
                  <option value="B">Opción B</option>
                  <option value="C">Opción C</option>
                  <option value="D">Opción D</option>
                </select>
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                <button type="submit" className="btn-save">Guardar Historia</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default StoryManager;