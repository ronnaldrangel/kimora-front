import React from 'react'
import { Menu, Phone } from 'lucide-react'

const Navbar = () => {
    return (
        <header>
            <div className="logo">
                <img src="/images/logo.png" alt="Grupo KIMORA Logo" />
            </div>
            <nav className="desktop-nav">
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#products">Productos</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#gallery">Galería</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
            <div className="nav-actions">
                <a href="tel:947002063" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={18} />
                    <span>947002063</span>
                </a>
            </div>
        </header>
    )
}

export default Navbar
