import './SettingsPanel.css';

function SettingsPanel() {
  return (
    <div className="admin-panel">
      <h2>Configuración del Sistema</h2>
      <div className="settings-grid">
        <div className="setting-card">
          <h3>🎨 Apariencia e Iconos</h3>
          <p className="text-muted">Personaliza logos y colores de la interfaz.</p>
          <button className="btn-edit">Configurar</button>
        </div>
        <div className="setting-card">
          <h3>🔔 Alertas y Notificaciones</h3>
          <p className="text-muted">Ajusta los mensajes del sistema y notificaciones web.</p>
          <button className="btn-edit">Configurar</button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;