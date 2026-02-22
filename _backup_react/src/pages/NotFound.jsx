import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', padding: '5rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--primary)' }}>404</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-light)' }}>Page Not Found</p>
            <Link to="/" className="btn btn-primary">Go Back Home</Link>
        </div>
    );
};

export default NotFound;
