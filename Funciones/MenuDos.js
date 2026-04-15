/**
 * Projecte V3 Combats Automàtics
 * Grup 4
 * Autors: Iker Moreno, Marc Beltrán, Alexander Constante
 * Menú secundario (Opciones del juego)
 */



const prompt = require("prompt-sync")({ sigint: true });
const { TerminalUtils } = require("../terminalUtils/TerminalUtils");
const { escribirTextoAnimado } = require("../terminalUtils/animaciones");



/**
 * Exposición del menú secundario (acción del usuario respecto al juego)
 * @param {*} personaje 
 */
async function mostrarMenuDos(personaje) {

    console.clear();

    // Animación de entrada
    await escribirTextoAnimado("Preparando menú...", "#00FFAA");
    await TerminalUtils.espera(300);
    console.clear();




    // Titulo
    TerminalUtils.log("===============================================", "#00FFFF");
    TerminalUtils.log("        ⚔️  MENÚ DE ACCIONES DEL JUGADOR ⚔️        ", "#FFFF00");
    TerminalUtils.log("===============================================", "#00FFFF");



    // Mostrar personaje actual
    TerminalUtils.log(`Personatge actual: ${personaje.Nom}`, "#00FFAA");
    TerminalUtils.log("-----------------------------------------------", "#00FFFF");



    // Opciones del menú
    TerminalUtils.log("1. Crear nou personatge", "#00FF00");
    TerminalUtils.log("2. Veure estadístiques", "#00FFFF");
    TerminalUtils.log("3. Lluitar", "#FF4444");
    TerminalUtils.log("4. Sortir", "#FFAA00");

    TerminalUtils.log("-----------------------------------------------", "#00FFFF");
    TerminalUtils.log("Escull una opció:", "#FFFFFF");
}






/**
 * Se asegura de que la opción que escoja el usuario sea válida
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
