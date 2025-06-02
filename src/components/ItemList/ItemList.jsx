// src/components/ItemList/ItemList.jsx
import Item from '../Item/Item'; // Componente para cada producto individual
import './ItemList.css'; // Estilos para ItemList

// Props: products (array de productos a mostrar)
const ItemList = ({ products }) => {
  // Si no hay productos o el array está vacío, muestra un mensaje
  if (!products || products.length === 0) {
    return <p className="loading-message">No se encontraron productos en esta categoría.</p>;
  }

  return (
    <div className="item-list">
      {/* Mapea el array de productos y renderiza un componente Item para cada uno */}
      {products.map(prod => (
        <Item key={prod.id} {...prod} /> // 'key' es crucial para React, '...' pasa todas las props del producto
      ))}
    </div>
  );
};

export default ItemList;