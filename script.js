// Texto de la carta (se escribe letra por letra)
const textoCarta =
  "Eres la persona más especial en mi vida. No hay un solo día en el que no piense en ti. Gracias por hacerme feliz, por ser mi cachetitos, mi birolita, mi todo. Hoy quiero recordarte cuánto te amo. 💖";

let i = 0;
function escribirTexto() {
  if (i < textoCarta.length) {
    document.getElementById("texto").innerHTML += textoCarta.charAt(i);
    i++;
    setTimeout(escribirTexto, 100);
  }
}

// Música de fondo
const audio = document.getElementById("musica");
audio.volume = 0.5; // Volumen inicial

// Intentar reproducir la música automáticamente al cargar
window.onload = () => {
  escribirTexto();
  audio.play().catch(() => {
    console.log("El navegador bloqueó la reproducción automática. Haz clic para activar.");
  });
};

// Detectar interacción del usuario para activar la música
document.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  }
});

// Corazones flotantes
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.textContent = "❤️";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.animationDuration = Math.random() * 2 + 4 + "s"; // Duración aleatoria
  document.getElementById("corazones").appendChild(corazon);

  setTimeout(() => corazon.remove(), 6000);
}

setInterval(crearCorazon, 300);

// Botón para mostrar el libro
document.getElementById("boton-sorpresa").addEventListener("click", () => {
  // Ocultar la carta inicial
  document.getElementById("carta-inicial").style.display = "none";

  // Mostrar el panel del libro
  const panelLibro = document.getElementById("panel-libro");
  panelLibro.style.display = "flex";

  // Mostrar la primera página del libro
  mostrarPagina(0);
});
