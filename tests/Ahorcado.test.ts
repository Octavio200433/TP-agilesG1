import { describe, it, expect } from "vitest";
import { Ahorcado } from "../src/domain/Ahorcado.ts";

describe("Ahorcado - Inicializar partida", () => {
  it("debe enmascarar la palabra inicial con guiones bajos", () => {
    // 1. Inicializamos el juego con una palabra determinista
    const juego = new Ahorcado("GATO");

    // 2. Verificamos que el método devuelva la palabra oculta con espacios
    expect(juego.palabraEnmascarada()).toBe("_ _ _ _");
  });
});

it("revela todas las ocurrencias de la letra acertada", () => {
  const juego = new Ahorcado("ALA");
  juego.adivinar("A");
  expect(juego.palabraEnmascarada()).toBe("A _ A");
});

it('debería restar una vida si se adivina una letra que no está en la palabra', () => {
  // Arrange: Preparamos la partida (inicia con 6 vidas)
  const ahorcado = new Ahorcado('AGIL');

  // Act: Intentamos adivinar una letra que no existe
  ahorcado.adivinar('E');

  // Assert: Verificamos que las vidas hayan bajado a 5
  expect(ahorcado.vidas()).toBe(5);
});

describe("Ahorcado - Estado Ganado", () => {
  it("debe marcar el juego como ganado cuando se adivinan todas las letras", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("G");
    juego.adivinar("A");
    juego.adivinar("T");
    juego.adivinar("O");
    expect(juego.estaTerminado()).toBe(true);
    expect(juego.gano()).toBe(true);
  });

  it("no debe estar ganado si falta al menos una letra", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("G");
    expect(juego.estaTerminado()).toBe(false);
    expect(juego.gano()).toBe(false);
  });
});
describe("Ahorcado - Perder", () => {
  it("el juego está perdido cuando las vidas llegan a 0", () => {
    const juego = new Ahorcado("GATO");
    // Forzamos los 6 fallos para que se quede sin vidas
    ["Z", "X", "C", "V", "B", "N"].forEach(letra => juego.adivinar(letra));
    expect(juego.estaPerdido()).toBe(true);
  });

  it("el juego no está perdido mientras queden vidas > 0", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("Z");
    expect(juego.estaPerdido()).toBe(false);
  });

  it("al perder, se puede consultar la palabra completa para mostrarla", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.palabraSecreta()).toBe("GATO");
  });
});

describe("Ahorcado - Letras Repetidas", () => {
  it("no debe descontar vidas si se repite una letra acertada", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("A"); // Vidas: 6
    juego.adivinar("A");
    expect(juego.vidas()).toBe(6);
  });

  it("no debe descontar una segunda vida si se repite una letra fallada", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("E"); // Letra incorrecta -> Vidas: 5
    juego.adivinar("E"); // Repetida
    expect(juego.vidas()).toBe(5);
  });

  it("debe informar si una letra ya fue intentada", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("G");
    expect(juego.esLetraRepetida("G")).toBe(true);
    expect(juego.esLetraRepetida("Z")).toBe(false);
  });
});

describe("Ahorcado - Entrada inválida (AT 7)", () => {
  it("adivinar con un carácter que no es una letra (número, símbolo) es rechazado y no afecta el estado", () => {
    const juego = new Ahorcado("GATO");
    const vidasIniciales = juego.vidas();

    juego.adivinar("1");
    juego.adivinar("$");

    expect(juego.vidas()).toBe(vidasIniciales);
  });

  it("adivinar con una cadena de más de un carácter es rechazado y no afecta el estado", () => {
    const juego = new Ahorcado("GATO");
    const vidasIniciales = juego.vidas();

    juego.adivinar("GA");

    expect(juego.vidas()).toBe(vidasIniciales);
  });

  it("adivinar una letra cuando el juego ya terminó no tiene efecto", () => {
    const juego = new Ahorcado("GATO");

    // Forzamos los 6 fallos para terminar la partida
    ["Z", "X", "C", "V", "B", "N"].forEach(letra => juego.adivinar(letra));
    const vidasAlPerder = juego.vidas();

    juego.adivinar("A");

    expect(juego.vidas()).toBe(vidasAlPerder);
  });
});