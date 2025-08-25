import React from 'react';
import './CSS/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><Link to="/">Yin Wah</Link></li>
                <li className="navbar-item"><Link to="/documentation">Documentation</Link></li>
                <li className="navbar-item"><Link to="/">Home</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
