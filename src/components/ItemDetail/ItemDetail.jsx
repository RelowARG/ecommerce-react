// src/components/ItemDetail/ItemDetail.jsx
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const { addItem, isInCart } = useCart();
  const [feedbackMessage, setFeedbackMessage] = useState('');

  if (!product) {
    return <p>Detalles del producto no encontrados.</p>;
  }

  const handleAddToCart = (quantity) => {
    addItem(product, quantity);
    setFeedbackMessage(`${quantity} "${product.name}" agregado(s) al carrito!`);
    setTimeout(() => setFeedbackMessage(''), 3000);
  };

  return (
    <article className="item-detail">
      <div className="item-detail-image-container">
        <img src={product.image} alt={product.name} className="item-detail-image" />
      </div>
      <div className="item-detail-info">
        <h2 className="item-detail-name">{product.name}</h2>
        <p className="item-detail-category">Categoría: {product.category}</p>
        <p className="item-detail-description">{product.description}</p>
        <p className="item-detail-price">${product.price}</p>
        <p className="item-detail-stock">Stock Disponible: {product.stock}</p>

        {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}

        {product.stock > 0 ? (
          !isInCart(product.id) ? (
            <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
          ) : (
            <Link to="/cart" className="button-primary go-to-cart-button"> {/* Aquí se usa Link */}
              Ir al Carrito
            </Link>
          )
        ) : (
          <p className="out-of-stock-message">Sin Stock</p>
        )}
      </div>
    </article>
  );
};

export default ItemDetail;