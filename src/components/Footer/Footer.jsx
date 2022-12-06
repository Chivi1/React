import { Link } from 'react-router-dom'

import image from '../../assets/CHIVI_MARCA_isotipo-negro-letras-blancas - copia.png'
import logo from '../../assets/CHIVI_MARCA_logotipo-negro.png'
import { BsTwitter, BsTwitch, BsInstagram } from "react-icons/bs";

import "../Footer/Footer.css"

const Footer = () => {
    
return (
    
    <div className='footer'>
        <footer className=''>
            <p className='etiqueta'> © 2022 Chivi </p>
            <ul className="links">
            <>
                <Link to = '/'>
                    <img src={image} className="img"/>
                </Link>
            </>
                <li className="nav-item">
                    <Link to = '/'><img src={logo} alt="" className='img-chivi'/></Link>
                </li>
                <li className="nav-itemList">
                    <a href="https://www.instagram.com/__chivi/" className='logos'>
                        <BsInstagram/>
                    </a>
                </li>
                <li className="nav-itemList">
                    <a href="https://twitter.com/___chivi" className='logos'>
                        <BsTwitter/>  
                    </a>
                </li>
                <li className="nav-itemList">
                    <a href="https://www.twitch.tv/chiviofc" className='logos'>
                        <BsTwitch/>
                    </a>
                </li> 
            </ul>
        </footer>
    </div>
)}

export default Footer