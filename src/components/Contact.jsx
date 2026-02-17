import React from 'react'
import { Mail, MapPin, PhoneCall } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '15px' }}>Contacte con Nosotros</h2>
                    <p style={{ color: 'var(--primary-orange)', fontWeight: 700, marginBottom: '20px', fontSize: '0.9rem' }}>INGENIERÍA EXTREMA</p>
                    <p style={{ marginBottom: '40px', fontSize: '1.1rem', color: 'var(--text-light)' }}>
                        Ingeniería sólida para industrias que construyen el futuro.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ background: 'var(--primary-orange)', padding: '12px', borderRadius: '12px', color: 'white' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '5px' }}>Dirección</h4>
                                <p style={{ color: 'var(--text-light)' }}>Urb Boulevard Park Plaza - Miraflores Country Club - Piura</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ background: 'var(--primary-green)', padding: '12px', borderRadius: '12px', color: 'white' }}>
                                <PhoneCall size={24} />
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '5px' }}>Teléfono</h4>
                                <p style={{ color: 'var(--text-light)' }}>947002063</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ background: 'var(--text-dark)', padding: '12px', borderRadius: '12px', color: 'white' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '5px' }}>Correo Electrónico</h4>
                                <p style={{ color: 'var(--text-light)' }}>informacionkimora@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.08)' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <input type="text" placeholder="Nombre completo" style={inputStyle} />
                            <input type="email" placeholder="Correo electrónico" style={inputStyle} />
                        </div>
                        <input type="text" placeholder="Asunto" style={inputStyle} />
                        <textarea placeholder="¿En qué podemos ayudarle?" style={{ ...inputStyle, height: '150px', resize: 'none' }}></textarea>
                        <button className="btn btn-primary" style={{ height: '56px', fontSize: '1.1rem' }}>Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

const inputStyle = {
    width: '100%',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    outlineColor: 'var(--primary-green)'
}

export default Contact
