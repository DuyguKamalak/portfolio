import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ButterfliesCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Sahne, kamera ve render
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Daha keskin görüntüler için
    mountRef.current?.appendChild(renderer.domElement);

    // Işıklar
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.4, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Kelebekler dizisi
    const butterflies = [];
    const butterflyCount = 500; // 500 kelebek yükleyeceğiz
    const loader = new GLTFLoader();

    // Kelebekleri yükle
    for (let i = 0; i < butterflyCount; i++) {
      loader.load(
        '/models/butterfly.glb',
        (gltf) => {
          const butterfly = gltf.scene;
          butterfly.scale.set(0.5, 0.5, 0.5);
          butterfly.position.set(
            (Math.random() - 0.5) * 200, // Daha küçük bir alanda konumlandır
            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 200
          );
          scene.add(butterfly);
          butterflies.push(butterfly);
        },
        (progress) => {
          console.log(`Kelebek ${i + 1} yükleniyor: ${(progress.loaded / progress.total) * 100}%`);
        },
        (error) => {
          console.error(`Kelebek ${i + 1} yüklenirken hata:`, error);
        }
      );
    }

    camera.position.z = 20; // Kamerayı biraz daha yakınlaştır

    // Animasyon döngüsü
    const animate = () => {
      requestAnimationFrame(animate);

      butterflies.forEach((butterfly) => {
        butterfly.position.z += 0.02; // Yavaş hareket
        butterfly.rotation.y += 0.01; // Hafif dönme
        if (butterfly.position.z > 15) butterfly.position.z -= 30; // Geri dön
      });

      renderer.render(scene, camera);
    };
    animate();

    // Pencere yeniden boyutlandırma
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Temizleme
    return () => {
      window.removeEventListener('resize', handleResize);
      butterflies.forEach((butterfly) => scene.remove(butterfly));
      scene.clear();
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="butterflies-canvas fixed top-0 left-0 w-full h-full z-0" />;
};

export default ButterfliesCanvas;