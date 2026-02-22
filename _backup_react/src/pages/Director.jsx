import React from 'react';
import { Quote } from 'lucide-react';

const Director = () => {
    return (
        <div className="page-director">
            {/* Header */}
            <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Director's Profile</h1>
                    <p style={{ opacity: 0.9, fontSize: '1.25rem' }}>Mr. Amber Tiwari</p>
                </div>
            </div>

            <div className="container section">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>

                    {/* Profile Image Column */}
                    <div style={{ position: 'sticky', top: '2rem' }}>
                        <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                            <img
                                src="/images/director.jpeg"
                                alt="Mr. Amber Tiwari"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '1.5rem', marginTop: '1.5rem', borderRadius: '0.5rem', boxShadow: 'var(--shadow-md)' }}>
                            <h3 style={{ borderBottom: '2px solid var(--secondary)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Quick Facts</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li><strong>Designation:</strong> Director</li>
                                <li><strong>Sector:</strong> Education (School)</li>
                                <li><strong>Location:</strong> Kanpur</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Content Column */}
                <div>
                    <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Visionary Leadership</h2>
                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                        Mr. Amber Tiwari is one of the top and most respected school directors in Kanpur, widely recognized for his visionary leadership and outstanding contribution to the field of education. With a strong commitment to academic excellence and student-centric development, he has played a key role in setting high standards in school education.
                    </p>

                    <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: '0.5rem', borderLeft: '4px solid var(--secondary)', marginBottom: '2rem' }}>
                        <Quote size={40} color="var(--primary)" style={{ opacity: 0.2 }} />
                        <blockquote style={{ fontStyle: 'italic', fontSize: '1.25rem', marginTop: '-1.5rem', zIndex: 1, position: 'relative' }}>
                            “Education is not only about marks, but about building character, confidence, and capability. Our mission is to nurture students who are ready to lead tomorrow.”
                        </blockquote>
                    </div>

                    <h3 style={{ marginBottom: '1rem' }}>Director’s Aim</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Mr. Amber Tiwari’s aim is to provide quality education that shapes confident, disciplined, and future-ready students, while creating a learning environment that balances academics, values, and modern skills.
                    </p>

                    <h3 style={{ marginBottom: '1rem' }}>Leadership Philosophy</h3>
                    <p>
                        As a school director, Mr. Amber Tiwari strongly believes that education is the foundation of a successful society. His leadership focuses on discipline, innovation, character building, and continuous improvement in teaching standards.
                    </p>
                </div>

            </div>
        </div>

    );
};

export default Director;
