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
      
      ${cartelStatus} 
      <input type="text" id="letra-input" placeholder="Letra" 
               ${partidaTerminada ? 'disabled' : 'autofocus'} />
      
      <div id="contenedor-reiniciar" style="margin-top: 15px;">
        ${partidaTerminada ? `<button id="btn-reiniciar" style="padding: 8px 16px; font-weight: bold; cursor: pointer;">Jugar de nuevo</button>` : ""}
      </div>
    `;

    // 3. Asignación de escuchadores de eventos según el estado
    if (!partidaTerminada) {
      const input = document.querySelector<HTMLInputElement>('#letra-input')!;
      input.focus();

      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && input.value) {
          const entrada = input.value;

          if (juego.esLetraRepetida(entrada)) {
            mensajeAlerta = "Ya intentaste con esa letra";
          } else {
            mensajeAlerta = "";
            juego.adivinar(entrada);
          }

          render();
        }
      });
    } else {
      // Nos aseguramos de enganchar bien el botón usando un selector directo y limpio
      const btnReiniciar = document.querySelector<HTMLButtonElement>('#btn-reiniciar');
      if (btnReiniciar) {
        btnReiniciar.addEventListener('click', () => {
          mensajeAlerta = "";
          juego.reiniciar();
          render();
        });
      }
    }
  };

  // Ejecutamos el renderizado inicial de la interfaz 
  render();
}

// =========================================================================
// INICIALIZACIÓN PRINCIPAL (Punto de entrada de Vite)
// =========================================================================
const urlParams = new URLSearchParams(window.location.search);
const wordsParam = urlParams.get("words");
const seedParam = urlParams.get("seed");

let instanciaJuego: Ahorcado;

if (wordsParam) {
  const listaPalabras = wordsParam.split(",");
  const indiceSemilla = seedParam !== null ? parseInt(seedParam, 10) : undefined;
  instanciaJuego = new Ahorcado(listaPalabras, indiceSemilla);
} else {
  instanciaJuego = new Ahorcado("GATO");
}

mountApp(instanciaJuego);