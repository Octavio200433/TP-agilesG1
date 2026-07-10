// src/ui/main.ts
import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(juegoInicial: Ahorcado) {
  const urlParams = new URLSearchParams(window.location.search);
  const wordsParam = urlParams.get("words");
  const seedParam = urlParams.get("seed");

  // Usamos una variable local 'juego' para no mutar el argumento de la función
  let juego: Ahorcado = juegoInicial;

  if (wordsParam) {
    const listaPalabras = wordsParam.split(",");
    const indiceSemilla = seedParam !== null ? parseInt(seedParam, 10) : undefined;
    juego = new Ahorcado(listaPalabras, indiceSemilla);
  }

  const app = document.querySelector<HTMLDivElement>('#app')!;
  let mensajeAlerta = "";


  const render = () => {
    let palabraMostrar = juego.palabraEnmascarada();
    let cartelStatus = '';


    if (juego.estaPerdido()) {
      palabraMostrar = juego.palabraSecreta(); // Revelamos la palabra completa si perdió (AT5)
      cartelStatus = `<h3 data-testid="status">PERDISTE</h3>`;
    } else if (juego.gano()) {
      cartelStatus = `<h3 data-testid="status">GANASTE</h3>`; // (AT4)
    }

    // Evaluamos si la partida terminó usando el método del dominio (AT4/AT5)
    const partidaTerminada = juego.estaTerminado();

    // 2. Inyectamos en el HTML del contenedor de la aplicación
    app.innerHTML = `
      <h1>Juego del Ahorcado</h1>
      <h2 data-testid="word">${palabraMostrar}</h2>
      <p>Vidas: <span data-testid="lives">${juego.vidas()}</span></p>
      
      ${mensajeAlerta ? `<div data-testid="warning" style="color: red; font-weight: bold; margin-bottom: 10px;">${mensajeAlerta}</div>` : ""}
      
      ${cartelStatus} <input type="text" id="letra-input" placeholder="Letra" 
               ${partidaTerminada ? 'disabled' : 'autofocus'} />
    `;

    // 3. Si la partida no terminó, asignamos el escuchador de eventos al input
    if (!partidaTerminada) {
      const input = document.querySelector<HTMLInputElement>('#letra-input')!;

      // Mantenemos el foco en el input de manera automática
      input.focus();

      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && input.value) {
          const entrada = input.value;

          // CAPA DE CONTROL (AT6): Chequeamos si la letra ya se había intentado
          if (juego.esLetraRepetida(entrada)) {
            mensajeAlerta = "Ya intentaste con esa letra"; // Activamos el mensaje
          } else {
            mensajeAlerta = ""; // Limpiamos la alerta si es una entrada nueva
            juego.adivinar(entrada); // Invoca la lógica del dominio
          }

          render(); // Re-renderiza la pantalla con el nuevo estado
        }
      });
    }
  };

  // Ejecutamos el renderizado inicial de la interfaz 
  render();
}

// =========================================================================
// INICIALIZACIÓN PRINCIPAL (Punto de entrada de Vite)
// =========================================================================
// 1. Leemos los parámetros de la URL usando la API del navegador
const urlParams = new URLSearchParams(window.location.search);
const wordsParam = urlParams.get("words");
const seedParam = urlParams.get("seed");

let instanciaJuego: Ahorcado;

// 2. Aplicamos la costura (Seam) para decidir cómo crear el dominio
if (wordsParam) {
  const listaPalabras = wordsParam.split(",");
  const indiceSemilla = seedParam !== null ? parseInt(seedParam, 10) : undefined;

  // Le inyectamos la lista y la semilla al dominio
  instanciaJuego = new Ahorcado(listaPalabras, indiceSemilla);
} else {
  // Inicialización por defecto para los demás ATs existentes
  instanciaJuego = new Ahorcado("GATO");
}

// 3. Montamos la aplicación pasándole la instancia configurada
mountApp(instanciaJuego);