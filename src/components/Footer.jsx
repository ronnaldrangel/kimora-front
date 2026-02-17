import React from 'react'

const Footer = () => {
    return (
        <footer style={{ background: '#1A1A1A', color: 'white', padding: '80px 20px 40px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '60px' }}>
                <div style={{ gridColumn: 'span 1.5' }}>
                    <img src="/images/logo.png" alt="KIMORA" style={{ height: '60px', marginBottom: '20px', filter: 'brightness(0) invert(1)' }} />
                    <p style={{ opacity: 0.7, lineHeight: 1.8 }}>
                        Grupo KIMORA EIRL - Excelencia en la extracción y comercialización de minerales industriales no metálicos. Comprometidos con el desarrollo sostenible y la calidad técnica.
                    </p>
                </div>

                <div>
                    <h4 style={{ marginBottom: '25px', fontSize: '1.2rem' }}>Enlaces</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', opacity: 0.8 }}>
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Nosotros</a></li>
                        <li><a href="#products">Productos</a></li>
                        <li><a href="#services">Servicios</a></li>
                        <li><a href="#gallery">Galería</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ marginBottom: '25px', fontSize: '1.2rem' }}>Legal</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', opacity: 0.8 }}>
                        <li>Políticas de Privacidad</li>
                        <li>Términos y Condiciones</li>
                        <li>Código de Ética</li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ marginBottom: '25px', fontSize: '1.2rem' }}>Ubicación</h4>
                    <p style={{ opacity: 0.7 }}>Piura, Perú</p>
                    <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
                        {/* Social icons could go here */}
                    </div>
                </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
                <p>&copy; {new Date().getFullYear()} Grupo KIMORA EIRL. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer
