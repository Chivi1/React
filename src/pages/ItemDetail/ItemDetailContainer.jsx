import { useEffect, useState, useContext } from "react";
import { useParams, Link  } from "react-router-dom"
import { CartContext } from "../../context/CartContext";
import ItemCount from "../../components/Contador/ItemCount";

import { gFetch } from '../../utils/gFetch'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  const [isCounter, setIsCounter] = useState(true)

  const { cartList, addToCart } = useContext(CartContext)
  const onAdd = (cantidad) => {
    addToCart({ ...product,  cantidad })
    setIsCounter(false)
  }
  useEffect(() => {
    gFetch()
      .then(resp => setProduct(resp.find(prod => prod.id === id)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }
    , [id]);
  return (
    loading
      ?
      <h2>Cargando...</h2>
      :
      <div>
        <div key={product.id} className=''>
          <div className=''>
            {product.name}
          </div>
          <div className=''>
            <center>
              <img src={product.foto} className="" />
            </center>
          </div>
          <div className=''>
            precio : {product.price}
          </div>
        </div>
        <div>
          {isCounter 
          ?
            <ItemCount
              stock={10}
              initial={1}
              onAdd={onAdd}
            />
            :
            <div className="container mt-5">
              <Link to='/cart' className="btn btn-success">Terminar mi compra</Link>
              <Link to='/' className="btn btn-success">Seguir Comprando </Link>
            </div>
          }
        </div>
      </div>
  )
}

export default ItemDetailContainer