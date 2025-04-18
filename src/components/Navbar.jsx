import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ language, setLanguage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-light-green to-forest-green bg-opacity-90 backdrop-blur-md z-50 border-b border-emerald">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-cinzel text-golden">
              DK
            </Link>
          </div>
          <div className="hidden md:flex leaf-links">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="/about" className="leaf-link">
                {language === 'en' ? 'About' : 'Hakkında'}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="/projects" className="leaf-link">
                {language === 'en' ? 'Projects' : 'Projeler'}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="/contact" className="leaf-link">
                {language === 'en' ? 'Contact' : 'İletişim'}
              </Link>
            </motion.div>
          </div>
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0 0 10px #4CAF50' }}
              onClick={toggleDropdown}
              className="text-cream font-bold px-4 py-2 rounded-lg flex items-center space-x-2 bg-forest-green bg-opacity-50 border border-emerald"
            >
              <span>{language === 'en' ? 'Language' : 'Dil'}</span>
              <svg
                className={`w-4 h-4 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-forest-green rounded-lg shadow-lg z-50 border border-emerald">
                <button
                  onClick={() => { setLanguage('en'); setIsDropdownOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-cream font-bold hover:bg-emerald hover:text-golden rounded-t-lg"
                >
                  English
                </button>
                <button
                  onClick={() => { setLanguage('tr'); setIsDropdownOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-cream font-bold hover:bg-emerald hover:text-golden rounded-b-lg"
                >
                  Türkçe
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;