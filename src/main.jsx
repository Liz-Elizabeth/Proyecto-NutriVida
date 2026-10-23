import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importamos BrowserRouter para habilitar las rutas
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* Permite que App y sus componentes utilicen React Router */}
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </StrictMode>,
)
