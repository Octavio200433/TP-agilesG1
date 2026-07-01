import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(juego: Ahorcado) {
  const app = document.querySelector<HTMLDivElement>('#app')!;

  // Función para dibujar la pantalla
  const render = () => {
    app.innerHTML = `
      <h1>Juego del Ahorcado</h1>
      <h2 data-testid="word">${juego.palabraEnmascarada()}</h2>
      <p>Vidas: <span data-testid="lives">${juego.vidas()}</span></p>
      
      ${juego.gano() ? `<div data-testid="status">GANASTE</div>` : ""}
      
      ${!juego.estaTerminado()
        ? `<input type="text" id="letra-input" maxlength="1" placeholder="Letra" autofocus />`
        : ""
      }
    `;

    // Solo capturamos el evento y ponemos el foco si el input existe (juego no terminado)
    const input = document.querySelector<HTMLInputElement>('#letra-input');
    if (input) {
      input.focus(); // Mantiene el foco automático después de cada render
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && input.value) {
          juego.adivinar(input.value); // Llamamos a tu lógica
          render(); // Volvemos a dibujar la pantalla actualizada
        }
      });
    }
  };

  // Dibujo inicial
  render();
}