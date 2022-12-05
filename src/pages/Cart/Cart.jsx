import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import "../Cart/cart.css"

const Cart = () => {
  const { cartList, borrarCarrito, precioCarrito, borrarItem } = useCartContext()
  return (
      <div className="body">
          <h1>Carrito</h1>
          {
          cartList.length !== 0 ? <>
            <ul>
              {cartList.map((product) =>  <li key={product.id}>
                                          <img src={product.foto} className="fotoCart" />
                                          <div className="producto">
                                            Nombre: {product.name} 
                                            <br/>Precio: {product.price} - Cantidad: {product.cantidad}
                                            <button onClick={()=> borrarItem(product.id)}>X</button>
                                          </div>
                                        </li>
              )}
            </ul>
            <div>{precioCarrito() !== 0 && <p> Precio total: ${precioCarrito() }</p>}</div>
            <div className="buttons">
              <button onClick={borrarCarrito}>Vaciar carrito</button>
              <button><Link to='/'> Seguir Comprando </Link></button>
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