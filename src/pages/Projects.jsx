import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = ({ language = 'tr' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 'instagram-database',
      title: language === 'en' ? 'Instagram Database Design' : 'Instagram Veritabanı Tasarımı',
      description: language === 'en' ? 'A relational database schema including user, post, like and follow relationships was designed for an Instagram-like platform.' : 'Instagram benzeri bir platform için kullanıcı, gönderi, beğeni ve takip ilişkilerini içeren ilişkisel bir veritabanı şeması tasarlandı.',
      details: language === 'en' ? 'SQL was used to design the schema and manage data.' : 'Şema tasarımı ve veri yönetimi için SQL kullanıldı.',
      category: 'database',
      technologies: ['SQL', 'Database Design'],
      difficulty: language === 'en' ? 'Intermediate' : 'Orta',
      completionDate: '2023',
      image: '/images/database-icon.svg'
    },
    {
      id: 'portfolio-website',
      title: language === 'en' ? 'Portfolio Website' : 'Kişisel Portfolyo Web Sitesi',
      description: language === 'en' ? 'An interactive personal portfolio site was developed using frontend technologies.' : 'Frontend teknolojileriyle etkileşimli bir kişisel portfolyo sitesi geliştirildi.',
      details: language === 'en' ? 'Projects and competencies were presented in a user-friendly structure. The site is available in two languages, English and Turkish. Scroll based animations and moving figures in the background were added with Framer Motion. A multi-page structure with blog, contact form and certificate pages was created. Mobile-friendly design, fast loading and accessibility criteria were taken into consideration.' : 'Projeler ve yetkinlikler kullanıcı dostu bir yapıda sunuldu. Site iki dilde (İngilizce ve Türkçe) kullanılabilir. Arka planda hareketli figürler ve scroll tabanlı animasyonlar Framer Motion ile eklendi. Blog, iletişim formu ve sertifika sayfalarını içeren çok sayfalı bir yapı oluşturuldu. Mobil uyumlu, hızlı ve erişilebilir bir tasarım sağlandı.',
      category: 'web',
      technologies: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React.js', 'Framer Motion'],
      difficulty: language === 'en' ? 'Intermediate' : 'Orta',
      completionDate: '2025',
      image: '/images/portfolio-icon.svg'
    },
    {
      id: 'e-commerce-application',
      title: language === 'en' ? 'E-Commerce Application' : 'E-Ticaret Uygulaması',
      description: language === 'en' ? 'An e-commerce application with basic functionality was developed using object-oriented principles in Java.' : 'Java ile nesne yönelimli prensiplerle temel işlevselliğe sahip bir e-ticaret uygulaması geliştirildi.',
      details: language === 'en' ? 'Product management, shopping cart and order operations were implemented.' : 'Ürün yönetimi, alışveriş sepeti ve sipariş işlemleri uygulandı.',
      category: 'web',
      technologies: ['Java', 'OOP', 'Spring Boot', 'MySQL'],
      difficulty: language === 'en' ? 'Advanced' : 'İleri',
      completionDate: '2023',
      image: '/images/cart-icon.svg'
    },
    {
      id: 'app-system-design',
      title: language === 'en' ? 'App System Design' : 'Uygulama Sistemi Tasarımı',
      description: language === 'en' ? 'Designed use case, class and sequence diagrams to visualize the software architecture.' : 'Yazılım mimarisini görselleştirmek için use case, class ve sequence diyagramları tasarlandı.',
      details: language === 'en' ? 'UML diagrams were used for system design.' : 'Sistem tasarımı için UML diyagramları kullanıldı.',
      category: 'system',
      technologies: ['UML', 'System Architecture', 'Design Patterns'],
      difficulty: language === 'en' ? 'Intermediate' : 'Orta',
      completionDate: '2023',
      image: '/images/uml-icon.svg'
    },
    {
      id: 'network-system-design',
      title: language === 'en' ? 'Network System Design' : 'Ağ Sistemi Tasarımı',
      description: language === 'en' ? 'A network system was designed and simulated for a possible natural disaster situation with router and switch configurations.' : 'Olası bir doğal afet durumu için router ve switch konfigürasyonlarıyla bir ağ sistemi tasarlanıp simüle edildi.',
      details: language === 'en' ? 'Cisco Packet Tracer was used for simulation.' : 'Simülasyon için Cisco Packet Tracer kullanıldı.',
      category: 'simulation',
      technologies: ['Cisco Packet Tracer', 'Network Protocols', 'Network Security'],
      difficulty: language === 'en' ? 'Intermediate' : 'Orta',
      completionDate: '2022',
      image: '/images/network-icon.svg'
    },
    {
      id: 'engauge-digitizer-clone',
      title: language === 'en' ? 'Engauge Digitizer Clone (NokDot)' : 'Engauge Digitizer Klonu (NokDot)',
      description: language === 'en' ? 'A tool has been developed that converts data on a graph into digital coordinates.' : 'Bir grafikteki verileri dijital koordinatlara dönüştüren bir araç geliştirildi.',
      details: language === 'en' ? 'Python was used for data processing and conversion.' : 'Veri işleme ve dönüştürme için Python kullanıldı.',
      category: 'system',
      technologies: ['Python', 'OpenCV', 'NumPy', 'Data Processing'],
      difficulty: language === 'en' ? 'Advanced' : 'İleri',
      completionDate: '2023',
      image: '/images/digitizer-icon.svg'
    },
    {
      id: 'operating-system-simulation',
      title: language === 'en' ? 'Operating System Project – Simulation for Efficient Service' : 'İşletim Sistemi Projesi – Verimli Hizmet için Simülasyon',
      description: language === 'en' ? 'A service algorithm was developed to simulate process management in operating systems using Java threading.' : 'Java threading kullanılarak işletim sistemlerinde süreç yönetimini simüle eden bir servis algoritması geliştirildi.',
      details: language === 'en' ? 'Multi-threading and process management concepts were implemented.' : 'Çoklu iş parçacığı ve süreç yönetimi kavramları uygulandı.',
      category: 'simulation',
      technologies: ['Java', 'Multi-threading', 'OS Concepts', 'Process Management'],
      difficulty: language === 'en' ? 'Advanced' : 'İleri',
      completionDate: '2023',
      image: '/images/os-icon.svg'
    },
    {
      id: 'trip-sharing-mobile-app',
      title: language === 'en' ? 'Trip Sharing Mobile App' : 'Yolculuk Paylaşım Mobil Uygulaması',
      description: language === 'en' ? 'A mobile application was developed to facilitate ride sharing among university students.' : 'Üniversite öğrencileri arasında yolculuk paylaşımını kolaylaştırmak için bir mobil uygulama geliştirildi.',
      details: language === 'en' ? 'Trip creation, reservation, user profile, vehicle info, comments and messaging features. Real-time data management with Firebase.' : 'Yolculuk oluşturma, rezervasyon, kullanıcı profili, araç bilgisi, yorum ve mesajlaşma özellikleri. Gerçek zamanlı veri yönetimi için Firebase kullanıldı.',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      difficulty: language === 'en' ? 'Advanced' : 'İleri',
      completionDate: '2024',
      image: '/images/trip-icon.svg'
    },
    {
      id: 'jewelry-ecommerce-design',
      title: language === 'en' ? 'Jewelry E-Commerce Website Interface Design' : 'Takı E-Ticaret Sitesi Arayüz Tasarımı',
      description: language === 'en' ? 'A modern, user-friendly website was designed for a jewelry-focused e-commerce brand.' : 'Takı odaklı bir e-ticaret markası için modern, kullanıcı dostu bir web sitesi tasarlandı.',
      details: language === 'en' ? 'Brand identity, color palette and user flow were planned in detail.' : 'Marka kimliği, renk paleti ve kullanıcı akışı detaylıca planlandı.',
      category: 'jewelry',
      technologies: ['Figma', 'UX/UI Design'],
      difficulty: language === 'en' ? 'Intermediate' : 'Orta',
      completionDate: '2024',
      image: '/images/jewelry-icon.svg'
    },
    {
      id: 'library-site-project',
      title: language === 'en' ? 'Library Site Project' : 'Kütüphane Otomasyon Projesi',
      description: language === 'en' ? 'A web-based application was developed for the library automation system where user, book and borrowing operations can be managed.' : 'Kullanıcı, kitap ve ödünç alma işlemlerinin yönetilebildiği kütüphane otomasyon sistemi için web tabanlı bir uygulama geliştirildi.',
      details: language === 'en' ? 'Task distribution was done through Trello, UML diagrams were used.' : 'Görev dağılımı Trello üzerinden yapıldı, UML diyagramları kullanıldı.',
      category: 'library',
      technologies: ['.NET', 'Trello', 'UML'],
      difficulty: language === 'en' ? 'Intermediate' : 'Orta',
      completionDate: '2023',
      image: '/images/library-icon.svg'
    }
  ];

  const categories = [
    { id: 'all', name: language === 'en' ? 'All Projects' : 'Tüm Projeler' },
    { id: 'database', name: language === 'en' ? 'Database' : 'Veritabanı' },
    { id: 'web', name: language === 'en' ? 'Web Development' : 'Web Geliştirme' },
    { id: 'system', name: language === 'en' ? 'System Design' : 'Sistem Tasarımı' },
    { id: 'simulation', name: language === 'en' ? 'Simulation' : 'Simülasyon' },
    { id: 'mobile', name: language === 'en' ? 'Mobile Development' : 'Mobil Geliştirme' },
    { id: 'jewelry', name: language === 'en' ? 'Jewelry E-Commerce' : 'Takı E-Ticaret' },
    { id: 'library', name: language === 'en' ? 'Library' : 'Kütüphane' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const search = (searchTerm || '').toLowerCase();
    const matchesSearch =
      (project.title || '').toLowerCase().includes(search) ||
      (project.description || '').toLowerCase().includes(search) ||
      (project.technologies ? project.technologies.join(' ').toLowerCase().includes(search) : false);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen p-8 pt-20 overflow-hidden">
      <div className="wood-texture"></div>
      <h1 className="text-4xl font-cinzel text-golden mb-12 text-center">
        {language === 'en' ? 'Projects' : 'Projeler'}
      </h1>
      <div className="relative z-20 projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="magic-card group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex flex-col items-center">
              <img
                src={project.image}
                alt={project.title}
                className="project-icon"
              />
            </div>
            <div className="flex flex-col flex-1 justify-between p-2">
              <h2 className="text-xl font-bold mb-2 text-center">{project.title}</h2>
              <p className="text-sm mb-2 text-center">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 text-xs rounded-full bg-white/10">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-400 mb-4 text-center">{project.completionDate}</p>
              <Link to={`/projects/${project.id}`} className="w-full flex justify-center">
                <motion.button
                  className="form-button w-full max-w-xs"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {language === 'en' ? 'View Details' : 'Detayları Gör'}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;