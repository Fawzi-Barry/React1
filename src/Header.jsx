// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <h1>Company name</h1>
      <nav style={{ marginTop: '10px' }}>
        <Link to="/" style={{ margin: '0 15px' }}>Home</Link>
        <Link to="/features" style={{ margin: '0 15px' }}>Features</Link>
        <Link to="/enterprise" style={{ margin: '0 15px' }}>Enterprise</Link>
        <Link to="/support" style={{ margin: '0 15px' }}>Support</Link>
      </nav>
    </header>
  );
}

export default Header;
