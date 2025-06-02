// src/components/NavBar/NavBar.jsx
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getCategories } from '../../mockData';
import CartWidget from '../CartWidget/CartWidget'; // Importar CartWidget
import './NavBar.css';

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(cats => setCategories(cats));
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left"> {/* Nuevo div para agrupar marca y categorías */}
        <Link to="/" className="navbar-brand">
          MiTienda
        </Link>
        <div className="navbar-categories">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            end
          >
            Todos los Productos
          </NavLink>
          {categories.map(cat => (
            <NavLink
              key={cat}
              to={`/category/${cat}`}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </NavLink>
          ))}
        </div>
      </div>
      <CartWidget /> {/* Agregar el CartWidget aquí */}
    </nav>
  );
};

export default NavBar;