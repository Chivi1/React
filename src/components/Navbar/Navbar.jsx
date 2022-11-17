import "./Navbar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

import logo from '../../assets/CHIVI_MARCA_logotipo-negro.png'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="nav-logo">
            <img 
                src= { logo }
            />
            </div>
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
