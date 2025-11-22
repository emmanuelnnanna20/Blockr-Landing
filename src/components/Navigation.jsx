import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Clock, Lock, Clipboard, Timer, Zap } from 'lucide-react';

export default function Navigation({ currentPage, setCurrentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { name: 'Blockr', page: 'blockr', icon: Clock, color: '#2563eb' },
    { name: 'LockNote', page: 'locknote', icon: Lock, color: '#00ffd4' },
    { name: 'FlashSave', page: 'flashsave', icon: Clipboard, color: '#8B5CF6' },
    { name: 'DeadlineHeat', page: 'deadlineheat', icon: Timer, color: '#2563eb' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a1a]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => setCurrentPage('home')} className="flex items-center space-x-3 group">
            <img 
              src="/favicon.png" 
              alt="Blockr Labs Logo" 
              className="w-10 h-10 rounded-xl shadow-lg shadow-[#2563eb]/50 group-hover:scale-110 transition-transform object-contain"
            />
            <span className="text-2xl font-bold text-white">Blockr Labs</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => setCurrentPage('home')} className="text-gray-300 hover:text-[#2563eb] transition-colors font-semibold">
              Home
            </button>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
                className="flex items-center space-x-1 text-gray-300 hover:text-[#2563eb] transition-colors font-semibold"
              >
                <span>Products</span>
                <ChevronDown size={16} className={`transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {productsDropdownOpen && (
                <div
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-[#1a1a2e] rounded-xl shadow-2xl border border-[#2563eb]/20 overflow-hidden"
                >
                  {products.map((product) => (
                    <button
                      key={product.page}
                      onClick={() => {
                        setCurrentPage(product.page);
                        setProductsDropdownOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-[#2563eb]/10 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${product.color}20` }}>
                        <product.icon size={20} style={{ color: product.color }} />
                      </div>
                      <span className="text-white group-hover:text-[#2563eb] transition-colors">{product.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="px-6 py-2 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#2563eb]/50 transition-all text-white">
              Download Apps
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 bg-[#1a1a2e] rounded-lg p-4">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-300 hover:text-[#2563eb] font-semibold">
              Home
            </button>
            <div className="space-y-2">
              <div className="text-gray-400 text-sm font-semibold px-2">Products</div>
              {products.map((product) => (
                <button
                  key={product.page}
                  onClick={() => { setCurrentPage(product.page); setMobileMenuOpen(false); }}
                  className="w-full flex items-center space-x-3 px-2 py-2 text-gray-300 hover:text-[#2563eb] transition-colors"
                >
                  <product.icon size={18} style={{ color: product.color }} />
                  <span>{product.name}</span>
                </button>
              ))}
            </div>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-lg font-semibold text-white">
              Download Apps
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}