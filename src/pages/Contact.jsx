import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase'; // Firebase bağlantısı
import { collection, addDoc } from 'firebase/firestore';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // E-posta formatı kontrolü
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // E-posta formatı kontrolü
    if (!isValidEmail(formData.email)) {
      setStatus(language === 'en' ? 'Please enter a valid email address.' : 'Lütfen geçerli bir e-posta adresi girin.');
      return;
    }

    setStatus(language === 'en' ? 'Sending...' : 'Gönderiliyor...');

    try {
      await addDoc(collection(db, 'messages'), formData);
      setStatus(language === 'en' ? 'Message sent successfully!' : 'Mesaj başarıyla gönderildi!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus(language === 'en' ? 'Failed to send message.' : 'Mesaj gönderilemedi.');
      console.error('Firestore Error:', error);
    }
  };

  return (
    <div className="relative min-h-screen p-8 pt-20 overflow-hidden">
      <div className="wood-texture"></div>
      <motion.div
        className="relative z-20 max-w-md mx-auto bg-card-bg bg-opacity-70 border border-emerald rounded-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl font-cinzel text-golden mb-6 text-center">
          {language === 'en' ? 'Send a Message' : 'Bir Mesaj Gönder'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={language === 'en' ? 'Your Name' : 'İsim'}
            className="form-input"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={language === 'en' ? 'Your Email' : 'E-posta'}
            className="form-input"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={language === 'en' ? 'Your Message' : 'Mesajınız'}
            className="form-textarea h-32"
          />
          <motion.button
            type="submit"
            className="form-button w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'en' ? 'Send Message' : 'Mesaj Gönder'}
          </motion.button>
        </form>
        {status && <p className="mt-4 text-center text-lg text-text-light">{status}</p>}
        <div className="mt-6 text-center text-text-light space-y-4">
          <p>{language === 'en' ? 'Or reach me directly:' : 'Ya da doğrudan bana ulaşın:'}</p>
          <div className="flex justify-center gap-6">
            {/* Mail */}
            <motion.a
              href="mailto:duygukamaalak@gmail.com"
              title="Email"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-8 h-8 text-golden" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
            </motion.a>
            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/duygukamalak"
              title="LinkedIn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-8 h-8 text-golden" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
            </motion.a>
            {/* GitHub */}
            <motion.a
              href="https://github.com/DuyguKamalak"
              title="GitHub"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-8 h-8 text-golden" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.56.69.47A10.02 10.02 0 0 0 22 12c0-5.52-4.48-10-10-10z" /></svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
