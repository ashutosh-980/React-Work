import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// main.jsx OR index.js OR App.js
import 'remixicon/fonts/remixicon.css';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
