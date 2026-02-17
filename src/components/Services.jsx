import React from 'react'
import { Landmark, Hammer, Truck, Factory, HardHat, Settings } from 'lucide-react'

const Services = () => {
    const services = [
        {
            title: "Extracción y explotación minera",
            icon: <Landmark size={32} />
        },
        {
            title: "Procesamiento y molienda especializada",
            icon: <Factory size={32} />
        },
        {
            title: "Clasificación granulométrica",
            icon: <Settings size={32} />
        },
        {
            title: "Abastecimiento a granel",
            icon: <Truck size={32} />
        },
        {
            title: "Logística y distribución",
            icon: <Truck size={32} />
        },
        {
            title: "Alquiler de maquinaria pesada",
            icon: <HardHat size={32} />
        }
    ]

    return (
        <section id="services" className="services-section" style={{ padding: '80px 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '15px' }}>NUESTROS SERVICIOS</h2>
                <div style={{ width: '80px', height: '4px', background: 'var(--primary-orange)', margin: '0 auto' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                {services.map((service, i) => (
                    <div key={i} style={{
                        padding: '40px',
                        background: 'var(--bg-light)',
                        borderRadius: '24px',
                        textAlign: 'center',
                        transition: 'var(--transition-smooth)',
                        border: '1px solid transparent'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.borderColor = 'var(--primary-green)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--bg-light)';
                            e.currentTarget.style.borderColor = 'transparent';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                        <div style={{
                            color: 'var(--primary-orange)',
                            marginBottom: '20px',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            {service.icon}
                        </div>
                        <h4 style={{ color: 'var(--text-dark)', fontSize: '1.2rem' }}>{service.title}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services
