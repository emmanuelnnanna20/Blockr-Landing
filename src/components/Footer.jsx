// src/components/Footer.jsx
import { FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { SiThreads } from 'react-icons/si';

const Footer = ({ onNavigate }) => {
  const socials = [
    { name: 'Instagram', icon: FiInstagram, url: 'https://instagram.com/blockrlabs' },
    { name: 'LinkedIn',   icon: FiLinkedin,   url: 'https://linkedin.com/company/blockrlabs' },
    { name: 'X (Twitter)', icon: FiTwitter,    url: 'https://x.com/blockrlabs' },
    { name: 'Threads',    icon: SiThreads,     url: 'https://threads.net/@blockrlabs' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-10 border-b border-gray-200">
          <button onClick={() => onNavigate('home')} className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              alt="Blockr Labs Logo" 
              className="w-10 h-10 rounded-xl shadow-lg shadow-[#2563eb]/50 group-hover:scale-110 transition-transform object-contain"
            />
            <span className="text-2xl font-bold text-gray-600">Blockr Labs</span>
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-blue-50 flex items-center justify-center transition-all group"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600">
          <p>© 2025 Blockr Labs. All rights reserved.</p>

          <div className="flex items-center gap-8 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-900 transition">Terms</a>
            <a href="#" className="hover:text-gray-900 transition">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;