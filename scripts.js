document.addEventListener("DOMContentLoaded", function () {
    const secciones = document.querySelectorAll(".pagina");
    const links = document.querySelectorAll("nav a");
  
    // Función para mostrar la sección correspondiente al hash
    function mostrarSeccion(hash) {
      secciones.forEach(sec => {
        sec.style.display = (sec.id === hash) ? "block" : "none";
      });
  
      links.forEach(link => {
        link.classList.toggle("activo", link.getAttribute("href") === `#${hash}`);
      });
    }
  
    // Función para gestionar el comportamiento del hash
    function gestionarHash() {
      // Asegurarse de que el navegador no se desplace automáticamente
      const hash = location.hash.slice(1) || "opcion1"; // Si no hay hash, tomar "opcion1" por defecto
      mostrarSeccion(hash);
    }
  
    // Al cargar la página, esperamos que todo el contenido haya sido cargado
    window.addEventListener("load", function () {
      // Llamamos a gestionarHash para mostrar la sección correcta al cargar
      gestionarHash();
  
      // Aseguramos que el scroll siempre esté al principio de la página
      window.scrollTo(0, 0);
    });
  
    // Si el hash cambia (por ejemplo, al hacer clic en un enlace)
    window.addEventListener("hashchange", function () {
      // Al cambiar el hash, aseguramos que el scroll también vuelva arriba
      gestionarHash();
      window.scrollTo(0, 0);
    });
  
    // Si la página se recarga, aseguramos que el scroll esté al principio
    window.scrollTo(0, 0);
  });
  

  // Acordeón de FAQ
document.addEventListener("DOMContentLoaded", () => {
    const preguntas = document.querySelectorAll(".faq-question");
  
    preguntas.forEach(btn => {
      btn.addEventListener("click", () => {
        const respuesta = btn.nextElementSibling;
        const flecha = btn.querySelector(".flecha");
  
        // Alternar clase para mostrar/ocultar respuesta
        respuesta.classList.toggle("mostrar");
        btn.classList.toggle("activa");
      });
    });
  });
  