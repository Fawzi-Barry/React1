// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={{ marginTop: '50px', padding: '20px', borderTop: '1px solid #ccc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h4>Features</h4>
          <p><a href="/">Cool stuff</a></p>
          <p><a href="/">Random feature</a></p>
          <p><a href="/">Team feature</a></p>
        </div>
        <div>
          <h4>Resources</h4>
          <p><a href="/">Resource</a></p>
          <p><a href="/">Resource name</a></p>
        </div>
        <div>
          <h4>About</h4>
          <p><a href="/">Team</a></p>
          <p><a href="/">Locations</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
