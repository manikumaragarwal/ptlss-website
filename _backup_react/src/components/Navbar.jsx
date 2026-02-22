import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Director\'s Profile', path: '/director' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="navbar" style={{ backgroundColor: 'var(--primary)', color: 'var(--text-white)', padding: '1rem 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
                    <Landmark size={32} color="var(--secondary)" />
                    <span>Pt. L.S.S. Inter College</span>
                </Link>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} style={{ display: 'none', background: 'none', color: 'white' }}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Links */}
                <ul className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                style={({ isActive }) => ({
                                    color: isActive ? 'var(--secondary)' : 'white',
                                    fontWeight: isActive ? '600' : '400',
                                    borderBottom: isActive ? '2px solid var(--secondary)' : 'none',
                                    paddingBottom: '4px'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu (Inline styles for simplicity, better in CSS) */}
            <style>{`
        @media (max-width: 768px) {
          .nav-links {
            display: ${isOpen ? 'flex' : 'none'} !important;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background-color: var(--primary);
            padding: 1rem;
            text-align: center;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
