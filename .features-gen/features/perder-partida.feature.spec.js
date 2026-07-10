// Generated from: features\perder-partida.feature
import { test } from "playwright-bdd";

test.describe('Perder partida', () => {

  test('El jugador se queda sin vidas', async ({ Given, When, Then, And, page }) => { 
    await Given('una partida con la palabra "GATO"', null, { page }); 
    await When('el jugador adivina la letra "Z"', null, { page }); 
    await And('el jugador adivina la letra "X"', null, { page }); 
    await And('el jugador adivina la letra "C"', null, { page }); 
    await And('el jugador adivina la letra "V"', null, { page }); 
    await And('el jugador adivina la letra "B"', null, { page }); 
    await And('el jugador adivina la letra "N"', null, { page }); 
    await Then('se ve el mensaje "PERDISTE"', null, { page }); 
    await And('se ve la palabra "GATO"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\perder-partida.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Dado una partida con la palabra \"GATO\"","stepMatchArguments":[{"group":{"start":27,"value":"\"GATO\"","children":[{"start":28,"value":"GATO","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"Cuando el jugador adivina la letra \"Z\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Z\"","children":[{"start":29,"value":"Z","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"X\"","stepMatchArguments":[{"group":{"start":28,"value":"\"X\"","children":[{"start":29,"value":"X","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"C\"","stepMatchArguments":[{"group":{"start":28,"value":"\"C\"","children":[{"start":29,"value":"C","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"V\"","stepMatchArguments":[{"group":{"start":28,"value":"\"V\"","children":[{"start":29,"value":"V","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"B\"","stepMatchArguments":[{"group":{"start":28,"value":"\"B\"","children":[{"start":29,"value":"B","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"Y el jugador adivina la letra \"N\"","stepMatchArguments":[{"group":{"start":28,"value":"\"N\"","children":[{"start":29,"value":"N","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Entonces se ve el mensaje \"PERDISTE\"","stepMatchArguments":[{"group":{"start":17,"value":"\"PERDISTE\"","children":[{"start":18,"value":"PERDISTE","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Y se ve la palabra \"GATO\"","stepMatchArguments":[{"group":{"start":17,"value":"\"GATO\"","children":[{"start":18,"value":"GATO","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end