import { useState } from "react"
import { Link } from "react-router-dom"

import {  useCartContext } from "../../context/CartContext"

import ItemCount from "../Contador/ItemCount"
import "../ItemDetail/ItemDetail.css"


const ItemDetail = ({ product }) => {
    const [isCounter, setIsCounter] = useState(true)
    const {cartList, addToCart} = useCartContext()

    const onAdd = (cantidad) => {
        console.log(cantidad)
        addToCart( { ...product, cantidad } )
        setIsCounter(false)
    }
    console.log(cartList)

return (
    <>
    <div className="row">
        <div className="col">
            <img src={product.foto} className="w-25" />
            <p>Categoría: {product.categoria}</p>
            <p>Precio: {product.price}</p>
        </div>
        <div className="col">
            { isCounter ? 
                    <ItemCount 
                        stock={10} 
                        initial={1} 
                        onAdd={onAdd} 
                    
                    />
                :  
                    <div className="buttons">
                        <button><Link to='/cart' className=""> Terminar mi compra  </Link></button>
                        <button><Link to='/' className="">  Seguir Comprando  </Link></button>
                    </div>
            }
            
        </div>
        
    </div>
        
    </>
    )
}

export default ItemDetail

