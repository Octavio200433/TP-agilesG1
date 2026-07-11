// Generated from: features\jugar-de-nuevo.feature
import { test } from "playwright-bdd";

test.describe('Desafío Aprobación Directa — Jugar de nuevo', () => {

  test('El jugador reinicia la partida al ganar para jugar de nuevo sin recargar la página', async ({ Given, When, Then, And, page }) => { 
    await Given('una partida con la palabra "SOL"', null, { page }); 
    await When('el jugador adivina la letra "S"', null, { page }); 
    await And('el jugador adivina la letra "O"', null, { page }); 
    await And('el jugador adivina la letra "L"', null, { page }); 
    await Then('se ve el mensaje de estado "GANASTE"', null, { page }); 
    await When('el jugador presiona el botón "Jugar de nuevo"', null, { page }); 
    await Then('se ve la palabra "_ _ _"', null, { page }); 
    await And('se ven 6 vidas', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\jugar-de-nuevo.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Dado una partida con la palabra \"SOL\"","stepMatchArguments":[{"group":{"start":27,"value":"\"SOL\"","children":[{"start":28,"value":"SOL","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"Cuando el jugador adivina la letra \"S\"","stepMatchArguments":[{"group":{"start":28,"value":"\"S\"","children":[{"start":29,"value":"S","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"O\"","stepMatchArguments":[{"group":{"start":28,"value":"\"O\"","children":[{"start":29,"value":"O","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"L\"","stepMatchArguments":[{"group":{"start":28,"value":"\"L\"","children":[{"start":29,"value":"L","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Entonces se ve el mensaje de estado \"GANASTE\"","stepMatchArguments":[{"group":{"start":27,"value":"\"GANASTE\"","children":[{"start":28,"value":"GANASTE","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"Cuando el jugador presiona el botón \"Jugar de nuevo\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Jugar de nuevo\"","children":[{"start":30,"value":"Jugar de nuevo","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Entonces se ve la palabra \"_ _ _\"","stepMatchArguments":[{"group":{"start":17,"value":"\"_ _ _\"","children":[{"start":18,"value":"_ _ _","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Y se ven 6 vidas","stepMatchArguments":[{"group":{"start":7,"value":"6"},"parameterTypeName":"int"}]}]},
]; // bdd-data-end