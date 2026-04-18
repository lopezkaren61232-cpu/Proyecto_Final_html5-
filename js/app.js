document.addEventListener('DOMContentLoaded', function() {
    const botonContacto = document.getElementById('boton-contacto');
    botonContacto.addEventListener('click', function() {
        alert('¡Gracias por tu interés! Pronto te contactaremos.');
    });

    const enlacesNavegacion = document.querySelectorAll('nav a');
    enlacesNavegacion.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute('href'));
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
  
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
});
