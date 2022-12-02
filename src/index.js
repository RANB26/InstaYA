import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Registro from './Registro';
import Envios_admin from './Usuarios/Admin/Envios_admin'
import Perfil_admin from './Usuarios/Admin/Perfil_admin'
import Repartidores_admin from './Usuarios/Admin/Repartidores_admin'
import Usuarios_admin from './Usuarios/Admin/Usuarios_admin'
import Perfil_repartidor from './Usuarios/Repartidor/Perfil_repartidor'
import Envios_repartidor from './Usuarios/Repartidor/Envios_repartidor'
import Perfil_usuario from './Usuarios/User final/Perfil_usuario'
import Envios_usuario from './Usuarios/User final/Envios_usuario'
import Error_usuario from './Usuarios/User final/Error_usuario'
import CrearEnvio_usuario from './Usuarios/User final/CrearEnvio_usuario'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/admin/perfil" element={<Perfil_admin/>} />
        <Route path="/admin/envios" element={<Envios_admin/>} />
        <Route path="/admin/repartidores" element={<Repartidores_admin/>} />
        <Route path="/admin/usuarios" element={<Usuarios_admin/>} />
        <Route path="/repartidor/perfil" element={<Perfil_repartidor/>} />
        <Route path="/repartidor/envios" element={<Envios_repartidor/>} />
        <Route path="/usuario/perfil" element={<Perfil_usuario/>} />
        <Route path="/usuario/envios" element={<Envios_usuario/>} />
        <Route path="/usuario/error" element={<Error_usuario/>} />
        <Route path="/usuario/crearenvio" element={<CrearEnvio_usuario/>} />
      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
