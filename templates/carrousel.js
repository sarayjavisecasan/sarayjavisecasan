const velocidad = 100; // menor = más rápido (en segundos)

const carrusel = document.getElementById('carrusel');
const totalWidth = carrusel.scrollWidth / 2;

carrusel.style.animationDuration = `${velocidad}s`;