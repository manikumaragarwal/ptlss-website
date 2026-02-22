import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--text-dark)', color: 'var(--text-white)', padding: '3rem 0', marginTop: 'auto' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

                <div>
                    <h3 style={{ borderBottom: '2px solid var(--secondary)', display: 'inline-block', marginBottom: '1rem', color: 'var(--text-white)' }}>Pt. L.S.S. Inter College</h3>
                    <p style={{ color: '#9CA3AF', marginBottom: '1rem' }}>
                        Providing quality education that shapes confident, disciplined, and future-ready students.
                    </p>
                </div>

                <div>
                    <h4 style={{ color: 'var(--text-white)', marginBottom: '1rem' }}>Quick Links</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><a href="/admissions" style={{ '&:hover': { color: 'var(--secondary)' } }}>Admissions</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/director">Director's Message</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ color: 'var(--text-white)', marginBottom: '1rem' }}>Contact Us</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <MapPin size={18} color="var(--secondary)" flexShrink={0} />
                            <span>607/1 Siddharth Nagar, Gooba Garden, Kalyanpur, Kanpur</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Phone size={18} color="var(--secondary)" />
                            <span>8960486321, 7236993451</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Mail size={18} color="var(--secondary)" />
                            <span>ptlssicollege@gmail.com</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Instagram size={18} color="var(--secondary)" />
                            <a href="https://www.instagram.com/pt.lss_inter_college" target="_blank" rel="noopener noreferrer">@pt.lss_inter_college</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #374151', color: '#9CA3AF', fontSize: '0.875rem' }}>
                &copy; {new Date().getFullYear()} Pt. Laxmi Shanker Saraswati Inter College. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
