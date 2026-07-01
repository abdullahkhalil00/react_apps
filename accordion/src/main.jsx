import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Accordion from './componenet/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Accordion/>
  </StrictMode>,
)
