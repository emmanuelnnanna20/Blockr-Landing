// src/App.jsx
import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/products'; // renamed from products.jsx
import Blockr from './pages/products/Blockr';
import LockNote from './pages/products/LockNote';
import DeadlineHeat from './pages/products/DeadlineHeat';
import GetInTouch from './pages/GetInTouch';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'products':
        return <Products onNavigate={setCurrentPage} />;
      case 'blockr':
        return <Blockr onNavigate={setCurrentPage} />;
      case 'locknote':
        return <LockNote onNavigate={setCurrentPage} />;
      case 'deadlineheat':
        return <DeadlineHeat onNavigate={setCurrentPage} />;
        case 'contact':
           return <GetInTouch onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  const isHome = currentPage === 'home';

  return (
    <div className={`min-h-screen ${isHome ? 'bg-white' : 'bg-white'}`}>
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      {!isHome && <Footer onNavigate={setCurrentPage} />}
    </div>
  );
}

export default App;