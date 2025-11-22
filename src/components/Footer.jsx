import React from 'react';
import { Zap } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  return (
    <footer className="py-16 px-6 bg-[#0a0a1a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/favicon.png" 
                alt="Blockr Labs Logo" 
                className="w-10 h-10 rounded-xl shadow-lg shadow-[#2563eb]/50 object-contain"
              />
              <span className="text-2xl font-bold text-white">Blockr Labs</span>
            </div>
            <p className="text-gray-400 text-sm">
              Building digital tools to help people focus, achieve, and thrive.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setCurrentPage('blockr')} className="hover:text-[#2563eb] transition-colors">Blockr</button></li>
              <li><button onClick={() => setCurrentPage('locknote')} className="hover:text-[#2563eb] transition-colors">LockNote</button></li>
              <li><button onClick={() => setCurrentPage('flashsave')} className="hover:text-[#2563eb] transition-colors">FlashSave</button></li>
              <li><button onClick={() => setCurrentPage('deadlineheat')} className="hover:text-[#2563eb] transition-colors">DeadlineHeat</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-[#2563eb] transition-colors">About</button></li>
              <li><a href="#" className="hover:text-[#2563eb] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#2563eb] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#2563eb] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#2563eb] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2025 Blockr Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://x.com/useblockr" className="text-gray-400 hover:text-[#2563eb] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/blockrlabs/" className="text-gray-400 hover:text-[#2563eb] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}