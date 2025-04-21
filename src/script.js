document.addEventListener('keydown', (e) => {
    if (e.key === 'z' && e.ctrlKey) {
      const code = prompt('Enter the secret code:');
      if (code === 'Duygu35') {
        window.location.href = '#easter-egg';
        alert('Welcome to Duygu’s secret prototype!');
      }
    }
  });