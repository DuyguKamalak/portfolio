import { initializeApp } from 'firebase/app'; // Firebase uygulamasını başlatmak için
import { getFirestore } from 'firebase/firestore'; // Firestore (veritabanı) servisini almak için

// Firebase yapılandırma bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyB_E8dU3zY7Lxt_AMDMv_hEs0_d6dcGN4s",
  authDomain: "cosmos-40906.firebaseapp.com",
  projectId: "cosmos-40906",
  storageBucket: "cosmos-40906.firebasestorage.app",
  messagingSenderId: "704819824552",
  appId: "1:704819824552:web:ff03baab19cc9f1bf5bf9d",
  measurementId: "G-CEWHFS188J"
};

// Firebase uygulamanızı başlatın
const app = initializeApp(firebaseConfig);

// Firestore veritabanını başlatın
const db = getFirestore(app);

export { db };
