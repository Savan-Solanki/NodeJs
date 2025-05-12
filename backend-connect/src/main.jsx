import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import First from './components/First.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/First" element={<First />} />
      </Routes>
    </BrowserRouter>
    {/* <First/> */}
  </StrictMode>
)
