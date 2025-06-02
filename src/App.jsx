// src/App.jsx
import { Routes, Route } from 'react-router-dom'; // Componentes para definir rutas
import NavBar from './components/NavBar/NavBar'; // Barra de navegación
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; // Contenedor lista de productos
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; // Contenedor detalle de producto
import NotFound from './components/NotFound/NotFound'; // Página 404
import './App.css'; // Estilos globales de App

function App() {
  return (
    <> {/* Fragmento para agrupar NavBar y el contenido principal */}
      <NavBar /> {/* La barra de navegación se muestra en todas las páginas */}
      <main className="container"> {/* Contenedor principal para el contenido de las rutas */}
        <Routes> {/* Define el conjunto de rutas de la aplicación */}
          {/* Ruta para la página de inicio (todos los productos) */}
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Nuestra Tienda!" />} />
          {/* Ruta para productos filtrados por categoría */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          {/* Ruta para la vista detallada de un producto específico */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          {/* Ruta comodín para manejar páginas no encontradas (404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;