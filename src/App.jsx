// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Features from './Features';
import Enterprise from './Enterprise';
import Support from './Support';


function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
