// src/App.jsx
import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/products';
import ProductDetail from './pages/ProductDetail';
import GetInTouch from './pages/GetInTouch';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'products':
        return <Products onNavigate={setCurrentPage} />;
      case 'blockr':
        return <ProductDetail productId="blockr" onNavigate={setCurrentPage} />;
      case 'locknote':
        return <ProductDetail productId="locknote" onNavigate={setCurrentPage} />;
      case 'deadlineheat':
        return <ProductDetail productId="deadlineheat" onNavigate={setCurrentPage} />;
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