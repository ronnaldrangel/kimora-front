import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Gallery = () => {
    const images = [
        { url: "/gallery/image (1).jpeg", title: "Proceso de Extracción" },
        { url: "/gallery/image (2).jpeg", title: "Operaciones en Cantera" },
        { url: "/gallery/image (3).jpeg", title: "Maquinaria Especializada" },
        { url: "/gallery/image (4).jpeg", title: "Transporte de Minerales" },
        { url: "/gallery/image (5).jpeg", title: "Infraestructura Industrial" }
    ]

    return (
        <section id="gallery" className="gallery-section">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '15px' }}>Galería Corporativa</h2>
                <p style={{ color: 'var(--text-light)' }}>Transparencia y profesionalismo en cada etapa de nuestro proceso.</p>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    style={{ paddingBottom: '50px' }}
                >
                    {images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <div style={{
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
                        </SwiperSlide>
                    ))}
                </Swiper>
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
        /* Customize Swiper Navigation Color */
        .swiper-button-next, .swiper-button-prev {
            color: var(--primary-green) !important;
        }
        .swiper-pagination-bullet-active {
            background: var(--primary-green) !important;
        }
      `}</style>
        </section>
    )
}

export default Gallery
