/**
 * Projecte V3 Combats Automàtics
 * Grup 4
 * Autors: Iker Moreno, Marc Beltrán, Alexander Constante
 * Menú principal (selección de personaje)
 */



const prompt = require("prompt-sync")({ sigint: true });
const { Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja } = require("../personajes");
const { TerminalUtils } = require("terminalutils");



/**
 * Muestra los personajes a elegir
 */
function mostrarMenuInici() {
    console.log("+--------- Has de triar personatge ---------+ \n");
    console.log("1. Paladí Humà");
    console.log("2. Mag Elf");
    console.log("3. Guerrer Nan");
    console.log("4. Arquer Mitjà \n");
}



/**
 * Se asegura de que la opción que escoja el usuario sea válida, pero también
 * avisa de si hay un error
 * @param {*} maxOpciones 
 * @returns 
 */
function leerOpcion(maxOpciones) {
    let opcion;

    while (true) {
        console.clear();
        mostrarMenuInici();

        opcion = parseInt(prompt("> "));

        if (!isNaN(opcion) && opcion >= 1 && opcion <= maxOpciones) {
            break;
        }


        console.log("")
        console.log("ERROR: Escoje una opción válida");
        prompt("Presiona cualquier tecla para continuar...");
    }

    switch (opcion) {
        case 1: return new Paladi_Huma();
        case 2: return new Mag_Elf();
        case 3: return new Guerrer_Nan();
        case 4: return new Arquer_Mitja();
    }
}

module.exports = { mostrarMenuInici, leerOpcion };