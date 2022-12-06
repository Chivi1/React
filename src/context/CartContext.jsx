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
    const emptyCart = () => {
        setCartList([])
    }
    const itemsTotal = () => {
        return cartList.reduce((acc, product) => acc += product.cantidad, 0 )
    }
    const cartPrice = ()=>{
        return cartList.reduce((acc, product)=> acc += (product.price * product.cantidad) , 0)
    }
    const deleteItem = (id)=> {
        setCartList(cartList.filter(product=>(product.id !== id)))
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            itemsTotal,
            cartPrice,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )

}
export default CartContextProvider