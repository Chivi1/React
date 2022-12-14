import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

import "../Cart/cart.css"

const Cart = () => {
  const { cartList, emptyCart, cartPrice,  deleteItem } = useCartContext()
  return (
      <div className="body">
          <h1>Carrito</h1>
          {
          cartList.length !== 0 ? <>
            <ul>
              {cartList.map((product) =>  <li key={product.id}>
                                          <img src={product.photo} className="fotoCart" />
                                          <div className="producto">
                                            Nombre: {product.name} 
                                            <br/>Precio: {product.price} - Cantidad: {product.cantidad}
                                            <button onClick={()=> deleteItem(product.id)}>X</button>
                                          </div>
                                        </li>
              )}
            </ul>
            <div>{cartPrice() !== 0 && <p> Precio total: ${cartPrice() }</p>}</div>
            <div className="buttons">
              <button><Link to='/'> Seguir Comprando </Link></button>
              <button onClick={emptyCart}>Vaciar carrito</button>
              <button><Link to= '/finalizarCompra'>Ir a Pagar</Link></button>
            </div>
          </>
          :
          <h2> No hay nada en tu carrito<Link to="/">Ir a Tienda</Link></h2>
          }
      </div>
    )
  }

export default Cart