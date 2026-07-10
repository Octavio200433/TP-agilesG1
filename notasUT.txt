AT 1 — Iniciar partida
Empieza con palabra "GATO" → ve     y 6 vidas

Ahorcado se crea con una palabra y arranca con 6 vidas
la palabra enmascarada inicial muestra un guión por cada letra (sin revelar nada)
la palabra enmascarada respeta la longitud de la palabra (ej. "GATO" → 4 guiones)

AT 2 — Acertar letra
Tipea A → ve  A  , vidas siguen en 6

adivinar una letra presente revela esa letra en la posición correcta
adivinar una letra presente revela todas sus ocurrencias (ej. "ALA" + A → A  A)
adivinar correctamente no descuenta vidas
la comparación de letras es case-insensitive (a == A)

AT 3 — Fallar letra
Tipea E → sigue    , vidas = 5

adivinar una letra ausente descuenta una vida
adivinar una letra ausente no modifica la palabra enmascarada
vidas nunca baja de 0 (si ya está en 0, no sigue descontando)

AT 4 — Ganar
Completa todas las letras → ve mensaje "GANASTE"

el juego está "ganado" cuando todas las letras de la palabra fueron adivinadas
el juego no está ganado si falta al menos una letra por adivinar
una vez ganado, el estado expone que terminó (ej. estaTerminado() / gano())

AT 5 — Perder
6 fallos → ve "PERDISTE" y la palabra revelada

el juego está "perdido" cuando las vidas llegan a 0
al perder, se puede consultar la palabra completa (sin enmascarar) para mostrarla
el juego no está perdido mientras queden vidas > 0

AT 6 — Letra repetida
Re-tipea una letra ya intentada → no penaliza e informa

Ahorcado lleva registro de las letras ya intentadas
volver a adivinar una letra ya intentada (acertada) no descuenta vidas ni cambia el estado
volver a adivinar una letra ya intentada (fallada) no descuenta una segunda vida
el objeto expone de alguna forma que la letra ya fue intentada (para que la UI informe)

AT 7 — Entrada inválida
Tipea algo que no es letra, o juega con la partida terminada

adivinar con un carácter que no es una letra (número, símbolo) es rechazado / no afecta el estado
adivinar con una cadena de más de un carácter es rechazado / no afecta el estado
adivinar una letra cuando el juego ya terminó (ganado o perdido) no tiene efecto