import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Shield, ArrowRight, Star } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section
                className="hero-section"
                style={{
                    background: 'linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.7)), url("/images/school-front.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    padding: '8rem 0',
                    textAlign: 'center'
                }}
            >
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>Pt. Laxmi Shanker Saraswati Inter College</h1>
                    <p style={{ fontSize: '1.5rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                        Approaching Education with a Vision. Admissions Open from PG to Class 12th.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/admissions" className="btn btn-secondary">Apply Now</Link>
                        <Link to="/contact" className="btn" style={{ backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}>Contact Us</Link>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="section bg-light">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Choose Us?</h2>
                        <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            We are committed to providing a holistic learning environment that nurtures intellectual, moral, and social growth.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                        <div className="card" style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: 'var(--shadow-md)' }}>
                            <div style={{ color: 'var(--secondary)', marginBottom: '1rem' }}><BookOpen size={40} /></div>
                            <h3>Academic Excellence</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                Rigorous curriculum designed to challenge students and foster a love for learning, preparing them for future success.
                            </p>
                        </div>

                        <div className="card" style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: 'var(--shadow-md)' }}>
                            <div style={{ color: 'var(--secondary)', marginBottom: '1rem' }}><Users size={40} /></div>
                            <h3>Holistic Development</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                Beyond academics, we focus on character building, extracurricular activities, and life skills.
                            </p>
                        </div>

                        <div className="card" style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: 'var(--shadow-md)' }}>
                            <div style={{ color: 'var(--secondary)', marginBottom: '1rem' }}><Shield size={40} /></div>
                            <h3>Safe Environment</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                A disciplined and secure campus where every student feels valued, respected, and safe to express themselves.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Director's Message Snippet */}
            <section className="section" style={{ backgroundColor: 'white' }}>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' }, alignItems: 'center', gap: '4rem' }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>Message from the Director</h2>
                        <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', borderLeft: '4px solid var(--secondary)', paddingLeft: '1rem', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            "Education is not only about marks, but about building character, confidence, and capability. Our mission is to nurture students who are ready to lead tomorrow."
                        </blockquote>
                        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>- Mr. Amber Tiwari</p>
                        <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Director, Pt. L.S.S. Inter College</p>
                        <Link to="/director" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            Read Full Profile <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Placeholder for Director Image / Abstract Graphic */}
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                            width: '300px',
                            height: '300px',
                            backgroundColor: 'var(--bg-light)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '10px solid var(--bg-light)',
                            boxShadow: 'var(--shadow-lg)',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="/images/director.jpeg"
                                alt="Mr. Amber Tiwari"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Join Our Family?</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
                        Admissions are open for the upcoming academic session. Secure your child's future today.
                    </p>
                    <Link to="/admissions" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                        Start Admission Process
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
