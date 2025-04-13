import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <header className="p-4 bg-black text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">SnapDealz</h1>
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="text-center p-4 bg-gray-100 mt-10">
        <p className="text-sm">© 2025 SnapDealz. The World? In a Snap.</p>
      </footer>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
