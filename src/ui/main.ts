// src/ui/main.ts
import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(juego: Ahorcado) {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  let mensajeAlerta = ""; // Estado local de la UI para manejar la advertencia de letra repetida

  const render = () => {
    // 1. Decidimos qué palabra mostrar en la pantalla y el estado del juego
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
    // 🎯 CAMBIO AT7: Sacamos maxlength="1" para permitir que se testeen strings largos
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
          const entrada = input.value; // Ya no estandarizamos acá arriba para no romper cadenas largas ni caracteres raros

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