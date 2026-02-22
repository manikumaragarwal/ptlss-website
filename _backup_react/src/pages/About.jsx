import React from 'react';
import { Target, Eye, Heart, check } from 'lucide-react';

const About = () => {
    return (
        <div className="page-about">
            {/* Page Header */}
            <div style={{ backgroundColor: 'var(--bg-light)', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Us</h1>
                    <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
                        Building a legacy of education, discipline, and excellence in Kanpur.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ marginBottom: '1.5rem' }}>Our History & Legacy</h2>
                            <p style={{ marginBottom: '1rem', color: 'var(--text-light)' }}>
                                Pt. Laxmi Shanker Saraswati Inter College has been a beacon of knowledge in Kanpur, dedicated to
                                shaping young minds into responsible citizens. Located in Kalyanpur, our institution creates a
                                learning environment that balances academics, values, and modern skills.
                            </p>
                            <p style={{ color: 'var(--text-light)' }}>
                                Under the visionary leadership of our Director, Mr. Amber Tiwari, we strive to set high standards
                                in school education, ensuring every student receives a holistic lifestyle of learning.
                            </p>
                        </div>
                        <div>
                            <div>
                                <img
                                    src="/images/school-front.jpeg"
                                    alt="School Building"
                                    style={{ width: '100%', borderRadius: '0.5rem', boxShadow: 'var(--shadow-lg)' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                        <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '0.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Eye size={32} color="var(--secondary)" />
                                <h3 style={{ color: 'white', margin: 0 }}>Our Vision</h3>
                            </div>
                            <p style={{ opacity: 0.9 }}>
                                To make the school a leading educational institution in Kanpur, known for academic excellence,
                                moral values, innovative teaching methods, and holistic student development.
                            </p>
                        </div>

                        <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '0.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Target size={32} color="var(--secondary)" />
                                <h3 style={{ color: 'white', margin: 0 }}>Our Mission</h3>
                            </div>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', opacity: 0.9 }}>
                                <li style={{ marginBottom: '0.5rem' }}>Deliver high-quality education with modern teaching practices.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Nurture students intellectually, morally, and socially.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Create a safe, disciplined, and inspiring learning environment.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Empower teachers with continuous training and innovation.</li>
                                <li>Prepare students for national and global opportunities.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Core Values</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
                        {['Academic Excellence', 'Discipline & Ethics', 'Student-Centric Approach', 'Innovation in Education', 'Trust & Transparency'].map((value, index) => (
                            <div key={index} style={{ textAlign: 'center', padding: '1.5rem', border: '1px solid #E5E7EB', borderRadius: '0.5rem' }}>
                                <Heart size={24} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
                                <h4 style={{ color: 'var(--primary)' }}>{value}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
