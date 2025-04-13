import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 shadow-md">
    <h1 className="text-2xl font-bold">SnapDealz</h1>
    <div className="space-x-4">
      <Link to="/" className="text-blue-600 hover:underline">Home</Link>
      <Link to="/products" className="text-blue-600 hover:underline">Products</Link>
      <Link to="/about" className="text-blue-600 hover:underline">About</Link>
      <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
    </div>
  </nav>
);

const Landing = () => (
  <div className="text-center mt-10">
    <h2 className="text-4xl font-bold mb-4">Welcome to SnapDealz</h2>
    <p className="text-xl italic">The World? In a Snap.</p>
    <div className="mt-10 flex flex-wrap justify-center gap-6">
      <div className="w-64 bg-white shadow-lg rounded-2xl p-4">
        <img src="https://via.placeholder.com/300x200" alt="Ad 1" className="rounded-lg" />
        <p className="mt-2 font-semibold">Affordable. Pristine. Shop Now.</p>
      </div>
      <div className="w-64 bg-white shadow-lg rounded-2xl p-4">
        <img src="https://via.placeholder.com/300x200" alt="Ad 2" className="rounded-lg" />
        <p className="mt-2 font-semibold">Affordable. Pristine. Shop Now.</p>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="mt-20 py-6 text-center text-gray-600 border-t">
    <p>&copy; 2025 SnapDealz. The World? In a Snap.</p>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Landing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
