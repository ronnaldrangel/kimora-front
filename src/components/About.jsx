import React from 'react'
import { CheckCircle } from 'lucide-react'

const About = () => {
    const values = [
        "Compromiso", "Integridad", "Responsabilidad ambiental",
        "Calidad", "Disciplina", "Eficiencia operativa", "Desarrollo sostenible"
    ]

    return (
        <section id="about" className="about-section">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '15px' }}>¿QUIÉNES SOMOS?</h2>
                <div style={{ width: '80px', height: '4px', background: 'var(--primary-orange)', margin: '0 auto' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
                <div style={{ padding: '40px', background: 'var(--bg-light)', borderRadius: '24px' }}>
                    <h3 style={{ color: 'var(--primary-green)', marginBottom: '15px' }}>GRUPO KIMORA</h3>
                    <p style={{ marginBottom: '15px', fontWeight: 600 }}>Conformado por:</p>
                    <ul style={{ marginBottom: '20px', listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>J KIMORA EXPLORER EIRL</li>
                        <li>KIMORA EXPLORER EIRL</li>
                    </ul>
                    <p style={{ marginBottom: '20px', textAlign: 'justify' }}>
                        Somos una empresa especializada en la explotación y comercialización de minerales no metálicos, con operaciones estratégicamente ubicadas en el norte del Perú. A lo largo de más de tres décadas hemos construido una reputación basada en el cumplimiento, responsabilidad y calidad certificada.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
                        <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ color: 'var(--primary-orange)', marginBottom: '10px' }}>Nuestra Misión</h4>
                            <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Brindar soluciones integrales en minerales no metálicos garantizando calidad, suministro continuo y atención personalizada.</p>
                        </div>
                        <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ color: 'var(--primary-orange)', marginBottom: '10px' }}>Nuestra Visión</h4>
                            <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Ser el grupo empresarial líder en el norte del Perú reconocido por su excelencia operativa y responsabilidad ambiental.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 style={{ color: 'var(--primary-green)', marginBottom: '25px' }}>Nuestros Valores</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        {values.map((item, i) => (
                            <li key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '1rem',
                                padding: '12px 20px',
                                background: 'white',
                                borderRadius: '10px',
                                borderLeft: '4px solid var(--primary-green)',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}>
                                <CheckCircle size={18} color="var(--primary-orange)" />
                                {item}
                            </li>
                        ))}
                    </div>

                    <div style={{
                        marginTop: '40px',
                        padding: '30px',
                        background: 'var(--primary-green)',
                        color: 'white',
                        borderRadius: '20px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <h4 style={{ marginBottom: '10px', position: 'relative', zIndex: 1 }}>Compromiso Ambiental</h4>
                        <p style={{ fontSize: '0.95rem', opacity: 0.9, position: 'relative', zIndex: 1 }}>
                            Promovemos prácticas responsables en la explotación y manejo de minerales, cumpliendo con la normativa vigente y minimizando el impacto ambiental.
                        </p>
                        <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1 }}>
                            <CheckCircle size={120} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
