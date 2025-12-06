// src/components/Navigation.jsx
import { useState, useEffect } from 'react';

const Navigation = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Our Products', id: 'products' },
  ];

  const isActive = (id) => currentPage === id;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden lg:block ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo — always dark */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2.5 group">
            <img
              src="/favicon.png"
              alt="Blockr Labs"
              className="w-8 h-8 rounded-lg shadow-md group-hover:scale-110 transition-transform"
            />
            <span className="text-xl font-bold text-gray-900">
              Blockr Labs
            </span>
          </button>

          {/* Pill — ALWAYS VISIBLE (just changes slightly on scroll) */}
          <div className={`rounded-full px-5 py-2.5 border transition-all ${
            scrolled
              ? 'bg-gray-100/90 border-gray-200'
              : 'bg-white/80 backdrop-blur-md border-white/50'
          }`}>
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.id)
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  {isActive(item.id) && (
                    <div className="mx-auto mt-1 w-1 h-1 bg-blue-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Get in Touch — FIXED TO USE 'contact' */}
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:scale-105 transition-all"
          >
            Get in Touch
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 lg:hidden">
        <div className="px-5 py-4 flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
            <img src="/favicon.png" alt="Blockr Labs" className="w-7 h-7 rounded" />
            <span className="text-lg font-bold text-gray-900">Blockr Labs</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 flex flex-col justify-center gap-1"
          >
            <span className={`w-6 h-0.5 bg-gray-800 rounded-full transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-6 h-0.5 bg-gray-800 rounded-full transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-gray-800 rounded-full transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="bg-white border-b border-gray-100 px-6 py-6 shadow-lg">
            <div className="space-y-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { onNavigate(item.id); setMobileMenuOpen(false); }}
                  className={`block w-full text-left text-lg font-medium ${isActive(item.id) ? 'text-blue-600' : 'text-gray-800'}`}
                >
                  {item.name}
                </button>
              ))}
              {/* FIXED TO USE 'contact' */}
              <button
                onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;