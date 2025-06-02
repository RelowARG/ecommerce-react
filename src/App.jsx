// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import Cart from './components/Cart/Cart'; // Importar el futuro componente Cart
import { CartProvider } from './context/CartContext'; // Importar el CartProvider
import './App.css'; //

function App() {
  return (
    <CartProvider> {/* Envolver con CartProvider */}
      <NavBar />
      <main className="container"> {/* */}
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Nuestra Tienda!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} /> {/* Ruta para el carrito */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;