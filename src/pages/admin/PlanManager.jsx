import { useState, useEffect } from 'react';

function PlanManager() {
  const [planes, setPlanes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [planEditando, setPlanEditando] = useState(null);
  const [formData, setFormData] = useState({ nombre_plan: '', precio: '', caracteristicas: '' });

  useEffect(() => { cargarPlanes(); }, []);

  const cargarPlanes = async () => {
    try {
      const respuesta = await fetch('http://localhost:5000/api/planes');
      const data = await respuesta.json();
      setPlanes(data);
    } catch (error) {
      console.error("Error al cargar planes:", error);
    }
  };

  const abrirModalCrear = () => {
    setPlanEditando(null);
    setFormData({ nombre_plan: '', precio: '', caracteristicas: '' });
    setIsModalOpen(true);
  };

  const abrirModalEditar = (plan) => {
    setPlanEditando(plan.id_plan);
    setFormData({ nombre_plan: plan.nombre_plan, precio: plan.precio, caracteristicas: plan.caracteristicas });
    setIsModalOpen(true);
  };

  const guardarPlan = async (e) => {
    e.preventDefault();
    const url = planEditando ? `http://localhost:5000/api/planes/${planEditando}` : 'http://localhost:5000/api/planes';
    const metodo = planEditando ? 'PUT' : 'POST';

    try {
      const respuesta = await fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (respuesta.ok) {
        setIsModalOpen(false);
        cargarPlanes();
      }
    } catch (error) { console.error("Error al guardar:", error); }
  };

  const eliminarPlan = async (id) => {
    if (window.confirm("¿Estás seguro de que quieres borrar este plan?")) {
      try {
        const respuesta = await fetch(`http://localhost:5000/api/planes/${id}`, { method: 'DELETE' });
        if (respuesta.ok) cargarPlanes();
      } catch (error) { console.error("Error al borrar:", error); }
    }
  };

  return (
    <div className="admin-panel">
      <div className="panel-header">
        <h2>Gestión de Planes</h2>
        <button className="btn-admin-primary" onClick={abrirModalCrear}>+ NUEVO PLAN</button>
      </div>
      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr><th>Nombre</th><th>Precio</th><th>Beneficios</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            {planes.map(plan => (
              <tr key={plan.id_plan}>
                <td><strong>{plan.nombre_plan}</strong></td>
                <td>${plan.precio} USD</td>
                <td className="features-cell">{plan.caracteristicas}</td>
                <td className="actions-cell">
                  <button className="btn-edit" onClick={() => abrirModalEditar(plan)}>Editar</button>
                  <button className="btn-delete" onClick={() => eliminarPlan(plan.id_plan)}>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h2>{planEditando ? 'Editar Plan' : 'Crear Nuevo Plan'}</h2>
            <form onSubmit={guardarPlan}>
              <div className="form-group">
                <label>Nombre del Plan</label>
                <input type="text" required value={formData.nombre_plan} onChange={(e) => setFormData({...formData, nombre_plan: e.target.value})} placeholder="Ej. Básico" />
              </div>
              <div className="form-group">
                <label>Precio (USD)</label>
                <input type="number" step="0.01" required value={formData.precio} onChange={(e) => setFormData({...formData, precio: e.target.value})} placeholder="Ej. 10.00" />
              </div>
              <div className="form-group">
                <label>Beneficios (Separados por coma)</label>
                <textarea required rows="4" value={formData.caracteristicas} onChange={(e) => setFormData({...formData, caracteristicas: e.target.value})} placeholder="Ej. Acceso a 50 historias, Rastreador de progreso" />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                <button type="submit" className="btn-save">Guardar Plan</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlanManager;