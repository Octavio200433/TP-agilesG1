// Generated from: features\palabra-azar.feature
import { test } from "playwright-bdd";

test.describe('Palabra al azar', () => {

  test('Iniciar una partida con una palabra seleccionada al azar', async ({ Given, When, Then, page }) => { 
    await Given('que la lista de palabras contiene "PERRO" y "LAVADORA"', null, { page }); 
    await When('inicio una nueva partida al azar fijando la semilla para que elija la primera opción', null, { page }); 
    await Then('la palabra oculta debería tener 5 guiones bajos', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\palabra-azar.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given que la lista de palabras contiene \"PERRO\" y \"LAVADORA\"","stepMatchArguments":[{"group":{"start":34,"value":"\"PERRO\"","children":[{"start":35,"value":"PERRO","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":44,"value":"\"LAVADORA\"","children":[{"start":45,"value":"LAVADORA","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When inicio una nueva partida al azar fijando la semilla para que elija la primera opción","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then la palabra oculta debería tener 5 guiones bajos","stepMatchArguments":[]}]},
]; // bdd-data-end