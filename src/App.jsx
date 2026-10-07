import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';
import Register from './pages/Register';
import Recover from './pages/Recover';
import SelectPlan from './pages/SelectPlan';
import StoryCatalog from './pages/StoryCatalog';
import StoryPlayer from './pages/StoryPlayer';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/recuperar" element={<Recover />} />
      <Route path="/seleccionar-plan" element={<SelectPlan />} /> {/* <-- AÑADE LA RUTA */}
      <Route path="/historias" element={<StoryCatalog />} />
      <Route path="/historia/:id" element={<StoryPlayer />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;