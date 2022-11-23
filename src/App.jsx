import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cart from './pages/Cart/Cart';
import ItemDetailContainer from './pages/ItemDetail/ItemDetailContainer';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartContextProvider from './context/CartContext';

function App() {
  return (
  <div className='App'>
    <BrowserRouter>
    <CartContextProvider>
      <Navbar/>
        <Routes>
          <Route path='/' element= {<ItemListContainer/>}/>
          <Route path='/categorias/:categoriaId' element= {<ItemListContainer/>}/>
          <Route path='/detail/:id' element= {<ItemDetailContainer/>}/>
          <Route path='/cart' element= {<Cart/>}/>
        </Routes>
    </CartContextProvider>
    </BrowserRouter>
  </div>
  )
}

export default App
