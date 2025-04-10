const toggleButton = document.getElementById('toggle-dark-mode');

// Cargar estado guardado
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = '☀️';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
    toggleButton.textContent = '☀️';
  } else {
    localStorage.setItem('dark-mode', 'disabled');
    toggleButton.textContent = '🌙';
  }
});
