document.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('yourElementId');
  if (element) {
    element.addEventListener('click', function() {
      // Seu código aqui
    });
  }

  const salada = document.getElementById('salada');
  if (salada) {
    salada.addEventListener('click', toggleMenu);
  }

  function toggleMenu() {
    const nav = document.getElementById('nav');
    if (nav) {
      nav.classList.toggle('active');
    }
  }
});