import React from 'react'
import { CheckCircle, ShieldCheck, Leaf, Target, Eye } from 'lucide-react'

const About = () => {
    const values = [
        "Compromiso", "Integridad", "Responsabilidad ambiental",
        "Calidad", "Disciplina", "Eficiencia operativa", "Desarrollo sostenible"
    ]

    return (
        <section id="about" className="about-section" style={{ padding: '80px 20px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '15px' }}>¿QUIÉNES SOMOS?</h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--primary-orange)', margin: '0 auto' }}></div>
                </div>

                {/* Top Section: Text and Image */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
                    <div style={{ paddingRight: '20px' }}>
                        <h3 style={{ color: 'var(--primary-green)', marginBottom: '20px', fontSize: '1.8rem' }}>GRUPO KIMORA</h3>
                        <p style={{ marginBottom: '15px', fontWeight: 600, fontSize: '1.1rem' }}>Conformado por:</p>
                        <ul style={{ marginBottom: '25px', listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-dark)' }}>
                            <li style={{ marginBottom: '8px' }}>J KIMORA EXPLORER EIRL</li>
                            <li>KIMORA EXPLORER EIRL</li>
                        </ul>
                        <p style={{ lineHeight: '1.8', textAlign: 'justify', color: 'var(--text-light)', fontSize: '1.05rem' }}>
                            Somos una empresa especializada en la explotación y comercialización de minerales no metálicos, con operaciones estratégicamente ubicadas en el norte del Perú. A lo largo de más de tres décadas hemos construido una reputación basada en el cumplimiento, responsabilidad y calidad certificada.
                        </p>
                    </div>
                    <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                        <img
                            src="/images/excavation.png"
                            alt="Operaciones Grimora"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '300px' }}
                        />
                    </div>
                </div>

                {/* Bottom Section: 4 Boxes */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                    {/* Mission */}
                    <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{ width: '60px', height: '60px', background: 'rgba(var(--primary-green-rgb), 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--primary-green)' }}>
                            <Target size={30} />
                        </div>
                        <h4 style={{ color: 'var(--primary-orange)', marginBottom: '15px', fontSize: '1.2rem' }}>Nuestra Misión</h4>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-light)' }}>
                            Brindar soluciones integrales en minerales no metálicos garantizando calidad, suministro continuo y atención personalizada.
                        </p>
                    </div>

                    <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{ width: '60px', height: '60px', background: 'rgba(var(--primary-green-rgb), 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--primary-green)' }}>
                            <Eye size={30} />
                        </div>
                        <h4 style={{ color: 'var(--primary-orange)', marginBottom: '15px', fontSize: '1.2rem' }}>Nuestra Visión</h4>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-light)' }}>
                            Ser el grupo empresarial líder en el norte del Perú reconocido por su excelencia operativa y responsabilidad ambiental.
                        </p>
                    </div>

                    {/* Values */}
                    <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                            <div style={{ width: '60px', height: '60px', background: 'rgba(var(--primary-green-rgb), 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)' }}>
                                <ShieldCheck size={30} />
                            </div>
                        </div>
                        <h4 style={{ color: 'var(--primary-orange)', marginBottom: '20px', fontSize: '1.2rem', textAlign: 'center' }}>Nuestros Valores</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {values.map((val, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                                    <CheckCircle size={14} color="var(--primary-green)" />
                                    {val}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Environmental Commitment */}
                    <div style={{ background: 'var(--primary-green)', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease', color: 'white', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <Leaf size={30} color="white" />
                            </div>
                            <h4 style={{ color: 'var(--primary-orange)', marginBottom: '15px', fontSize: '1.2rem' }}>Compromiso Ambiental</h4>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.9 }}>
                                Promovemos prácticas responsables en la explotación y manejo de minerales, cumpliendo con la normativa vigente y minimizando el impacto ambiental.
                            </p>
                        </div>
                        <Leaf size={150} style={{ position: 'absolute', bottom: -30, right: -30, opacity: 0.1, zIndex: 1 }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
