import { createContext, useState, useContext } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([]);
    
    const addToCart = (newProductCart) => {
        const inCart = ()=> cartList.findIndex(product => product.id === newProductCart.id)
        let index = inCart(newProductCart.id)
        if (index === -1 ) {
            setCartList( [...cartList, newProductCart ])
        } else {
            cartList[index].cantidad += (newProductCart.cantidad)
            setCartList([ ...cartList ])
        }
        
    }
    const borrarCarrito = () => {
        setCartList([])
    }
    const itemsTotal = () => {
        return cartList.reduce((suma, producto) => suma += producto.cantidad, 0 )
    }
    const precioCarrito = ()=>{
        return cartList.reduce((acc, producto)=> acc += (producto.price * producto.cantidad) , 0)
    }
    const borrarItem = (id)=> {
        setCartList(cartList.filter(producto=>(producto.id !== id)))
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            borrarCarrito,
            itemsTotal,
            precioCarrito,
            borrarItem
        }}>
            {children}
        </CartContext.Provider>
    )

}
export default CartContextProvider