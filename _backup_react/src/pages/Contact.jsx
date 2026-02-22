import React from 'react';
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="page-contact">
            {/* Header */}
            <div style={{ backgroundColor: 'var(--text-dark)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
                    <p style={{ opacity: 0.8 }}>We'd love to hear from you. Reach out to us for any queries.</p>
                </div>
            </div>

            <div className="container section">
                <div style={{ display: 'grid', md: { gridTemplateColumns: '1fr 1fr' }, gap: '4rem' }}>

                    {/* Contact Info */}
                    <div>
                        <h2 style={{ marginBottom: '2rem' }}>Get in Touch</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ backgroundColor: 'var(--bg-light)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                    <MapPin size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Our Location</h4>
                                    <p style={{ color: 'var(--text-light)' }}>
                                        607/1 Siddharth Nagar, Gooba Garden,<br />
                                        Kalyanpur, Kanpur, Uttar Pradesh
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ backgroundColor: 'var(--bg-light)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                    <Phone size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Phone Number</h4>
                                    <p style={{ color: 'var(--text-light)' }}>
                                        <a href="tel:+918960486321">+91 8960486321</a><br />
                                        <a href="tel:+917236993451">+91 7236993451</a>
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ backgroundColor: 'var(--bg-light)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                    <Mail size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Email Address</h4>
                                    <p style={{ color: 'var(--text-light)' }}>
                                        <a href="mailto:ptlssicollege@gmail.com">ptlssicollege@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ backgroundColor: 'var(--bg-light)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                    <Instagram size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Follow Us</h4>
                                    <p style={{ color: 'var(--text-light)' }}>
                                        <a href="https://www.instagram.com/pt.lss_inter_college" target="_blank" rel="noopener noreferrer">@pt.lss_inter_college</a>
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ backgroundColor: 'var(--bg-light)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                    <Clock size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>School Hours</h4>
                                    <p style={{ color: 'var(--text-light)' }}>
                                        Monday - Saturday: 8:00 AM - 2:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Map */}
                    <div style={{ minHeight: '400px', backgroundColor: '#eee', borderRadius: '0.5rem', overflow: 'hidden' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.627705494165!2d80.2586!3d26.5009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDMwJzAzLjIiTiA4MMKwMTUnMzEuMCJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="School Location"
                        ></iframe>
                        {/* Note: The above coordinates are generic placeholder for Kalyanpur/Kanpur as exact coordinates weren't provided. 
                Ideally we would use the exact place ID if available. 
                Using a query embed instead for better accuracy if possible. */}
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0, minHeight: '400px' }}
                            src={`https://www.google.com/maps?q=607/1+Siddharth+Nagar,+Gooba+Garden,+Kalyanpur,+Kanpur&output=embed`}
                            allowFullScreen
                            title="Google Map"
                        >
                        </iframe>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
