import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = ({ language = 'tr' }) => {
  const projects = [
    {
      id: 'instagram-database',
      title: language === 'en' ? 'Instagram Database Design' : 'Instagram Veritabanı Tasarımı',
      description: language === 'en' ? 'Designed a database structure for a social media platform.' : 'Bir sosyal medya platformu için veritabanı yapısı tasarlandı.',
      details: language === 'en' ? 'Utilized SQL to create an efficient and scalable database schema.' : 'Verimli ve ölçeklenebilir bir veritabanı şeması oluşturmak için SQL kullanıldı.'
    },
    {
      id: 'intermediate-website',
      title: language === 'en' ? 'Intermediate Website' : 'Orta Seviye Web Sitesi',
      description: language === 'en' ? 'Developed a responsive website using HTML and CSS.' : 'HTML ve CSS kullanılarak duyarlı bir web sitesi geliştirildi.',
      details: language === 'en' ? 'Focused on clean design and user-friendly navigation.' : 'Temiz tasarıma ve kullanıcı dostu navigasyona odaklanıldı.'
    },
    {
      id: 'e-commerce-application',
      title: language === 'en' ? 'E-Commerce Application' : 'E-Ticaret Uygulaması',
      description: language === 'en' ? 'Built an e-commerce platform using Java.' : 'Java kullanılarak bir e-ticaret platformu geliştirildi.',
      details: language === 'en' ? 'Implemented object-oriented programming principles for robust functionality.' : 'Sağlam işlevsellik için nesne yönelimli programlama ilkeleri uygulandı.'
    },
    {
      id: 'app-system-design',
      title: language === 'en' ? 'App System Design' : 'Uygulama Sistemi Tasarımı',
      description: language === 'en' ? 'Designed system architecture using UML diagrams.' : 'UML diyagramları kullanılarak sistem mimarisi tasarlandı.',
      details: language === 'en' ? 'Focused on computer architecture principles for optimized performance.' : 'Optimize edilmiş performans için bilgisayar mimarisi ilkelerine odaklanıldı.'
    },
    {
      id: 'network-system-design',
      title: language === 'en' ? 'Network System Design' : 'Ağ Sistemi Tasarımı',
      description: language === 'en' ? 'Created a network simulation using Cisco Packet Tracer.' : 'Cisco Packet Tracer kullanılarak bir ağ simülasyonu oluşturuldu.',
      details: language === 'en' ? 'Simulated real-world network scenarios for educational purposes.' : 'Eğitim amaçlı gerçek dünya ağ senaryoları simüle edildi.'
    },
    {
      id: 'engauge-digitizer-clone',
      title: language === 'en' ? 'Engauge Digitizer Clone (NokDot)' : 'Engauge Digitizer Klonu (NokDot)',
      description: language === 'en' ? 'Developed a digitizing tool using Python.' : 'Python kullanılarak bir dijitalleştirme aracı geliştirildi.',
      details: language === 'en' ? 'Enabled conversion of graphical data into digital formats.' : 'Grafiksel verilerin dijital formatlara dönüştürülmesi sağlandı.'
    },
    {
      id: 'operating-system-simulation',
      title: language === 'en' ? 'Operating System Simulation' : 'İşletim Sistemi Simülasyonu',
      description: language === 'en' ? 'Simulated efficient service using Java threads.' : 'Java iplikleri kullanılarak verimli hizmet simüle edildi.',
      details: language === 'en' ? 'Implemented multi-threading for optimized system performance.' : 'Optimize sistem performansı için çoklu iplik uygulaması yapıldı.'
    }
  ];

  return (
    <div className="relative min-h-screen p-8 pt-20 overflow-hidden">
      <div className="wood-texture"></div>
      <h1 className="text-4xl font-cinzel text-golden mb-12 text-center">
        {language === 'en' ? 'Projects' : 'Projeler'}
      </h1>
      <div className="relative z-20 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="magic-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.details}</p>
            <Link to={`/projects/${project.id}`}>
              <motion.button
                className="form-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'en' ? 'View Details' : 'Detayları Gör'}
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;