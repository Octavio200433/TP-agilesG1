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