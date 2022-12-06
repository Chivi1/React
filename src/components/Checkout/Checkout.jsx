import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, doc, getDoc, getFirestore } from 'firebase/firestore'
import { jsPDF } from "jspdf";

import "../../pages/Cart/cart.css"

const Checkout = () => {
    const { cartList, cartPrice, emptyCart } = useCartContext()
    const [ dataForm, setDataForm ] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const brief = new jsPDF();

    const terminarCompra = (evt)=>{  
        evt.preventDefault()
        let order = {}
        order.cliente = dataForm
        order.total = cartPrice()
        order.productos = cartList.map(product => {
            return {
                id: product.id,
                nombre: product.name, 
                precio: product.price,  
                cantidad: product.cantidad}})
        const firestore = getFirestore()
        const orders = collection(firestore, 'compras')
        addDoc(orders, order)
            .then(order => {const dataRef = doc(orders, order.id)
                            getDoc(dataRef)
                                .then( doc => brief.text(`"Compra realizada id: ${doc.id}
                                            Propietario: ${doc.cliente} 
                                            Pedido: ${doc.productos}
                                            Total: ${doc.total}"` , 10, 10))})
            .finally (()=>
                            setDataForm({
                                        name: '',
                                        email: '',
                                        phone: ''}),
                            emptyCart(),
                            brief.save("Compra.pdf")
        )}
    
    const formOnChange = (e) => {
        setDataForm ({...dataForm, [e.target.name]: e.target.value })
    }

return (
    <div>
        <h1>Tu pedido</h1>
        <ul>
        {cartList.map((product)=><li className='items-checkout' key="item"> id: {product.id} - Nombre: {product.name} - Precio: {product.price} - Cantidad:{product.cantidad}</li>)}
        </ul>
        <>
            <form onSubmit= {terminarCompra}>
                <input placeholder='Nombre'             onChange={formOnChange} value= {dataForm.name} type="text" name="name"/>
                <input placeholder='Correo electrónico' onChange={formOnChange} value= {dataForm.email} type="text" name="email"/>
                <input placeholder='Repetir correo electrónico' onChange={formOnChange}                 type="text" name="RepetirEmail"/>
                <input placeholder='Numero de teléfono' onChange={formOnChange} value= {dataForm.phone} type="number" name="phone"/>
                <div className='buttons'><button> Hacer pedido </button></div>
            </form>
        </>
        <div>
            <h2>Precio total: {cartPrice()}</h2>
        </div>
        <div className='buttons'>
            <button><Link to='/cart'> Volver a Mi Carrito </Link></button>
        </div>
    </div>)}

export default Checkout 


