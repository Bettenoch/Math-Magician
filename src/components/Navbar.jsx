import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-items">
    <div data-testid="mylogo" className="logo">Math Magicians</div>
    <ul className="nav-links">
      <li><Link className="navlink" to="/">Home</Link></li>
      <li><Link className="navlink" to="/Calculator">Calculator</Link></li>
      <li><Link to="/Quotes">Quotes</Link></li>
    </ul>
  </nav>
);

export default Navbar;
