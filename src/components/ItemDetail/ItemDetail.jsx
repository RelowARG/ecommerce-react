// src/components/ItemDetail/ItemDetail.jsx
import ItemCount from '../ItemCount/ItemCount'; // Componente para manejar la cantidad
import './ItemDetail.css'; // Estilos para ItemDetail

// Props: product (objeto con los detalles del producto)
const ItemDetail = ({ product }) => {
  // Si no hay datos del producto, muestra un mensaje
  if (!product) {
    return <p>Detalles del producto no encontrados.</p>;
  }

  // Función que se ejecuta al agregar el producto al carrito
  const handleAddToCart = (quantity) => {
    console.log(`Agregados ${quantity} de ${product.name} al carrito.`);
    // Aquí normalmente se despacharía una acción para actualizar el estado del carrito
  };

  return (
    <article className="item-detail">
      {/* Contenedor de la imagen del producto */}
      <div className="item-detail-image-container">
        <img src={product.image} alt={product.name} className="item-detail-image" />
      </div>
      {/* Contenedor de la información del producto */}
      <div className="item-detail-info">
        <h2 className="item-detail-name">{product.name}</h2>
        <p className="item-detail-category">Categoría: {product.category}</p>
        <p className="item-detail-description">{product.description}</p>
        <p className="item-detail-price">${product.price}</p>
        <p className="item-detail-stock">Stock Disponible: {product.stock}</p>
        {/* Muestra ItemCount si hay stock, sino un mensaje de "Sin Stock" */}
        {product.stock > 0 ? (
          <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
        ) : (
          <p className="out-of-stock-message">Sin Stock</p>
        )}
      </div>
    </article>
  );
};

export default ItemDetail;