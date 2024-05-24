document.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('yourElementId');
  if (element) {
    element.addEventListener('click', function() {
     
    });
  }

  const salada = document.getElementById('salada');
  if (salada) {
    salada.addEventListener('click', toggleMenu);
    salada.addEventListener('touchstart', toggleMenu);
  }
  

  function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    if (nav) {
      nav.classList.toggle('active');
 const active=nav.classList.contains('active')    
      event.currentTarget.setAttribute('aria-expanded',active)
      if (active){ event.currentTarget.setAttribute('aria-label','fechar menu');
 }else {event.currentTarget.setAttribute('aria-label','abrir menu');
       
 }
            
      
    }
  }
});
