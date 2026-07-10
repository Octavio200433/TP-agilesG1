export class Ahorcado {
  private palabra: string;
  private letrasAdivinadas: string[] = [];
  private vidasActuales: number = 6;

  constructor(palabraOLista: string | string[], indiceFijado?: number) {
    if (Array.isArray(palabraOLista)) {
      // Seam para el azar: si pasan un índice controlado (tests) lo usa, sino usa Math.random (producción)
      const indiceSeleccionado = indiceFijado !== undefined
        ? indiceFijado
        : Math.floor(Math.random() * palabraOLista.length);

      this.palabra = palabraOLista[indiceSeleccionado];
    } else {
      // Mantiene compatibilidad absoluta con palabras fijas de los tests anteriores
      this.palabra = palabraOLista;
    }
  }

  adivinar(letra: string): void {
    // 🎯 VALIDACIÓN 1 (AT7): Si el juego ya terminó, no tiene efecto
    if (this.estaTerminado()) {
      return;
    }

    // 🎯 VALIDACIÓN 2 (AT7): Si es una cadena vacía o más de un carácter, se rechaza
    if (letra.length !== 1) {
      return;
    }

    // 🎯 VALIDACIÓN 3 (AT7): Si no es una letra válida (A-Z), se rechaza
    if (!/^[a-zA-ZñÑ]$/.test(letra)) {
      return;
    }

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
    return [...this.palabra].every(letra =>
      this.letrasAdivinadas.includes(letra.toUpperCase())
    );
  }

  estaTerminado(): boolean {
    return this.gano() || this.vidasActuales === 0;
  }

  estaPerdido(): boolean {
    return this.vidasActuales === 0;
  }

  palabraSecreta(): string {
    return this.palabra;
  }

  esLetraRepetida(letra: string): boolean {
    return this.letrasAdivinadas.includes(letra.toUpperCase());
  }
}