import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail'; // Yeni ekledik
import ButterfliesCanvas from './components/ButterfliesCanvas';

const App = () => {
  const [language, setLanguage] = useState('tr');

  return (
    <div className="relative">
      <Router>
        <ButterfliesCanvas />
        <Navbar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/projects" element={<Projects language={language} />} />
          <Route path="/projects/:id" element={<ProjectDetail language={language} />} /> {/* Yeni rota */}
          <Route path="/contact" element={<Contact language={language} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;