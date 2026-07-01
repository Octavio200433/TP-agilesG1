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