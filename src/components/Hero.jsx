import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section id="home" className="hero-section" style={{
            maxWidth: '100%',
            padding: '120px 0 80px',
            background: 'linear-gradient(135deg, #f8fbf8 0%, #ffffff 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', padding: '0 20px' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'var(--primary-green)' }}>
                        GRUPO KIMORA <br />
                        <span style={{ color: 'var(--primary-orange)', fontSize: '1.5rem', display: 'block', marginTop: '10px' }}>PRODUCTORES Y COMERCIALIZADORES DE MINERALES NO METÁLICOS</span>
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '30px', textAlign: 'justify' }}>
                        Con más de 35 años de experiencia en la explotación y comercialización de minerales no metálicos, GRUPO KIMORA se consolida como una empresa líder en el norte del Perú, brindando soluciones confiables, eficientes y de alta calidad para diversas industrias.
                    </p>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <a href="#products" className="btn btn-primary">Nuestros Productos</a>
                        <a href="#contact" className="btn btn-secondary" style={{ background: 'transparent', color: 'var(--primary-green)', border: '2px solid var(--primary-green)' }}>Solicitar Información</a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ position: 'relative' }}
                >
                    <div style={{
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '20px 20px 60px rgba(0,0,0,0.1)',
                        border: '8px solid white'
                    }}>
                        <img src="/images/hero_industrial.png" alt="Maquinaria industrial KIMORA" style={{ width: '100%', display: 'block' }} />
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '-20px',
                        right: '-20px',
                        background: 'var(--primary-orange)',
                        padding: '20px',
                        borderRadius: '16px',
                        color: 'white',
                        boxShadow: '0 10px 30px rgba(243, 112, 33, 0.4)'
                    }}>
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>35+ Años</h4>
                        <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>de trayectoria sólida</p>
                    </div>
                </motion.div>
            </div>

            {/* Decorative blobs */}
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(74, 124, 68, 0.05)', zIndex: -1 }}></div>
            <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(243, 112, 33, 0.05)', zIndex: -1 }}></div>
        </section>
    )
}

export default Hero
