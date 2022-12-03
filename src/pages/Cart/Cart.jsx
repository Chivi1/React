import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import "../Cart/cart.css"

const Cart = () => {
  const { cartList, borrarCarrito, precioCarrito, borrarItem } = useCartContext()

  return (
      <div>
          <h1>Carrito</h1>
          {cartList.lenght != 0 ? 
          <>
          <ul>
            {cartList.map((product) =>  <li key={product.id}>
                                          <img src={product.foto} className="fotoCart" />
                                          <div className="producto">
                                            Nombre: {product.name} - Precio {product.price} - cantidad: {product.cantidad}
                                            <button onClick={()=> borrarItem(product.id)}>X</button>
                                          </div>
                                      </li>
            )}
          </ul>
          <div>
            {precioCarrito() !== 0 &&
              <p> Precio total: ${precioCarrito() }</p>
            }
          </div>
            <div className="buttons">
              <button onClick={borrarCarrito}>Vaciar carrito</button>
              <button><Link to='/'> Seguir Comprando </Link></button>
              <button>Ir a Pagar</button>
            </div>
          </>
          : 
          <h2> No hay nada en tu carrito <Link to="/">Ir a Tienda</Link></h2>
          }
      </div>
    )
  }

export default Cart