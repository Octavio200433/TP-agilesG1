# language: es
Característica: Letra repetida

  Escenario: El jugador ingresa una letra que ya había intentado
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "A"
    Y el jugador adivina la letra "A"
    Entonces se ve la palabra "_ A _ _"
    Y se ven 6 vidas
    Y se ve el mensaje de advertencia "Ya intentaste con esa letra"