import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
    const images = [
        { url: "/gallery/image (1).jpeg", title: "Proceso de Extracción" },
        { url: "/gallery/image (2).jpeg", title: "Operaciones en Cantera" },
        { url: "/gallery/image (3).jpeg", title: "Maquinaria Especializada" },
        { url: "/gallery/image (4).jpeg", title: "Transporte de Minerales" },
        { url: "/gallery/image (5).jpeg", title: "Infraestructura Industrial" }
    ]

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + 3 >= images.length ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? Math.max(0, images.length - 3) : prev - 1
        );
    };

    const visibleImages = images.slice(currentIndex, currentIndex + 3);
    // If we're near the end and don't have 3 images, take the last 3
    const displayImages = visibleImages.length < 3 && images.length >= 3
        ? images.slice(images.length - 3)
        : visibleImages;

    return (
        <section id="gallery" className="gallery-section">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '15px' }}>Galería Corporativa</h2>
                <p style={{ color: 'var(--text-light)' }}>Transparencia y profesionalismo en cada etapa de nuestro proceso.</p>
            </div>

            <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                    {displayImages.map((img, i) => (
                        <div key={i} style={{
                            height: '300px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                        }} className="gallery-item">
                            <img src={img.url} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
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

                <button
                    onClick={prevSlide}
                    style={{
                        position: 'absolute',
                        left: '-50px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                        color: 'var(--primary-green)'
                    }}
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={nextSlide}
                    style={{
                        position: 'absolute',
                        right: '-50px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                        color: 'var(--primary-green)'
                    }}
                >
                    <ChevronRight size={24} />
                </button>
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
