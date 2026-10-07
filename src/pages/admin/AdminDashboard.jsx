import { useState } from 'react';
import Navbar from '../../components/Navbar';
import './AdminDashboard.css';

// Importamos todos los sub-componentes que modularizamos
import PlanManager from './PlanManager';
import StoryManager from './StoryManager'; // El que habías creado antes para los cursos
import StudentDirectory from './StudentDirectory';
import EmailCampaigns from './EmailCampaigns';
import SettingsPanel from './SettingsPanel';

function AdminDashboard() {
  const [pestañaActiva, setPestañaActiva] = useState('planes');

  return (
    <>
      <Navbar />
      <div className="admin-page">
        
        {/* MENÚ LATERAL */}
        <aside className="admin-sidebar">
          <h2 className="admin-logo">PANEL ADMIN</h2>
          <ul className="admin-nav">
            <li className={pestañaActiva === 'planes' ? 'active' : ''} onClick={() => setPestañaActiva('planes')}>
              📊 Planes
            </li>
            <li className={pestañaActiva === 'cursos' ? 'active' : ''} onClick={() => setPestañaActiva('cursos')}>
              📚 Cursos / Contenido
            </li>
            <li className={pestañaActiva === 'estudiantes' ? 'active' : ''} onClick={() => setPestañaActiva('estudiantes')}>
              👥 Estudiantes
            </li>
            <li className={pestañaActiva === 'correos' ? 'active' : ''} onClick={() => setPestañaActiva('correos')}>
              ✉️ Correos
            </li>
            <li className={pestañaActiva === 'configuracion' ? 'active' : ''} onClick={() => setPestañaActiva('configuracion')}>
              ⚙️ Configuración
            </li>
          </ul>
        </aside>

        {/* CONTENIDO PRINCIPAL DINÁMICO */}
        <main className="admin-content">
          {pestañaActiva === 'planes' && <PlanManager />}
          {pestañaActiva === 'cursos' && <StoryManager />}
          {pestañaActiva === 'estudiantes' && <StudentDirectory />}
          {pestañaActiva === 'correos' && <EmailCampaigns />}
          {pestañaActiva === 'configuracion' && <SettingsPanel />}
        </main>

      </div>
    </>
  );
}

export default AdminDashboard;