# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\jugar-de-nuevo.feature.spec.js >> Desafío Aprobación Directa — Jugar de nuevo >> El jugador reinicia la partida al ganar para jugar de nuevo sin recargar la página
- Location: .features-gen\features\jugar-de-nuevo.feature.spec.js:6:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Jugar de nuevo' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Juego del Ahorcado" [level=1] [ref=e3]
  - heading "S O L" [level=2] [ref=e4]
  - paragraph [ref=e5]: "Vidas: 6"
  - heading "GANASTE" [level=3] [ref=e6]
  - textbox "Letra" [disabled] [ref=e7]
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | import { createBdd } from "playwright-bdd";
  3  | 
  4  | const { Given, When, Then } = createBdd();
  5  | 
  6  | // Esta función traduce el "Dado una partida con la palabra..."
  7  | // Lo que hace es abrir el navegador en la URL inyectando la palabra secreta.
  8  | Given("una partida con la palabra {string}", async ({ page }, palabra: string) => {
  9  |   await page.goto(`/?word=${palabra}`);
  10 | });
  11 | 
  12 | // Esta función traduce el "Entonces se ve la palabra..."
  13 | // Busca en la pantalla un elemento que tenga el identificador "word" y mira si tiene los guiones.
  14 | Then("se ve la palabra {string}", async ({ page }, esperada: string) => {
  15 |   await expect(page.getByTestId("word")).toHaveText(esperada);
  16 | });
  17 | 
  18 | // Esta función traduce el "Y se ven X vidas"
  19 | // Busca un elemento con el identificador "lives" y verifica que tenga el número de vidas correcto.
  20 | Then("se ven {int} vidas", async ({ page }, vidas: number) => {
  21 |   await expect(page.getByTestId("lives")).toHaveText(String(vidas));
  22 | });
  23 | 
  24 | When("el jugador adivina la letra {string}", async ({ page }, letra: string) => {
  25 |   const input = page.getByRole("textbox");
  26 |   await input.fill(letra);
  27 |   await input.press("Enter");
  28 | });
  29 | 
  30 | Then("se ve el mensaje {string}", async ({ page }, mensaje: string) => {
  31 |   // Buscaremos un elemento en la pantalla con el id de test "status"
  32 |   await expect(page.getByTestId("status")).toHaveText(mensaje);
  33 | });
  34 | 
  35 | Then("se ve el mensaje de advertencia {string}", async ({ page }, mensaje: string) => {
  36 |   // Buscaremos un elemento con data-testid="warning"
  37 |   await expect(page.getByTestId("warning")).toHaveText(mensaje);
  38 | });
  39 | 
  40 | // --- NUEVOS STEPS PARA EL AT DE PALABRA AL AZAR (CORREGIDOS) ---
  41 | let listaPalabras: string[] = [];
  42 | 
  43 | Given("que la lista de palabras contiene {string} y {string}", async function ({ page }, palabra1: string, palabra2: string) {
  44 |   listaPalabras = [palabra1, palabra2];
  45 | });
  46 | 
  47 | When("inicio una nueva partida al azar fijando la semilla para que elija la primera opción", async function ({ page }) {
  48 |   // Pasamos la lista de palabras y un parámetro de semilla (seed) por la URL
  49 |   await page.goto(`http://localhost:5173/?words=${listaPalabras.join(",")}&seed=0`);
  50 | });
  51 | 
  52 | Then("la palabra oculta debería tener 5 guiones bajos", async function ({ page }) {
  53 |   const wordLocator = page.getByTestId("word");
  54 |   // Modificamos para que valide con los espacios correspondientes del dominio ("_ _ _ _ _")
  55 |   await expect(wordLocator).toHaveText("_ _ _ _ _");
  56 | });
  57 | 
  58 | // Al final de features/steps/ahorcado.steps.ts
  59 | Then("se ve el mensaje de estado {string}", async ({ page }, estado: string) => {
  60 |   await expect(page.getByTestId("status")).toHaveText(estado);
  61 | });
  62 | 
  63 | When("el jugador presiona el botón {string}", async ({ page }, nombreBoton: string) => {
> 64 |   await page.getByRole("button", { name: nombreBoton }).click();
     |                                                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  65 | });
```