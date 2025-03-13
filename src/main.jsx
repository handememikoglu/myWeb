import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/global.css'
import MainLayout from './layout/MainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <MainLayout/>
)
