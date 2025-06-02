// src/components/ItemDetailContainer/ItemDetailContainer.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Hook para acceder a los parámetros de la URL
import ItemDetail from '../ItemDetail/ItemDetail'; // Componente de presentación
import { getProductById } from '../../mockData'; // Función para obtener un producto por ID
// import './ItemDetailContainer.css'; // Estilos específicos si son necesarios

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null); // Estado para el producto
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error
  const { itemId } = useParams(); // Obtiene 'itemId' de la URL

  // useEffect para cargar los detalles del producto cuando 'itemId' cambia
  useEffect(() => {
    setLoading(true); // Inicia la carga
    setError(null); // Resetea errores
    getProductById(itemId) // Llama a la función para obtener el producto
      .then(res => {
        setProduct(res); // Actualiza el estado con el producto
      })
      .catch(err => {
        console.error("Error al obtener detalles del producto:", err);
        setError(`Producto con ID ${itemId} no encontrado o ocurrió un error.`); // Establece mensaje de error
      })
      .finally(() => {
        setLoading(false); // Finaliza la carga
      });
  }, [itemId]); // El efecto se re-ejecuta si 'itemId' cambia

  // Muestra mensaje de carga
  if (loading) {
    return <p className="loading-message">Cargando detalles del producto...</p>;
  }

  // Muestra mensaje de error
  if (error) {
    return <p className="error-message">{error}</p>;
  }

  // Mensaje si el producto no se encuentra (aunque el error debería cubrir esto)
  if (!product) {
    return <p className="loading-message">Producto no encontrado.</p>;
  }

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} /> {/* Renderiza los detalles del producto */}
    </div>
  );
};

export default ItemDetailContainer;