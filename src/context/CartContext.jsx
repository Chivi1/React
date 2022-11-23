import { useState } from "react";
import { createContext } from "react";
//nuevo contexto para cart
export const CartContext = createContext([]);

const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([]);
    const addToCart = (newItem) => {
        setCartList(newItem);
    }
    return (
        <CartContext.Provider value={{
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )

}
export default CartContextProvider