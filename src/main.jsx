// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import App from './App.jsx';
import './index.css'; // Estilos globales

// Renderiza la aplicación envolviendo App con BrowserRouter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Habilita el enrutamiento en la aplicación */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);