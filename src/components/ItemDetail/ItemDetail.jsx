import { useState } from "react"
import { Link } from "react-router-dom"

import {  useCartContext } from "../../context/CartContext"

import ItemCount from "../Contador/ItemCount"


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
                    <div className="">
                        <Link to='/cart' className=""> <button>Terminar mi compra </button> </Link>
                        <Link to='/' className=""> <button> Seguir Comprando </button> </Link>
                    </div>
            }
            
        </div>
        
    </div>
        
    </>
    )
}

export default ItemDetail

