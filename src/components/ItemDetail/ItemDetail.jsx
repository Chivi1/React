import { useState } from "react"
import { Link } from "react-router-dom"

import {  useCartContext } from "../../context/CartContext"

import ItemCount from "../Contador/ItemCount"

import "../ItemDetail/ItemDetail.css"


const ItemDetail = ({ product }) => {
    const [isCounter, setIsCounter] = useState(true)
    const {addToCart} = useCartContext()

    const onAdd = (cantidad) => {
        addToCart( { ...product, cantidad } )
        setIsCounter(false)
    }

return (
    <>
    <div>
        <div className="foto-detail">
            <img src={product.photo}  />
            <p>{product.name}</p>
            <p>Precio: {product.price}</p>
        </div>
        <div>
            { isCounter ? 
                    <ItemCount 
                        stock={10} 
                        initial={1} 
                        onAdd={onAdd} 
                    
                    />
                :  
                    <div className="buttons">
                        <button><Link to='/cart' > Terminar mi compra  </Link></button>
                        <button><Link to='/'>  Seguir Comprando  </Link></button>
                    </div>
            }
            
        </div>
        
    </div>
        
    </>
    )
}

export default ItemDetail

