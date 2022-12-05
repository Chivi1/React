import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"

import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/CHIVI_MARCA_logotipo-negro.png'

import "./Navbar.css"


const Navbar = () => {
    const {itemsTotal} = useCartContext();
    return (
        <div className='Navbar'>
            <div className="nav-logo">
            <Link to= "/">
                <img src= { logo }/>
            </Link>
            </div>
            <ul className='nav-items'>
                <Link to= '/'>Inicio</Link>
                <Link to= '/categorias/remeras'>Remeras</Link>
                <Link to= '/categorias/gorras'>Gorras</Link>
                <Link to= '/categorias/accesorios'>Accesorios</Link>
            </ul>
            <Link to='/cart' className="cart">
                <>
                    <CartWidget/>
                </>
                <div className="cant-num">
                    { itemsTotal() !== 0 && itemsTotal()}
                </div>
            </Link>
            
        </div>
    )
}

export default Navbar
