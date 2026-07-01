export class Ahorcado {
  private palabra: string;
  private letrasAdivinadas: string[] = [];
  private vidasActuales: number = 6;

  constructor(palabra: string) {
    this.palabra = palabra;
  }

  adivinar(letra: string): void {
    const letraUpper = letra.toUpperCase();

    if (this.letrasAdivinadas.includes(letraUpper)) {
      return;
    }

    this.letrasAdivinadas.push(letraUpper);

    if (!this.palabra.toUpperCase().includes(letraUpper)) {
      if (this.vidasActuales > 0) {
        this.vidasActuales--;
      }
    }
  }

  palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map(letra => this.letrasAdivinadas.includes(letra.toUpperCase()) ? letra : "_")
      .join(" ");
  }

  vidas(): number {
    return this.vidasActuales;
  }
  gano(): boolean {
    // Es verdadero si cada letra de la palabra fue arriesgada exitosamente
    return [...this.palabra].every(letra =>
      this.letrasAdivinadas.includes(letra.toUpperCase())
    );
  }

  estaTerminado(): boolean {
    // El juego termina si ganaste o si te quedaste sin vidas reales
    return this.gano() || this.vidasActuales === 0;
  }
}

