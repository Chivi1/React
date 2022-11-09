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
                <Link to= '/'>Remeras</Link>
                <Link to= '/'>Gorras</Link>
                <Link to= '/'>Accesorios</Link>
            </ul>
            <Link to='/cart'><CartWidget/></Link>
        </div>
    )
}

export default Navbar