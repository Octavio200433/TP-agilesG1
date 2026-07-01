// Generated from: features\ganar-partida.feature
import { test } from "playwright-bdd";

test.describe('Ganar partida', () => {

  test('El jugador completa todas las letras y gana', async ({ Given, When, Then, And, page }) => { 
    await Given('una partida con la palabra "GATO"', null, { page }); 
    await When('el jugador adivina la letra "G"', null, { page }); 
    await And('el jugador adivina la letra "A"', null, { page }); 
    await And('el jugador adivina la letra "T"', null, { page }); 
    await And('el jugador adivina la letra "O"', null, { page }); 
    await Then('se ve el mensaje "GANASTE"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\ganar-partida.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Dado una partida con la palabra \"GATO\"","stepMatchArguments":[{"group":{"start":27,"value":"\"GATO\"","children":[{"start":28,"value":"GATO","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"Cuando el jugador adivina la letra \"G\"","stepMatchArguments":[{"group":{"start":28,"value":"\"G\"","children":[{"start":29,"value":"G","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"A\"","stepMatchArguments":[{"group":{"start":28,"value":"\"A\"","children":[{"start":29,"value":"A","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"T\"","stepMatchArguments":[{"group":{"start":28,"value":"\"T\"","children":[{"start":29,"value":"T","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"O\"","stepMatchArguments":[{"group":{"start":28,"value":"\"O\"","children":[{"start":29,"value":"O","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Entonces se ve el mensaje \"GANASTE\"","stepMatchArguments":[{"group":{"start":17,"value":"\"GANASTE\"","children":[{"start":18,"value":"GANASTE","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end