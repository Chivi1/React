import React from 'react'
import "./Navbar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <span className='nav-logo'>CHIVI</span>
            <ul className='nav-items'>
                <Link to= '/'>Inicio</Link>
                <Link to= '/categorias/remeras'>Remeras</Link>
                <Link to= '/categorias/gorras'>Gorras</Link>
                <Link to= '/categorias/accesorios'>Accesorios</Link>
            </ul>
            <Link to='/cart'><CartWidget/></Link>
        </div>
    )
}

export default Navbar