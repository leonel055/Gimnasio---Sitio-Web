document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    if (this.checkValidity()) {
      document.getElementById('modal-toggle').checked = true;
      e.preventDefault(); // Evita recargar la página
    } else {
      e.preventDefault(); // Evita enviar si está mal
      document.getElementById('error-mensaje').style.display = 'block'; // Muestra el cartel de error
    }
  });