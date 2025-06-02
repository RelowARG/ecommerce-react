// src/components/NavBar/NavBar.jsx
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'; // NavLink para estilos activos
import { getCategories } from '../../mockData'; // Función para obtener categorías
import './NavBar.css'; // Estilos para NavBar

const NavBar = () => {
  const [categories, setCategories] = useState([]); // Estado para almacenar las categorías

  // useEffect para cargar las categorías cuando el componente se monta
  useEffect(() => {
    getCategories().then(cats => setCategories(cats));
  }, []); // El array vacío asegura que se ejecute solo una vez

  return (
    <nav className="navbar">
      {/* Enlace al inicio (marca de la tienda) */}
      <Link to="/" className="navbar-brand">
        MiTienda
      </Link>
      {/* Contenedor para los enlaces de categorías */}
      <div className="navbar-categories">
        {/* Enlace a "Todos los Productos" */}
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          end // 'end' asegura que solo esté activo en la ruta exacta "/"
        >
          Todos los Productos
        </NavLink>
        {/* Mapea las categorías para crear un NavLink para cada una */}
        {categories.map(cat => (
          <NavLink
            key={cat} // Clave única para cada enlace
            to={`/category/${cat}`} // Ruta dinámica para la categoría
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            {/* Capitaliza la primera letra de la categoría */}
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </NavLink>
        ))}
      </div>
      {/* Aquí se podría agregar un futuro CartWidget */}
    </nav>
  );
};

export default NavBar;