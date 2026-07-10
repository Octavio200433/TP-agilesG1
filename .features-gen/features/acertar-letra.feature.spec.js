// Generated from: features\acertar-letra.feature
import { test } from "playwright-bdd";

test.describe('Acertar letra', () => {

  test('El jugador acierta una letra', async ({ Given, When, Then, And, page }) => { 
    await Given('una partida con la palabra "GATO"', null, { page }); 
    await When('el jugador adivina la letra "A"', null, { page }); 
    await Then('se ve la palabra "_ A _ _"', null, { page }); 
    await And('se ven 6 vidas', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\acertar-letra.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Dado una partida con la palabra \"GATO\"","stepMatchArguments":[{"group":{"start":27,"value":"\"GATO\"","children":[{"start":28,"value":"GATO","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"Cuando el jugador adivina la letra \"A\"","stepMatchArguments":[{"group":{"start":28,"value":"\"A\"","children":[{"start":29,"value":"A","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Entonces se ve la palabra \"_ A _ _\"","stepMatchArguments":[{"group":{"start":17,"value":"\"_ A _ _\"","children":[{"start":18,"value":"_ A _ _","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Y se ven 6 vidas","stepMatchArguments":[{"group":{"start":7,"value":"6"},"parameterTypeName":"int"}]}]},
]; // bdd-data-end