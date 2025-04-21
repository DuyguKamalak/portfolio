import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = ({ language }) => {
  return (
    <div className="relative min-h-screen p-8 pt-20 overflow-hidden">
      <div className="wood-texture"></div>
      <div className="relative z-20 max-w-4xl mx-auto text-center space-y-8">
        <motion.h1
          className="forest-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          {language === 'en' ? "Duygu Kamalak" : "Duygu Kamalak"}
        </motion.h1>
        <motion.p
          className="text-lg text-forest-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.8 } }}
        >
          {language === 'en'
            ? 'I’m Duygu, a computer engineering student passionate about creating innovative solutions. Welcome to My Portfolio'
            : 'Ben Duygu, yenilikçi çözümler üretmeye tutkulu bir bilgisayar mühendisiyim. Portföyüme Hoş Geldiniz'}
        </motion.p>
        <Link to="/projects">
          <motion.button
            className="form-button px-8 py-3 rounded-full font-lora"
            whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(163, 140, 86, 0.5)' }} // #A38C56 gölgesi
            whileTap={{ scale: 0.95 }}
          >
            {language === 'en' ? 'Explore' : 'Keşfet'}
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Home;