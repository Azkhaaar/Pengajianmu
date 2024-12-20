import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/image/logo.jpg`} alt="Logo PengajianMu" />
                <span className="logo-text">PengajianMu</span>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            </div>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/kajian-ku" onClick={toggleMenu}>KajianKu</Link></li>
                    <li><Link to="/kajian-mu" onClick={toggleMenu}>KajianMu</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;