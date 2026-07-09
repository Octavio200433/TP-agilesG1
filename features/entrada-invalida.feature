# language: es
Característica: AT 7 — Entrada inválida

  Escenario: Caso A - Ingresar un carácter que no es letra es rechazado (Red 1)
    Dado una partida con la palabra "CASA"
    Cuando el jugador adivina la letra "1"
    Entonces se ve la palabra "_ _ _ _"
    Y se ven 6 vidas

  Escenario: Caso B - Ingresar más de un carácter es rechazado y jugar terminado no afecta (Red 2)
    Dado una partida con la palabra "CASA"
    Cuando el jugador adivina la letra "CA"
    Entonces se ve la palabra "_ _ _ _"
    Y se ven 6 vidas
    Cuando el jugador adivina la letra "X"
    Y el jugador adivina la letra "Y"
    Y el jugador adivina la letra "Z"
    Y el jugador adivina la letra "W"
    Y el jugador adivina la letra "Q"
    Y el jugador adivina la letra "P"
    Entonces se ven 0 vidas