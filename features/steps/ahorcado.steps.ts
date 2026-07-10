import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

// Esta función traduce el "Dado una partida con la palabra..."
// Lo que hace es abrir el navegador en la URL inyectando la palabra secreta.
Given("una partida con la palabra {string}", async ({ page }, palabra: string) => {
  await page.goto(`/?word=${palabra}`);
});

// Esta función traduce el "Entonces se ve la palabra..."
// Busca en la pantalla un elemento que tenga el identificador "word" y mira si tiene los guiones.
Then("se ve la palabra {string}", async ({ page }, esperada: string) => {
  await expect(page.getByTestId("word")).toHaveText(esperada);
});

// Esta función traduce el "Y se ven X vidas"
// Busca un elemento con el identificador "lives" y verifica que tenga el número de vidas correcto.
Then("se ven {int} vidas", async ({ page }, vidas: number) => {
  await expect(page.getByTestId("lives")).toHaveText(String(vidas));
});

When("el jugador adivina la letra {string}", async ({ page }, letra: string) => {
  const input = page.getByRole("textbox");
  await input.fill(letra);
  await input.press("Enter");
});

Then("se ve el mensaje {string}", async ({ page }, mensaje: string) => {
  // Buscaremos un elemento en la pantalla con el id de test "status"
  await expect(page.getByTestId("status")).toHaveText(mensaje);
});

Then("se ve el mensaje de advertencia {string}", async ({ page }, mensaje: string) => {
  // Buscaremos un elemento con data-testid="warning"
  await expect(page.getByTestId("warning")).toHaveText(mensaje);
});

// --- NUEVOS STEPS PARA EL AT DE PALABRA AL AZAR (CORREGIDOS) ---
let listaPalabras: string[] = [];

Given("que la lista de palabras contiene {string} y {string}", async function ({ page }, palabra1: string, palabra2: string) {
  listaPalabras = [palabra1, palabra2];
});

When("inicio una nueva partida al azar fijando la semilla para que elija la primera opción", async function ({ page }) {
  // Pasamos la lista de palabras y un parámetro de semilla (seed) por la URL
  await page.goto(`http://localhost:5173/?words=${listaPalabras.join(",")}&seed=0`);
});

Then("la palabra oculta debería tener 5 guiones bajos", async function ({ page }) {
  const wordLocator = page.getByTestId("word");
  await expect(wordLocator).toHaveText("_____");
});