// src/mockData.js

// Lista de productos de ejemplo
export const products = [
  {
    id: '1',
    name: 'Laptop Pro 15"',
    price: 1200,
    category: 'Electrónica', // Categoría: electrónica
    image: 'https://placehold.co/600x400/EFEFEF/AAAAAA&text=LaptopPro', // URL de placeholder
    description: 'Laptop de alto rendimiento para profesionales.',
    stock: 10, // Cantidad disponible en stock
  },
  {
    id: '2',
    name: 'Smartphone X',
    price: 800,
    category: 'Electrónica', // Categoría: electrónica
    image: 'https://placehold.co/600x400/EFEFEF/AAAAAA&text=SmartphoneX', // URL de placeholder
    description: 'Smartphone de última generación con funciones avanzadas.',
    stock: 15,
  },
  {
    id: '3',
    name: 'Remera Clásica',
    price: 25,
    category: 'Indumentaria', // Categoría: indumentaria
    image: 'https://placehold.co/600x400/EFEFEF/AAAAAA&text=RemeraClasica', // URL de placeholder
    description: 'Remera de algodón cómoda.',
    stock: 50,
  },
  {
    id: '4',
    name: 'Zapatillas Deportivas',
    price: 100,
    category: 'Calzado', // Categoría: calzado
    image: 'https://placehold.co/600x400/EFEFEF/AAAAAA&text=Zapatillas', // URL de placeholder
    description: 'Zapatillas deportivas ligeras para un rendimiento óptimo.',
    stock: 25,
  },
  {
    id: '5',
    name: 'Auriculares Inalámbricos',
    price: 150,
    category: 'Electrónica', // Categoría: electrónica
    image: 'https://placehold.co/600x400/EFEFEF/AAAAAA&text=Auriculares', // URL de placeholder
    description: 'Auriculares inalámbricos con cancelación de ruido.',
    stock: 20,
  },
  {
    id: '6',
    name: 'Jeans de Denim',
    price: 60,
    category: 'Indumentaria', // Categoría: indumentaria
    image: 'https://placehold.co/600x400/EFEFEF/AAAAAA&text=JeansDenim', // URL de placeholder
    description: 'Jeans de denim elegantes y duraderos.',
    stock: 30,
  },
];

// Función para obtener productos, opcionalmente filtrados por categoría
export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => { // Simula un retraso de red
      if (categoryId) {
        // Si se proporciona categoryId, filtra los productos
        resolve(products.filter(prod => prod.category === categoryId));
      } else {
        // Si no, devuelve todos los productos
        resolve(products);
      }
    }, 500); // Retraso de 500ms
  });
};

// Función para obtener un producto específico por su ID
export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { // Simula un retraso de red
      const product = products.find(prod => prod.id === productId);
      if (product) {
        // Si se encuentra el producto, resuelve la promesa con el producto
        resolve(product);
      } else {
        // Si no se encuentra, rechaza la promesa con un error
        reject(new Error('Producto no encontrado'));
      }
    }, 500); // Retraso de 500ms
  });
};

// Función para obtener todas las categorías únicas de productos
export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => { // Simula un retraso de red
      // Crea un Set para obtener categorías únicas y luego lo convierte a array
      const categories = [...new Set(products.map(prod => prod.category))];
      resolve(categories);
    }, 200); // Retraso de 200ms
  });
}