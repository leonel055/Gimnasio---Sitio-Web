const contador = document.getElementById('contador');
let cantidad = 45;
const final = 1000; // Número final
const velocidad = 1220; // Más chico = más rápido

function aumentarContador() {
  cantidad++;
  contador.textContent = cantidad;

  if (cantidad < final) {
    setTimeout(aumentarContador, velocidad);
  }
}

aumentarContador();
