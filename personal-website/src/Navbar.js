import React from 'react';
import './CSS/navbar.css';
import { Link } from 'react-router-dom'; // Import Link

function Navbar() {
    return (
        <nav>
            <ul>
                <li style={{ float: 'left' }}><Link to="/">Yin Wah</Link></li>
                <li><Link to="/documentation">Documentation</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;