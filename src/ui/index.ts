import { Ahorcado } from "../domain/Ahorcado";
import { mountApp } from "./main.ts";

// 1. Armamos nuestro diccionario de palabras reales para el juego normal
const diccionario = [
    "PERRO",
    "GATO",
    "AUTO",
    "ELEFANTE",
    "PROGRAMACION",
    "FACULTAD",
    "MURCIELAGO"
];

// 2. Capturamos el parámetro de la URL por si los tests anteriores lo necesitan (?word=...)
const urlParams = new URLSearchParams(window.location.search);
const palabraFija = urlParams.get("word");

// 3. Si la URL exige una palabra fija (tests viejos), la usamos. 
// Si la URL está limpia (jugador real), le mandamos el diccionario para que el azar haga su magia.
const configuracionInicial = palabraFija ? palabraFija : diccionario;

// 4. Instanciamos el objeto real del dominio
const juego = new Ahorcado(configuracionInicial);

// 5. Montamos la interfaz pasándole el juego
mountApp(juego);