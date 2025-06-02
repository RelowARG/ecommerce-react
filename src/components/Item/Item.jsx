// src/components/Item/Item.jsx
import { Link } from 'react-router-dom'; // Para enlazar al detalle del producto
import './Item.css'; // Estilos para Item

// Props: id, name, image, price, category del producto
const Item = ({ id, name, image, price, category }) => {
  return (
    <article className="item-card">
      {/* Enlace que lleva a la vista detallada del producto */}
      <Link to={`/item/${id}`}>
        <img src={image} alt={name} className="item-image" />
        <div className="item-info">
          <h3 className="item-name">{name}</h3>
          <p className="item-category">{category}</p>
          <p className="item-price">${price}</p>
        </div>
      </Link>
    </article>
  );
};

export default Item;