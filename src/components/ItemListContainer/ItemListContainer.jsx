// src/components/ItemListContainer/ItemListContainer.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Hook para acceder a los parámetros de la URL
import ItemList from '../ItemList/ItemList'; // Componente de presentación para la lista
import { getProducts } from '../../mockData'; // Función para obtener productos
import './ItemListContainer.css'; // Estilos específicos si son necesarios

// Props: greeting (mensaje de bienvenida opcional)
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para indicar si está cargando
  const [error, setError] = useState(null); // Estado para manejar errores
  const { categoryId } = useParams(); // Obtiene 'categoryId' de la URL si existe

  // useEffect para cargar los productos cuando 'categoryId' cambia o el componente se monta
  useEffect(() => {
    setLoading(true); // Inicia la carga
    setError(null); // Resetea cualquier error previo
    getProducts(categoryId) // Llama a la función para obtener productos (filtrados o todos)
      .then(res => {
        setProducts(res); // Actualiza el estado con los productos obtenidos
      })
      .catch(err => {
        console.error("Error al obtener productos:", err);
        setError("No se pudieron cargar los productos. Inténtalo de nuevo más tarde."); // Establece un mensaje de error
      })
      .finally(() => {
        setLoading(false); // Finaliza la carga, ya sea con éxito o error
      });
  }, [categoryId]); // El efecto se re-ejecuta si 'categoryId' cambia

  // Muestra un mensaje de carga mientras los datos se están obteniendo
  if (loading) {
    return <p className="loading-message">Cargando productos...</p>;
  }

  // Muestra un mensaje de error si algo falló
  if (error) {
    return <p className="error-message">{error}</p>;
  }

  // Determina el título a mostrar basado en si hay una categoría o un saludo
  const title = categoryId
    ? `Productos - ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}` // Título para categoría
    : 'Todos los Productos'; // Título para todos los productos

  return (
    <div className="item-list-container">
      <h2>{greeting || title}</h2> {/* Muestra el saludo o el título determinado */}
      <ItemList products={products} /> {/* Renderiza la lista de productos */}
    </div>
  );
};

export default ItemListContainer;