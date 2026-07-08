// Generated from: features\letra-repetida.feature
import { test } from "playwright-bdd";

test.describe('Letra repetida', () => {

  test('El jugador ingresa una letra que ya había intentado', async ({ Given, When, Then, And, page }) => { 
    await Given('una partida con la palabra "GATO"', null, { page }); 
    await When('el jugador adivina la letra "A"', null, { page }); 
    await And('el jugador adivina la letra "A"', null, { page }); 
    await Then('se ve la palabra "_ A _ _"', null, { page }); 
    await And('se ven 6 vidas', null, { page }); 
    await And('se ve el mensaje de advertencia "Ya intentaste con esa letra"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\letra-repetida.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Dado una partida con la palabra \"GATO\"","stepMatchArguments":[{"group":{"start":27,"value":"\"GATO\"","children":[{"start":28,"value":"GATO","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"Cuando el jugador adivina la letra \"A\"","stepMatchArguments":[{"group":{"start":28,"value":"\"A\"","children":[{"start":29,"value":"A","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"A\"","stepMatchArguments":[{"group":{"start":28,"value":"\"A\"","children":[{"start":29,"value":"A","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Entonces se ve la palabra \"_ A _ _\"","stepMatchArguments":[{"group":{"start":17,"value":"\"_ A _ _\"","children":[{"start":18,"value":"_ A _ _","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Y se ven 6 vidas","stepMatchArguments":[{"group":{"start":7,"value":"6"},"parameterTypeName":"int"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Y se ve el mensaje de advertencia \"Ya intentaste con esa letra\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Ya intentaste con esa letra\"","children":[{"start":33,"value":"Ya intentaste con esa letra","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end