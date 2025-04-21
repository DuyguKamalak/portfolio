import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ language = 'tr', setLanguage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Framer Motion variants for sidebar animation
  const sidebarVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
    closed: { x: '100%', transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  // Framer Motion variants for menu items
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <>
   <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-light-green to-forest-green bg-opacity-90 backdrop-blur-md z-50 border-b border-emerald">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo (Mobil modda DK metni, Desktop modda fotoğraf) */}
            <div className="flex-shrink-0">
              {/* Mobil modda görünen logo (DK metni) */}
              <motion.a
                href="/"
                data-discover="true"
                className="md:hidden text-2xl font-cinzel text-golden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.8 } }}
              >
                DK
              </motion.a>
              {/* Desktop modda görünen fotoğraf */}
              <motion.a
                href="/"
                data-discover="true"
                className="hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
              >
                <img
                  src="/images/profile-photo.jpg"
                  alt="Profile Photo"
                  className="w-14 h-14 rounded-full border-0 border-golden shadow-md object-cover"
                />
              </motion.a>
            </div>


            {/* Desktop Links */}
            <div className="hidden md:flex leaf-links space-x-6">
              <motion.a
                className="leaf-link"
                href="/about"
                data-discover="true"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              >
                {language === 'en' ? 'About' : 'Hakkında'}
              </motion.a>
              <motion.a
                className="leaf-link"
                href="/projects"
                data-discover="true"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } }}
              >
                {language === 'en' ? 'Projects' : 'Projeler'}
              </motion.a>
              <motion.a
                className="leaf-link"
                href="/contact"
                data-discover="true"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } }}
              >
                {language === 'en' ? 'Contact' : 'İletişim'}
              </motion.a>
            </div>

            {/* Language Button (Desktop) */}
            <div className="relative">
              <motion.button
                onClick={toggleDropdown}
                className="text-cream font-bold px-4 py-2 rounded-lg flex items-center space-x-2 bg-forest-green bg-opacity-50 border border-emerald"
                style={{ boxShadow: 'rgb(76, 175, 80) 0px 0px 0px' }}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.8 } }}
              >
                <span>{language === 'en' ? 'Language' : 'Dil'}</span>
                <svg
                  className={`w-4 h-4 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.button>
              {isDropdownOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-32 bg-forest-green rounded-lg shadow-lg z-50 border border-emerald"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                >
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
                </motion.div>
              )}
            </div>

            {/* Hamburger Menu Button (Mobile) */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleSidebar}
                className="text-cream p-2 focus:outline-none"
                aria-label={isSidebarOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isSidebarOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <motion.div
        className="fixed inset-y-0 right-0 w-80 bg-gradient-to-b from-light-green to-forest-green bg-opacity-90 backdrop-blur-lg z-50 md:hidden"
        initial="closed"
        animate={isSidebarOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
      >
        <div className="relative flex flex-col h-full p-6">
          {/* Close Button */}
          <motion.button
            onClick={toggleSidebar}
            className="absolute top-2 right-2 text-cream p-2 rounded-full hover:bg-emerald/30 focus:outline-none"
            aria-label="Menüyü Kapat"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.8 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>

          {/* Sidebar Logo (Yuvarlak Fotoğraf) */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.8 } }}
          >
            <a href="/" data-discover="true" onClick={toggleSidebar}>
              <img
                src="/images/profile-photo.jpg"
                alt="Profile Photo"
                className="w-24 h-24 rounded-full border-0 border-golden shadow-md object-cover"
              />
            </a>
          </motion.div>

          {/* Sidebar Links */}
          <div className="flex flex-col space-y-6">
            {[
              { href: '/', text: language === 'en' ? 'Home' : 'Ana Sayfa' },
              { href: '/about', text: language === 'en' ? 'About' : 'Hakkında' },
              { href: '/projects', text: language === 'en' ? 'Projects' : 'Projeler' },
              { href: '/contact', text: language === 'en' ? 'Contact' : 'İletişim' },
            ].map((item, index) => (
              <motion.a
                key={item.href}
                className="leaf-link text-cream text-lg relative overflow-hidden"
                href={item.href}
                data-discover="true"
                onClick={toggleSidebar}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {item.text}
                {/* Hover’da alt çizgi efekti */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-golden transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </motion.a>
            ))}
          </div>

          {/* Language Button in Sidebar */}
          <div className="mt-auto">
            <motion.button
              onClick={toggleDropdown}
              className="text-cream font-bold px-4 py-2 rounded-xl flex items-center space-x-2 bg-forest-green bg-opacity-70 border border-emerald w-full justify-center shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1, duration: 0.8 } }}
              whileHover={{ scale: 1.05 }}
            >
              <span>{language === 'en' ? 'Language' : 'Dil'}</span>
              <svg
                className={`w-4 h-4 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.button>
            {isDropdownOpen && (
              <motion.div
                className="mt-2 w-full bg-forest-green rounded-lg shadow-lg z-50 border border-emerald"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, type: 'spring', stiffness: 100 } }}
              >
                <button
                  onClick={() => { setLanguage('en'); setIsDropdownOpen(false); toggleSidebar(); }}
                  className="block w-full text-left px-4 py-2 text-cream font-bold hover:bg-emerald hover:text-golden rounded-t-lg"
                >
                  English
                </button>
                <button
                  onClick={() => { setLanguage('tr'); setIsDropdownOpen(false); toggleSidebar(); }}
                  className="block w-full text-left px-4 py-2 text-cream font-bold hover:bg-emerald hover:text-golden rounded-b-lg"
                >
                  Türkçe
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <motion.div
          className="fixed inset-0 bg-green-950 bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
        />
      )}
    </>
  );
};

export default Navbar;