/**
 * Projecte V3 Combats Automàtics
 * Grup 4
 * Autors: Iker Moreno, Marc Beltrán, Alexander Constante
 * Menú secundario (Opciones del juego)
 */



const prompt = require("prompt-sync")({ sigint: true });
const { Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja } = require("../personajes");
const { mostrarMenuInici, leerOpcion } = require("./Menu.js"); // ajusta según tu estructura






/**
 * Exposición del menú secundario (acción del usuario respecto al juego)
 * @param {*} opcio 
 */
function mostrarMenuDos(opcio) {

    console.clear()

    console.log("+--------- QUE VOLS FER ---------+ \n");

    console.log("1. Crear nou personatge");
    console.log("2. Veure estadístiques");
    console.log("3. Lluitar");
    console.log("4. Sortir");
}





/**
 * Se asegura de que la opción que escoja el usuario sea válida, pero también
 * avisa de si hay un error
 * @param {*} max 
 * @returns 
 */
function leerInteraccioDos(max) {
    let Interaccio;
    do {
        Interaccio = parseInt(prompt("> "));
    } while (isNaN(Interaccio) || Interaccio < 1 || Interaccio > max);

    return Interaccio;
}


module.exports = { mostrarMenuDos, leerInteraccioDos };