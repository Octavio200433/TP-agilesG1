# language: es
Característica: Desafío Aprobación Directa — Jugar de nuevo

  Escenario: El jugador reinicia la partida al ganar para jugar de nuevo sin recargar la página
    Dado una partida con la palabra "SOL"
    Cuando el jugador adivina la letra "S"
    Y el jugador adivina la letra "O"
    Y el jugador adivina la letra "L"
    Entonces se ve el mensaje de estado "GANASTE"
    Cuando el jugador presiona el botón "Jugar de nuevo"
    Entonces se ve la palabra "_ _ _"
    Y se ven 6 vidas