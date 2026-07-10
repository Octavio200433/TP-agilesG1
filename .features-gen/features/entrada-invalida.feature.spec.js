// Generated from: features\entrada-invalida.feature
import { test } from "playwright-bdd";

test.describe('AT 7 — Entrada inválida', () => {

  test('Caso A - Ingresar un carácter que no es letra es rechazado (Red 1)', async ({ Given, When, Then, And, page }) => { 
    await Given('una partida con la palabra "CASA"', null, { page }); 
    await When('el jugador adivina la letra "1"', null, { page }); 
    await Then('se ve la palabra "_ _ _ _"', null, { page }); 
    await And('se ven 6 vidas', null, { page }); 
  });

  test('Caso B - Ingresar más de un carácter es rechazado y jugar terminado no afecta (Red 2)', async ({ Given, When, Then, And, page }) => { 
    await Given('una partida con la palabra "CASA"', null, { page }); 
    await When('el jugador adivina la letra "CA"', null, { page }); 
    await Then('se ve la palabra "_ _ _ _"', null, { page }); 
    await And('se ven 6 vidas', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\entrada-invalida.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Dado una partida con la palabra \"CASA\"","stepMatchArguments":[{"group":{"start":27,"value":"\"CASA\"","children":[{"start":28,"value":"CASA","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"Cuando el jugador adivina la letra \"1\"","stepMatchArguments":[{"group":{"start":28,"value":"\"1\"","children":[{"start":29,"value":"1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Entonces se ve la palabra \"_ _ _ _\"","stepMatchArguments":[{"group":{"start":17,"value":"\"_ _ _ _\"","children":[{"start":18,"value":"_ _ _ _","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Y se ven 6 vidas","stepMatchArguments":[{"group":{"start":7,"value":"6"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":13,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Dado una partida con la palabra \"CASA\"","stepMatchArguments":[{"group":{"start":27,"value":"\"CASA\"","children":[{"start":28,"value":"CASA","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"Cuando el jugador adivina la letra \"CA\"","stepMatchArguments":[{"group":{"start":28,"value":"\"CA\"","children":[{"start":29,"value":"CA","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Entonces se ve la palabra \"_ _ _ _\"","stepMatchArguments":[{"group":{"start":17,"value":"\"_ _ _ _\"","children":[{"start":18,"value":"_ _ _ _","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Y se ven 6 vidas","stepMatchArguments":[{"group":{"start":7,"value":"6"},"parameterTypeName":"int"}]}]},
]; // bdd-data-end