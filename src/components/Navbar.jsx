import React, { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { label: "Inicio", href: "#home" },
        { label: "Nosotros", href: "#about" },
        { label: "Productos", href: "#products" },
        { label: "Servicios", href: "#services" },
        { label: "Galería", href: "#gallery" },
        { label: "Contacto", href: "#contact" },
    ];

    return (
        <header>
            <div className="logo" style={{ zIndex: 1001 }}>
                <img src="/images/logo.png" alt="Grupo KIMORA Logo" />
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}><a href={item.href}>{item.label}</a></li>
                    ))}
                </ul>
            </nav>

            <div className="nav-actions desktop-nav">
                <a href="tel:947002063" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={18} />
                    <span>947002063</span>
                </a>
            </div>

            {/* Mobile Menu Button - Shown only on mobile via CSS */}
            <button
                className="mobile-menu-btn"
                onClick={toggleMenu}
                style={{
                    display: 'none',
                    zIndex: 1002,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                {isOpen ? <X size={32} color="var(--primary-orange)" /> : <Menu size={32} color="var(--primary-green)" />}
            </button>

            {/* Mobile Overlay Menu */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: 'white',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'transform 0.3s ease-in-out',
                transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
                opacity: isOpen ? 1 : 0
            }}>
                <ul style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    textAlign: 'center',
                    fontSize: '1.5rem'
                }}>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                onClick={toggleMenu}
                                style={{ color: 'var(--text-dark)', fontWeight: 600 }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li style={{ marginTop: '20px' }}>
                        <a
                            href="tel:947002063"
                            className="btn btn-primary"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '15px 30px',
                                color: 'white'
                            }}
                        >
                            <Phone size={24} />
                            Llamar ahora
                        </a>
                    </li>
                </ul>
            </div>

            {/* Inline style for media query to show button */}
            <style>{`
                @media (max-width: 968px) {
                    .desktop-nav { display: none !important; }
                    .mobile-menu-btn { display: block !important; }
                }
            `}</style>
        </header>
    )
}

export default Navbar
