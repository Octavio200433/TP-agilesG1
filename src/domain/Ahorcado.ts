export class Ahorcado {
  private palabra: string;
  private letrasAdivinadas: string[] = [];
  private vidasActuales: number = 6;

  constructor(palabra: string) {
    this.palabra = palabra;
  }

  // Función auxiliar para normalizar ignorando tildes pero cuidando la Ñ
  private normalizarTexto(texto: string): string {
    const textoUpper = texto.toUpperCase();
    // Si es una Ñ, no le tocamos nada para evitar transformarla en N
    if (textoUpper === 'Ñ') return 'Ñ';

    // Separamos los acentos y removemos los diacríticos excepto para la Ñ
    return textoUpper
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
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

    // 🎯 VALIDACIÓN 3 (AT7): Si no es una letra válida (A-Z, incluyendo acentos y Ñ)
    // Agregamos soporte opcional en la Regex para letras con tildes comunes de nuestro desafío
    if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]$/.test(letra)) {
      return;
    }

    const letraNormalizada = this.normalizarTexto(letra);

    // Evitamos duplicados comparando las versiones normalizadas (AT6)
    const yaFueIntentada = this.letrasAdivinadas.some(
      l => this.normalizarTexto(l) === letraNormalizada
    );

    if (yaFueIntentada) {
      return;
    }

    this.letrasAdivinadas.push(letra.toUpperCase());

    // Verificamos si la letra ingresada coincide con alguna de la palabra secreta (ambas normalizadas)
    const existeCoincidencia = [...this.palabra].some(
      l => this.normalizarTexto(l) === letraNormalizada
    );

    if (!existeCoincidencia) {
      if (this.vidasActuales > 0) {
        this.vidasActuales--;
      }
    }
  }

  palabraEnmascarada(): string {
    return [...this.palabra]
      .map(letra => {
        const letraNormalizada = this.normalizarTexto(letra);
        // Revelamos la letra original si su versión normalizada fue adivinada
        const fueAdivinada = this.letrasAdivinadas.some(
          l => this.normalizarTexto(l) === letraNormalizada
        );
        return fueAdivinada ? letra : "_";
      })
      .join(" ");
  }

  vidas(): number {
    return this.vidasActuales;
  }

  gano(): boolean {
    return [...this.palabra].every(letra => {
      const letraNormalizada = this.normalizarTexto(letra);
      return this.letrasAdivinadas.some(
        l => this.normalizarTexto(l) === letraNormalizada
      );
    });
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
    const letraNormalizada = this.normalizarTexto(letra);
    return this.letrasAdivinadas.some(
      l => this.normalizarTexto(l) === letraNormalizada
    );
  }
}