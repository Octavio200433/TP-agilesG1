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