import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Download } from 'lucide-react';

const Admissions = () => {
    return (
        <div className="page-admissions">
            <div style={{ backgroundColor: 'var(--secondary)', color: 'var(--text-dark)', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Admissions Open</h1>
                    <p style={{ fontSize: '1.25rem' }}>For Academic Session 2025-2026</p>
                </div>
            </div>

            <div className="container section">
                <div style={{ display: 'grid', md: { gridTemplateColumns: '2fr 1fr' }, gap: '4rem' }}>

                    <div style={{ gridColumn: 'span 2' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>Join Our Family</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                            We welcome students from all backgrounds who are eager to learn and grow.
                            Our admission process is designed to be simple and transparent.
                            <br /><br />
                            <strong>Classes Open:</strong> Play Group (PG) to Class 12th.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                            <div style={{ border: '1px solid #E5E7EB', padding: '1.5rem', borderRadius: '0.5rem' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Why Apply?</h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} color="green" /> Experienced Faculty</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} color="green" /> Modern Labs</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} color="green" /> Sports Facilities</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} color="green" /> Secure Campus</li>
                                </ul>
                            </div>

                            <div style={{ border: '1px solid #E5E7EB', padding: '1.5rem', borderRadius: '0.5rem' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Age Criteria</h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li><strong>PG:</strong> 3+ Years</li>
                                    <li><strong>Nursery:</strong> 4+ Years</li>
                                    <li><strong>Class 1:</strong> 6+ Years</li>
                                </ul>
                            </div>
                        </div>

                        <h2 style={{ marginBottom: '1.5rem' }}>Admission Process</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ backgroundColor: 'var(--primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>1</div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Registration</h4>
                                    <p>Visit the school office to collect the registration form or download it online.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ backgroundColor: 'var(--primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>2</div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Submission</h4>
                                    <p>Submit the completed form along with required documents (Birth Certificate, Photographs, etc.).</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ backgroundColor: 'var(--primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>3</div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Interaction/Test</h4>
                                    <p>For higher classes, a basic written test may be conducted. For junior classes, an interaction with parents and child.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ backgroundColor: 'var(--primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>4</div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Confirmation</h4>
                                    <p>Pay the admission fee to confirm your seat.</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                            <button className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Download size={18} /> Download Admission Form
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admissions;
