# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\iniciar-partida.feature.spec.js >> Iniciar partida >> El jugador inicia una partida con una palabra específica
- Location: .features-gen\features\iniciar-partida.feature.spec.js:6:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByTestId('word')
Expected: "_ _ _ _"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByTestId('word')

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
> 15 |   await expect(page.getByTestId("word")).toHaveText(esperada);
     |                                          ^ Error: expect(locator).toHaveText(expected) failed
  16 | });
  17 | 
  18 | // Esta función traduce el "Y se ven X vidas"
  19 | // Busca un elemento con el identificador "lives" y verifica que tenga el número de vidas correcto.
  20 | Then("se ven {int} vidas", async ({ page }, vidas: number) => {
  21 |   await expect(page.getByTestId("lives")).toHaveText(String(vidas));
  22 | });
```