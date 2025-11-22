import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blockr from './pages/products/Blockr';
import LockNote from './pages/products/LockNote';
import FlashSave from './pages/products/FlashSave';
import DeadlineHeat from './pages/products/DeadlineHeat';
import './styles/animations.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === 'blockr' && <Blockr />}
      {currentPage === 'locknote' && <LockNote />}
      {currentPage === 'flashsave' && <FlashSave />}
      {currentPage === 'deadlineheat' && <DeadlineHeat />}
      
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}