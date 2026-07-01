// Generated from: features\fallar-letra.feature
import { test } from "playwright-bdd";

test.describe('Fallar letra', () => {

  test('El jugador ingresa una letra que no pertenece a la palabra', async ({ Given, When, Then, And, page }) => { 
    await Given('una partida con la palabra "AGIL"', null, { page }); 
    await When('el jugador adivina la letra "E"', null, { page }); 
    await Then('se ve la palabra "_ _ _ _"', null, { page }); 
    await And('se ven 5 vidas', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\fallar-letra.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Dado una partida con la palabra \"AGIL\"","stepMatchArguments":[{"group":{"start":27,"value":"\"AGIL\"","children":[{"start":28,"value":"AGIL","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"Cuando el jugador adivina la letra \"E\"","stepMatchArguments":[{"group":{"start":28,"value":"\"E\"","children":[{"start":29,"value":"E","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Entonces se ve la palabra \"_ _ _ _\"","stepMatchArguments":[{"group":{"start":17,"value":"\"_ _ _ _\"","children":[{"start":18,"value":"_ _ _ _","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Y se ven 5 vidas","stepMatchArguments":[{"group":{"start":7,"value":"5"},"parameterTypeName":"int"}]}]},
]; // bdd-data-end