import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initFirestore } from './firebase/config'
import './main.css'
initFirestore();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
