// src/components/NotFound/NotFound.jsx
import { Link } from 'react-router-dom'; // Para enlazar de vuelta al inicio
import './NotFound.css'; // Estilos para NotFound

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Página No Encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      {/* Enlace para volver a la página de inicio */}
      <Link to="/" className="go-home-link">Ir a la Página Principal</Link>
    </div>
  );
};

export default NotFound;