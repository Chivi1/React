/* import React from 'react'
import { Link } from 'react-router-dom'
//import { useCartContext } from "../../context/CartContext"
//import { collection, getFirestore, addDoc} from 'firebase/firestore'

import "../../pages/Cart/cart.css"
//const { cartList, precioCarrito } = useCartContext()
//const terminarCompra = ()=>{
    let compra = {}
    compra.cliente = {nombre:{} email: {} telefono:{}}
    compra.total = precioCarrito()
    compra.productos = cartList.map((product) => id: {product.id} Nombre: {product.name} Precio: {product.price} - Cantidad: {product.cantidad}))
    console.log(compra)
}
const Firestore = getFirestore()
const compras = collection (Firestore, 'compras')
addDoc(compras, compra)
.then (resp => console.log(resp))

const Checkout = () => {
return (
    <div>
        <h1>Tu pedido</h1>
        <ul>
            {cartList.map((product) => <li>Nombre: {product.name} Precio: {product.price} - Cantidad: {product.cantidad}</li>)}
        </ul>
        <h2>Precio total: {precioCarrito}</h2>
        <form onSubmit= {terminarCompra}>
            <label for="name">Nombre</label>
            <input placeholder='Nombre' type="text" name="name"/>
            <label for="email">Correo Electrónico</label>
            <input placeholder='Correo Electronico' type="email" name="email"/>
            <label for="email">Repetir Correo Electrónico</label>
            <input placeholder='Correo Electronico' type="email" name="RepetirEmail"/>
            <label for="phone">Numero de Teléfono</label>
            <input placeholder='Numero de telefono' type="number" name="phone"/>
            <div className='buttons'><button> Hacer pedido </button></div>
        </form>
        <div className='buttons'>
            <button><Link to='/cart'> Volver a Mi Carrito </Link></button>
        </div>
    </div>
)}

export default Checkout */