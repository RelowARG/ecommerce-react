// src/components/Cart/Cart.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem'; // Importa el componente para cada ítem
import './Cart.css'; // Crearemos este archivo CSS

const Cart = () => {
  const { cartItems, clearCart, getTotalPrice, getTotalQuantity } = useCart();

  if (getTotalQuantity() === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <p>¿No sabes qué comprar? ¡Miles de productos te esperan!</p>
        <Link to="/" className="button-primary">
          Ir a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Tu Carrito de Compras</h1>
      <div className="cart-items-list">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h3 className="cart-total-price">Total: ${getTotalPrice().toFixed(2)}</h3>
        <div className="cart-actions">
          <button onClick={clearCart} className="button-danger">
            Vaciar Carrito
          </button>
          <button className="button-primary checkout-button" onClick={() => alert('Redirigiendo a la página de checkout (simulación)...')}>
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;