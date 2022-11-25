import { createContext, useState, useContext } from "react";

//nuevo contexto para cart
const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([]);
    const addToCart = (newProductCart) => {
        setCartList( [...cartList, newProductCart ])
    }
    const borrarCarrito = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            borrarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )

}
export default CartContextProvider