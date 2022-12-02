import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import "../Cart/cart.css"

const Cart = () => {
  const { cartList, borrarCarrito } = useCartContext()

  return (
      <div>
          <h1>Carrito</h1>
        <div className="containerCart">
          <ul>
            {cartList.map((product) =>  <li key={product.id}>
                                          <img src={product.foto} className="fotoCart" />
                                          <div className="producto">
                                            Nombre: {product.name} - Precio {product.price} - cantidad: {product.cantidad}
                                          </div>
                                      </li>
            )}
          </ul>
        <>
          <div className="buttons">
            <button onClick={borrarCarrito}>Vaciar carrito</button>
            <button><Link to='/'> Seguir Comprando </Link></button>
            <button>Ir a Pagar</button>
          </div>
        </>
        </div>
      </div>
    )
  }

export default Cart