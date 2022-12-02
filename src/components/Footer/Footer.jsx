import React from 'react'
import { Link } from 'react-router-dom'
import imagen from '../../assets/CHIVI_MARCA_isotipo-negro-letras-blancas - copia.png'
import "../Footer/Footer.css"

const Footer = () => {
return (
    <div className='footer'>
        <footer className=''>
            <p className='etiqueta'> © 2022 Chivi </p>
            <>
                <img src={imagen} className="img"/>
            </>
            <ul className="links">
                <li className="nav-item"><Link to = '/'>Inicio</Link></li>
                <li className="nav-item"><a href="https://www.instagram.com/blacktailgg/">Instagram</a></li>
                <li className="nav-item"><a href="https://twitter.com/blacktailgg">Twitter</a></li>
                <li className="nav-item"><a href="https://www.twitch.tv/blacktailesports">Twitch</a></li>
            </ul>
        </footer>
    </div>
)}

export default Footer