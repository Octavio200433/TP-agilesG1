// src/ui/main.ts
import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(juego: Ahorcado) {
  const app = document.querySelector<HTMLDivElement>('#app')!;

  const render = () => {
    // 1. Decidimos qué palabra mostrar en la pantalla y el estado del juego
    let palabraMostrar = juego.palabraEnmascarada();
    let cartelStatus = '';

    // Verificación genérica basada puramente en el estado de la palabra enmascarada
    const tieneGuiones = palabraMostrar.includes('_');

    if (juego.estaPerdido()) {
      palabraMostrar = juego.palabraSecreta(); // Revelamos la palabra completa
      cartelStatus = `<h3 data-testid="status">PERDISTE</h3>`; // El ID 'status' que busca Playwright
    } else if (!tieneGuiones) {
      // Si no tiene guiones y no perdió, es porque completó todas las letras
      cartelStatus = `<h3 data-testid="status">GANASTE</h3>`;
    }

    // Evalúa si la partida terminó para deshabilitar el input
    const partidaTerminada = juego.estaPerdido() || !tieneGuiones;

    // 2. Inyectamos en el HTML del contenedor de la aplicación
    app.innerHTML = `
      <h1>Juego del Ahorcado</h1>
      <h2 data-testid="word">${palabraMostrar}</h2>
      <p>Vidas: <span data-testid="lives">${juego.vidas()}</span></p>
      
      ${cartelStatus} <!-- Se dibuja el cartel si hay un cambio de estado (Ganar/Perder) -->
      
      <input type="text" id="letra-input" maxlength="1" placeholder="Letra" 
             ${partidaTerminada ? 'disabled' : 'autofocus'} />
    `;

    // 3. Si la partida no terminó, asignamos el escuchador de eventos al input
    if (!partidaTerminada) {
      const input = document.querySelector<HTMLInputElement>('#letra-input')!;

      // Mantenemos el foco en el input de manera automática
      input.focus();

      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && input.value) {
          const letra = input.value;
          juego.adivinar(letra); // Invoca la lógica del dominio
          render(); // Re-renderiza la pantalla con el nuevo estado
        }
      });
    }
  };

  // Ejecutamos el renderizado inicial de la interfaz 
  render();
}