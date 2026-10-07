import { useState } from 'react';
import './StudentDirectory.css';

function StudentDirectory() {
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [estudianteSeleccionado, setEstudianteSeleccionado] = useState(null);

  // Datos simulados (Luego los traeremos de MySQL)
  const estudiantesMock = [
    { id: 1, nombre: 'Carlos Ramírez', email: 'carlos@email.com', plan: 'Pro', progreso: '45%' },
    { id: 2, nombre: 'Ana Gómez', email: 'ana@email.com', plan: 'Premium', progreso: '82%' }
  ];

  const abrirModalEstudiante = (estudiante) => {
    setEstudianteSeleccionado(estudiante);
    setIsStudentModalOpen(true);
  };

  return (
    <div className="admin-panel">
      <h2>Directorio de Estudiantes</h2>
      <div className="table-container">
        <table className="admin-table students-table">
          <thead>
            <tr><th>Nombre</th><th>Email</th><th>Plan Activo</th><th>Progreso</th></tr>
          </thead>
          <tbody>
            {estudiantesMock.map(est => (
              <tr key={est.id} onClick={() => abrirModalEstudiante(est)} className="clickable-row">
                <td><strong>{est.nombre}</strong></td>
                <td>{est.email}</td>
                <td><span className="tag-plan">{est.plan}</span></td>
                <td>{est.progreso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isStudentModalOpen && estudianteSeleccionado && (
        <div className="admin-modal-overlay">
          <div className="admin-modal student-modal">
            <div className="modal-header">
              <h2>Expediente: {estudianteSeleccionado.nombre}</h2>
              <button className="btn-close-modal" onClick={() => setIsStudentModalOpen(false)}>✖</button>
            </div>
            
            <div className="student-stats-grid">
              <div className="stat-box">
                <h4>Plan Actual</h4>
                <p className="text-green">{estudianteSeleccionado.plan}</p>
              </div>
              <div className="stat-box">
                <h4>Progreso Global</h4>
                <p className="text-purple">{estudianteSeleccionado.progreso}</p>
              </div>
            </div>

            <h3 className="tracking-title">Seguimiento de Errores (Quiz)</h3>
            <div className="tracking-list">
              <div className="tracking-item">
                <p><strong>Módulo:</strong> Airport Connection</p>
                <p className="error-text">❌ Falló en la Decisión 3 (Seleccionó Ruta Curiosa en lugar de Directa).</p>
                <p className="date-text">Hace 2 días</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDirectory;