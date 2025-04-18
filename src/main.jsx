import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener('keydown', (e) => {
  if (e.key === 'z' && e.ctrlKey) {
    const code = prompt('Enter the secret code:');
    if (code === 'Duygu35') {
      window.location.href = '#easter-egg';
      alert('Welcome to Duygu’s secret prototype!');
    }
  }
});