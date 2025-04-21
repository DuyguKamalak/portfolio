import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import ButterfliesCanvas from './components/ButterfliesCanvas';

const App = () => {
  // localStorage'dan dil değerini oku, yoksa varsayılan olarak 'en' kullan
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  // language her değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <div className="relative min-h-screen">
      <Router>
        <ButterfliesCanvas />
        <Navbar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} key={language} />} />
          <Route path="/about" element={<About language={language} key={language} />} />
          <Route path="/projects" element={<Projects language={language} key={language} />} />
          <Route path="/projects/:id" element={<ProjectDetail language={language} key={language} />} />
          <Route path="/contact" element={<Contact language={language} key={language} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;