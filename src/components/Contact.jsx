import React from 'react'
import { Mail, MapPin, PhoneCall } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "947002063";
        const text = `Hola, mi nombre es ${formData.name}. %0AMensaje: ${formData.message} %0A%0AMi correo es: ${formData.email}`;
        window.open(`https://wa.me/51${phoneNumber}?text=${text}`, '_blank');
    };

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
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre completo"
                                style={inputStyle}
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                style={inputStyle}
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <textarea
                            name="message"
                            placeholder="¿En qué podemos ayudarle?"
                            style={{ ...inputStyle, height: '150px', resize: 'none' }}
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                        <button type="submit" className="btn btn-primary" style={{ height: '56px', fontSize: '1.1rem' }}>Enviar Mensaje</button>
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
