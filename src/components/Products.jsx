import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const Products = () => {
    const categories = [
        {
            name: "Minerales No Metálicos",
            items: ["Diatomita", "Yeso", "Caliza", "Baritina", "Óxido de Silicio", "Caolín", "Bentonita Sódica (granel/molida)", "Fosfato", "Carbonato de Ca y Mg", "Carbones y Derivados"]
        },
        {
            name: "Cal y Derivados",
            items: ["Cal hidratada", "Cal viva"]
        },
        {
            name: "Sales",
            items: ["Sal Industrial"]
        },
        {
            name: "Materiales y Construcción",
            items: ["Travertinos", "Piedra laja", "Agregados de construcción civil"]
        },
        {
            name: "Productos Especializados",
            items: ["Compost", "Arena para gato"]
        }
    ]

    return (
        <section id="products" className="products-section" style={{ background: 'var(--bg-light)', maxWidth: '100%', paddingLeft: '40px', paddingRight: '40px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '15px' }}>Nuestros Productos</h2>
                    <p style={{ color: 'var(--text-light)', maxWidth: '700px', margin: '0 auto' }}>
                        Ofrecemos una amplia gama de minerales y materiales para diversas aplicaciones industriales y comerciales, garantizando estándares técnicos rigurosos.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {categories.map((cat, i) => (
                        <div key={i} style={{
                            background: 'white',
                            borderRadius: '20px',
                            padding: '30px',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.03)',
                            borderTop: `5px solid ${i % 2 === 0 ? 'var(--primary-green)' : 'var(--primary-orange)'}`,
                            transition: 'transform 0.3s ease'
                        }} className="product-card">
                            <h3 style={{ color: 'var(--text-dark)', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px', textAlign: 'center' }}>{cat.name}</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {cat.items.map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'var(--text-light)', fontSize: '0.95rem' }}>
                                        <div style={{ width: '6px', height: '6px', background: 'var(--primary-orange)', borderRadius: '50%' }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
                                <a href="#contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-green)', fontWeight: 600, fontSize: '0.9rem' }}>
                                    Solicitar cotización <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products
