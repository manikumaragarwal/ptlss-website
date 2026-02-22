import React, { useState } from 'react';

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const images = [
        // Events
        { id: 1, src: '/images/event1.jpeg', category: 'Events', alt: 'School Event' },
        { id: 2, src: '/images/event2.jpeg', category: 'Events', alt: 'School Event' },
        { id: 3, src: '/images/event3.jpeg', category: 'Events', alt: 'School Event' },
        { id: 4, src: '/images/event4.jpeg', category: 'Events', alt: 'School Event' },

        // Farewell
        { id: 5, src: '/images/farewell1.jpeg', category: 'Farewell', alt: 'Farewell Party' },
        { id: 6, src: '/images/farewell2.jpeg', category: 'Farewell', alt: 'Farewell Party' },
        { id: 7, src: '/images/farewell3.jpeg', category: 'Farewell', alt: 'Farewell Party' },
        { id: 8, src: '/images/farewell4.jpeg', category: 'Farewell', alt: 'Farewell Party' },

        // Kids / Kindergarten
        { id: 9, src: '/images/kidstudents1.jpeg', category: 'Kids', alt: 'Kindergarten Students' },
        { id: 10, src: '/images/kidstudents2.jpeg', category: 'Kids', alt: 'Kindergarten Students' },
        { id: 11, src: '/images/kidstudents3.jpeg', category: 'Kids', alt: 'Kindergarten Students' },

        // Students
        { id: 12, src: '/images/students1.jpeg', category: 'Students', alt: 'Student Activities' },
        { id: 13, src: '/images/students2.jpeg', category: 'Students', alt: 'Student Activities' },
        { id: 14, src: '/images/students3.jpeg', category: 'Students', alt: 'Student Activities' },
        { id: 15, src: '/images/students4.jpeg', category: 'Students', alt: 'Student Activities' },
        { id: 16, src: '/images/students5.jpeg', category: 'Students', alt: 'Student Activities' },
        { id: 17, src: '/images/students 6.jpeg', category: 'Students', alt: 'Student Activities' },
        { id: 18, src: '/images/students7.jpeg', category: 'Students', alt: 'Student Activities' },
        { id: 19, src: '/images/student3.jpeg', category: 'Students', alt: 'Student Activities' },
        { id: 20, src: '/images/student4.jpeg', category: 'Students', alt: 'Student Activities' },
        { id: 21, src: '/images/student5.jpeg', category: 'Students', alt: 'Student Activities' },

        // Campus / Others
        { id: 22, src: '/images/school-front.jpeg', category: 'Campus', alt: 'School Front View' },
        { id: 23, src: '/images/classroom1.jpeg', category: 'Campus', alt: 'Classroom' },
        { id: 24, src: '/images/teachers1.jpeg', category: 'Faculty', alt: 'Teachers' },
        { id: 25, src: '/images/teachers2.jpeg', category: 'Faculty', alt: 'Teachers' },
    ];

    const categories = ['All', 'Events', 'Farewell', 'Kids', 'Students', 'Campus', 'Faculty'];

    const filteredImages = activeCategory === 'All'
        ? images
        : images.filter(img => img.category === activeCategory);

    return (
        <div className="page-gallery">
            <div style={{ backgroundColor: 'var(--bg-light)', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Photo Gallery</h1>
                    <p style={{ color: 'var(--text-light)' }}>Glimpses of life at Pt. L.S.S. Inter College</p>
                </div>
            </div>

            <div className="container section">

                {/* Category Filters */}
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            style={{
                                padding: '0.5rem 1.5rem',
                                borderRadius: '2rem',
                                border: '1px solid var(--secondary)',
                                backgroundColor: activeCategory === category ? 'var(--secondary)' : 'transparent',
                                color: activeCategory === category ? 'white' : 'var(--text-dark)',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Image Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {filteredImages.map((image) => (
                        <div key={image.id} style={{
                            borderRadius: '0.5rem',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-sm)',
                            height: '250px',
                            position: 'relative',
                            group: 'hover'
                        }}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: 'rgba(0,0,0,0.6)',
                                color: 'white',
                                padding: '0.5rem',
                                fontSize: '0.875rem',
                                opacity: 0,
                                transition: 'opacity 0.3s ease'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                            // Note: hover effect via inline styles is tricky in React without CSS classes or state. 
                            // For simplicity, we'll keep the caption hidden or just assume a simple grid for now.
                            // Let's remove the hover caption complexity for this iteration to ensure it works cleanly.
                            >
                                {image.category}
                            </div>
                        </div>
                    ))}
                </div>

                {filteredImages.length === 0 && (
                    <p style={{ textAlign: 'center', color: 'var(--text-light)', marginTop: '2rem' }}>
                        No images found in this category.
                    </p>
                )}

            </div>
        </div>
    );
};

export default Gallery;
