// src/components/ItemCount/ItemCount.jsx
import { useState } from 'react';
import './ItemCount.css'; // Estilos para ItemCount

// Props: stock (disponible), initial (cantidad inicial), onAdd (función al agregar)
const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial); // Estado para la cantidad

  // Función para incrementar la cantidad
  const increment = () => {
    if (quantity < stock) { // No superar el stock disponible
      setQuantity(quantity + 1);
    }
  };

  // Función para decrementar la cantidad
  const decrement = () => {
    if (quantity > 1) { // No bajar de 1
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="controls">
        {/* Botón para decrementar, deshabilitado si la cantidad es 1 o menos */}
        <button onClick={decrement} disabled={quantity <= 1}>-</button>
        <span>{quantity}</span> {/* Muestra la cantidad actual */}
        {/* Botón para incrementar, deshabilitado si la cantidad alcanza el stock */}
        <button onClick={increment} disabled={quantity >= stock}>+</button>
      </div>
      {/* Botón para agregar al carrito */}
      <button
        onClick={() => onAdd(quantity)} // Llama a la función onAdd con la cantidad seleccionada
        disabled={stock === 0} // Deshabilitado si no hay stock
        className="add-to-cart-button"
      >
        {stock === 0 ? 'Sin Stock' : 'Agregar al Carrito'}
      </button>
    </div>
  );
};

export default ItemCount;