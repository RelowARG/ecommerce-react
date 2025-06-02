// src/components/CartWidget/CartWidget.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // Importa el hook useCart
import './CartWidget.css'; // Crearemos este archivo CSS

const CartWidget = () => {
  const { getTotalQuantity } = useCart(); // Obtiene la función para la cantidad total
  const totalQuantity = getTotalQuantity();

  return (
    <Link to="/cart" className="cart-widget">
      {/* Puedes usar un ícono de carrito aquí, por ejemplo de una librería de íconos o un SVG */}
      <span className="cart-icon">🛒</span> {/* Placeholder simple de ícono */}
      {totalQuantity > 0 && (
        <span className="cart-badge">{totalQuantity}</span>
      )}
    </Link>
  );
};

export default CartWidget;