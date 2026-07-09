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
    await When('el jugador adivina la letra "X"', null, { page }); 
    await And('el jugador adivina la letra "Y"', null, { page }); 
    await And('el jugador adivina la letra "Z"', null, { page }); 
    await And('el jugador adivina la letra "W"', null, { page }); 
    await And('el jugador adivina la letra "Q"', null, { page }); 
    await And('el jugador adivina la letra "P"', null, { page }); 
    await Then('se ven 0 vidas', null, { page }); 
    await When('el jugador adivina la letra "A"', null, { page }); 
    await Then('se ve la palabra "_ _ _ _"', null, { page }); 
    await And('se ven 0 vidas', null, { page }); 
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
  {"pwTestLine":13,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Dado una partida con la palabra \"CASA\"","stepMatchArguments":[{"group":{"start":27,"value":"\"CASA\"","children":[{"start":28,"value":"CASA","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"Cuando el jugador adivina la letra \"CA\"","stepMatchArguments":[{"group":{"start":28,"value":"\"CA\"","children":[{"start":29,"value":"CA","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Entonces se ve la palabra \"_ _ _ _\"","stepMatchArguments":[{"group":{"start":17,"value":"\"_ _ _ _\"","children":[{"start":18,"value":"_ _ _ _","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Y se ven 6 vidas","stepMatchArguments":[{"group":{"start":7,"value":"6"},"parameterTypeName":"int"}]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"Cuando el jugador adivina la letra \"X\"","stepMatchArguments":[{"group":{"start":28,"value":"\"X\"","children":[{"start":29,"value":"X","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"Y\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Y\"","children":[{"start":29,"value":"Y","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"Z\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Z\"","children":[{"start":29,"value":"Z","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"W\"","stepMatchArguments":[{"group":{"start":28,"value":"\"W\"","children":[{"start":29,"value":"W","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"Q\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Q\"","children":[{"start":29,"value":"Q","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"P\"","stepMatchArguments":[{"group":{"start":28,"value":"\"P\"","children":[{"start":29,"value":"P","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Entonces se ven 0 vidas","stepMatchArguments":[{"group":{"start":7,"value":"0"},"parameterTypeName":"int"}]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"Cuando el jugador adivina la letra \"A\"","stepMatchArguments":[{"group":{"start":28,"value":"\"A\"","children":[{"start":29,"value":"A","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Entonces se ve la palabra \"_ _ _ _\"","stepMatchArguments":[{"group":{"start":17,"value":"\"_ _ _ _\"","children":[{"start":18,"value":"_ _ _ _","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Y se ven 0 vidas","stepMatchArguments":[{"group":{"start":7,"value":"0"},"parameterTypeName":"int"}]}]},
]; // bdd-data-end