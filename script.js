// Función para crear corazones que suben desde abajo
function crearCorazones() {
  const corazon = document.createElement('div');
  corazon.innerHTML = '❤️';
  corazon.style.position = 'fixed';
  
  // Posición inicial abajo de la pantalla
  corazon.style.left = Math.random() * 100 + 'vw';
  corazon.style.bottom = '0px';
  corazon.style.transform = 'translateY(100%)'; /* Comienza fuera de pantalla */
  
  // Animación personalizada hacia arriba
  const duracion = Math.random() * 4 + 3; // 3-7 segundos
  corazon.style.animation = `
    subir ${duracion}s linear forwards
  `;
  
  // Mantenemos tus estilos originales
  corazon.style.zIndex = '-1';
  corazon.style.opacity = '0.6';
  corazon.style.fontSize = `${Math.random() * 25 + 15}px`;
  corazon.style.userSelect = 'none';
  corazon.style.pointerEvents = 'none';
  corazon.style.filter = `brightness(${Math.random() * 0.5 + 0.8})`;
  
  document.body.appendChild(corazon);

  // Eliminar después de la animación
  setTimeout(() => corazon.remove(), duracion * 1000);
}

// Añadimos la nueva animación al documento
const estiloAnimacion = document.createElement('style');
estiloAnimacion.innerHTML = `
  @keyframes subir {
    to {
      transform: translateY(calc(-100vh - 100px));
      opacity: 0;
    }
  }
`;
document.head.appendChild(estiloAnimacion);

// Frecuencia de creación (mantenemos tu intervalo)
document.addEventListener('DOMContentLoaded', () => {
  setInterval(crearCorazones, 150);
});