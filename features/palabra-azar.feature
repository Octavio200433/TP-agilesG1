# features/palabra-azar.feature
Feature: Palabra al azar
  Como jugador
  Quiero que el juego elija una palabra al azar de una lista
  Para tener una partida variada y misteriosa

  Scenario: Iniciar una partida con una palabra seleccionada al azar
    Given que la lista de palabras contiene "PERRO" y "LAVADORA"
    When inicio una nueva partida al azar fijando la semilla para que elija la primera opción
    Then la palabra oculta debería tener 5 guiones bajos