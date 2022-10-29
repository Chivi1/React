import { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'


function App() {

  const saludo = "¡Bienvenido a la tienda! Envios gratis a todo el país"
  return (
  <div className='App'>
    <Navbar/>
    <ItemListContainer saludo={saludo} />
  </div>
  )
}

export default App
