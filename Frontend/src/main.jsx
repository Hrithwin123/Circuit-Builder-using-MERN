import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, BrowserRouter, Route } from 'react-router'
import Circuit from './Circuit.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)
