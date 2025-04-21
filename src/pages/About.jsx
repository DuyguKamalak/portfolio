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
            ? 'I’m Duygu Kamalak, a computer engineering student at Manisa Celal Bayar University (2020-2025). Based in Bornova, İzmir, I’m passionate about software development, embedded systems, and innovative technologies.'
            : 'Ben Duygu Kamalak, Manisa Celal Bayar Üniversitesi’nde bilgisayar mühendisliği öğrencisiyim (2020-2025). Bornova, İzmir’de yaşıyorum ve yazılım geliştirme, gömülü sistemler ve yenilikçi teknolojilere tutkuluyum.'}
        </motion.p>
        <motion.p
          className="text-lg text-forest-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.7, duration: 0.8 } }}
        >
          {language === 'en'
            ? 'During my internship at Kahramanmaraş Valiliği (Aug 2023), I researched new technologies, worked on embedded systems, and learned new programming languages. I also coordinated promotions for OTGET (Community of Game Designers and Developers) and participated in a social responsibility project delivering food to those in need in Manisa.'
            : 'Kahramanmaraş Valiliği’nde stajım sırasında (Ağustos 2023), yeni teknolojileri araştırdım, gömülü sistemler üzerine çalıştım ve yeni programlama dilleri öğrendim. Ayrıca OTGET (Oyun Tasarımcıları ve Geliştiricileri Topluluğu) için tanıtım koordinatörlüğü yaptım ve Manisa’da ihtiyaç sahiplerine yemek ulaştıran bir sosyal sorumluluk projesine katıldım.'}
        </motion.p>
        <motion.div
          className="text-lg text-forest-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.9, duration: 0.8 } }}
        >
          <h2 className="text-2xl font-cinzel text-golden mb-2">{language === 'en' ? 'Skills' : 'Beceriler'}</h2>
          <ul className="list-disc list-inside">
            <li>{language === 'en' ? 'Programming: Java, Python, HTML/CSS, SQL, OpenGL' : 'Programlama: Java, Python, HTML/CSS, SQL, OpenGL'}</li>
            <li>{language === 'en' ? 'Tools: MS Office (Word, Excel), Cisco Packet Tracer' : 'Araçlar: MS Office (Word, Excel), Cisco Packet Tracer'}</li>
            <li>{language === 'en' ? 'Soft Skills: Time Management, Critical Thinking, Communication, Leadership, Teamwork' : 'Yumuşak Beceriler: Zaman Yönetimi, Eleştirel Düşünme, İletişim, Liderlik, Takım Çalışması'}</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;