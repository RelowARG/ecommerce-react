// src/components/CartItem/CartItem.jsx
import { useCart } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { removeItem, updateItemQuantity } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 1) {
      updateItemQuantity(item.id, newQuantity);
    }
  };

  // Un input de tipo number para cantidad podría ser más user-friendly
  // o botones + y - como en ItemCount
  const handleIncrement = () => {
    updateItemQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };


  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">Precio unitario: ${item.price}</p>
         <div className="cart-item-quantity-controls">
          <button onClick={handleDecrement} disabled={item.quantity <= 1}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrement} disabled={item.stock && item.quantity >= item.stock}>+</button>
        </div>
        <p className="cart-item-subtotal">Subtotal: ${item.price * item.quantity}</p>
      </div>
      <button onClick={() => removeItem(item.id)} className="cart-item-remove">
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;