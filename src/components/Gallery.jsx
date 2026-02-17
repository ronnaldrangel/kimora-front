import React from 'react'

const Gallery = () => {
    const images = [
        { url: "/images/hero_industrial.png", title: "Operaciones en Planta" },
        { url: "/images/excavation.png", title: "Excavación y Movimiento" },
        { url: "/images/baritina.png", title: "Minerales Extraídos" },
        { url: "/images/cat_litter.png", title: "Nuevos Productos" },
        { url: "/images/bentonite.png", title: "Bentonita Industrial" },
        { url: "/images/logo.png", title: "Grupo KIMORA EIRL" }
    ]

    return (
        <section id="gallery" className="gallery-section">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '15px' }}>Galería Corporativa</h2>
                <p style={{ color: 'var(--text-light)' }}>Transparencia y profesionalismo en cada etapa de nuestro proceso.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                {images.map((img, i) => (
                    <div key={i} style={{
                        height: '300px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        position: 'relative'
                    }} className="gallery-item">
                        <img src={img.url} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            display: 'flex',
                            alignItems: 'flex-end',
                            padding: '20px'
                        }} className="overlay">
                            <span style={{ color: 'white', fontWeight: 600 }}>{img.title}</span>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .gallery-item:hover .overlay {
          opacity: 1;
        }
        .gallery-item img {
          transition: transform 0.5s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.1);
        }
      `}</style>
        </section>
    )
}

export default Gallery
