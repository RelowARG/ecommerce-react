// src/context/CartContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';

// 1. Crear el Contexto
const CartContext = createContext();

// 2. Crear un Custom Hook para usar el Contexto del Carrito
export const useCart = () => {
  return useContext(CartContext);
};

// 3. Crear el Proveedor del Contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Intentar cargar el carrito desde localStorage al iniciar
    try {
      const localData = localStorage.getItem('cartItems');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Error al cargar el carrito desde localStorage:", error);
      return [];
    }
  });

  // Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para agregar un ítem al carrito
  const addItem = (product, quantity) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingItemIndex > -1) {
        // Si el ítem ya existe, actualiza la cantidad
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        // Asegurarse de no exceder el stock (si el stock está disponible en 'product')
        if (product.stock && updatedItems[existingItemIndex].quantity > product.stock) {
          updatedItems[existingItemIndex].quantity = product.stock;
        }
        return updatedItems;
      } else {
        // Si el ítem no existe, lo agrega
        // Asegurarse de no exceder el stock al agregar inicialmente
        const newQuantity = (product.stock && quantity > product.stock) ? product.stock : quantity;
        return [...prevItems, { ...product, quantity: newQuantity }];
      }
    });
  };

  // Función para remover un ítem del carrito
  const removeItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Función para limpiar todo el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Función para verificar si un ítem está en el carrito
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  // Función para obtener la cantidad total de ítems
  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Función para obtener el precio total del carrito
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Función para actualizar la cantidad de un ítem específico
  const updateItemQuantity = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === productId) {
          // Validar que la nueva cantidad no sea menor que 1 y no exceda el stock
          let quantity = Math.max(1, newQuantity);
          if (item.stock && quantity > item.stock) {
            quantity = item.stock;
          }
          return { ...item, quantity };
        }
        return item;
      })
    );
  };


  const value = {
    cartItems,
    addItem,
    removeItem,
    clearCart,
    isInCart,
    getTotalQuantity,
    getTotalPrice,
    updateItemQuantity, // Agregar la nueva función al valor del contexto
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};