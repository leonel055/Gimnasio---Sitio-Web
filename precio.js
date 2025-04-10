const toggle = document.getElementById('planToggle');
const prices = document.querySelectorAll('.price');

toggle.addEventListener('change', () => {
  prices.forEach(price => {
    const monthly = price.getAttribute('data-monthly');
    const yearly = price.getAttribute('data-yearly');

    if (toggle.checked) {
      price.innerHTML = `$${yearly}<span>/año</span>`;
    } else {
      price.innerHTML = `$${monthly}<span>/mes</span>`;
    }
  });
});
