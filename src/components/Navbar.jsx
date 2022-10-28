import React from 'react'
import "./Navbar.css"
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <span className='nav-logo'>CHIVI</span>
            <ul className='nav-items'>
                <a href="">Inicio</a>
                <a href="">Productos</a>
                <a href="">Remeras</a>
                <a href="">Accesorios</a>
                <a href="">Contacto</a>
            </ul>
            <a href=""><CartWidget/></a>
        </div>
    )
}

export default Navbar