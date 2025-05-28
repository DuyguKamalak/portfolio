import React from 'react';
import { motion } from 'framer-motion';

const About = ({ language }) => {
  return (
    <div className="relative min-h-screen p-8 pt-20 overflow-hidden">
      <div className="wood-texture"></div>
      <div className="relative z-20 max-w-3xl mx-auto text-center space-y-6">
        <motion.h1
          className="text-4xl font-cinzel text-golden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          {language === 'en' ? 'About Duygu' : 'Duygu Hakkında'}
        </motion.h1>
        <motion.p
          className="text-lg text-forest-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.8 } }}
        >
          {language === 'en'
            ? 'I’m Duygu Kamalak, a computer engineering student at Manisa Celal Bayar University (2020-2025). Based in Bornova, İzmir, I’m passionate about software development and innovative technologies.'
            : 'Ben Duygu Kamalak, Manisa Celal Bayar Üniversitesi’nde bilgisayar mühendisliği öğrencisiyim (2020-2025). Bornova, İzmir’de yaşıyorum ve yazılım geliştirme ve yenilikçi teknolojilere tutkuluyum.'}
        </motion.p>
        <motion.p
          className="text-lg text-forest-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.7, duration: 0.8 } }}
        >
          {language === 'en'
            ? 'During my undergraduate studies, I took both theoretical and practical courses in areas such as algorithms, data structures, database management, artificial intelligence, computer networks, and software engineering. Throughout this period, I gained hands-on experience with the Scrum-based Agile software development methodology, including sprint planning, daily meetings, task tracking, and iterative development processes. Additionally, I developed a mobile application using Flutter to enable ride-sharing among university students, gaining valuable experience in software development and user experience.During my internship at Kahramanmaraş Valiliği (Aug 2023), I researched new technologies,and learned new programming languages. I also coordinated promotions for OTGET (Community of Game Designers and Developers) and participated in a social responsibility project delivering food to those in need in Manisa.'
            : 'Lisans eğitimim süresince algoritmalar, veri yapıları, veritabanı yönetimi, yapay zekâ, bilgisayar ağları ve yazılım mühendisliği gibi çeşitli alanlarda hem teorik hem de uygulamalı dersler aldım. Bu süreçte, Scrum tabanlı Agile yazılım geliştirme metodolojisiyle çalışma fırsatı buldum; sprint planlaması, günlük toplantılar, görev takibi ve iteratif geliştirme süreçlerini aktif olarak deneyimledim. Ayrıca, Flutter kullanarak üniversite öğrencileri arasında yolculuk paylaşımı sağlamak amacıyla bir mobil uygulama geliştirdim, böylece hem yazılım geliştirme hem de kullanıcı deneyimi alanlarında önemli bir pratik kazandım.Kahramanmaraş Valiliği’nde stajım sırasında (Ağustos 2023), yeni teknolojileri araştırdım ve yeni programlama dilleri öğrendim. Ayrıca OTGET (Oyun Tasarımcıları ve Geliştiricileri Topluluğu) için tanıtım koordinatörlüğü yaptım ve Manisa’da ihtiyaç sahiplerine yemek ulaştıran bir sosyal sorumluluk projesine katıldım.'}
        </motion.p>
        <motion.div
          className="text-lg text-forest-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.9, duration: 0.8 } }}
        >
          <h2 className="text-2xl font-cinzel text-golden mb-2">{language === 'en' ? 'Skills' : 'Beceriler'}</h2>
          <ul className="list-disc list-inside">
            <li>{language === 'en' ? 'Programming: Java, Python, HTML/CSS, JavaScript, SQL, OpenGL' : 'Programlama: Java, Python, HTML/CSS, JavaScript, SQL, OpenGL'}</li>
            <li>{language === 'en' ? 'Tools: Figma, Cisco Packet Tracer' : 'Araçlar: Figma, Cisco Packet Tracer'}</li>
            <li>{language === 'en' ? 'Skills: Time Management, Critical Thinking, Communication, Leadership, Teamwork' : 'Beceriler: Zaman Yönetimi, Eleştirel Düşünme, İletişim, Liderlik, Takım Çalışması'}</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;