/**
 * Projecte V3 Combats Automàtics
 * Grup 4
 * Autors: Iker Moreno, Marc Beltrán, Alexander Constante
 * Menú principal (selección de personaje)
 */



const { Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja } = require("../personajes");
const prompt = require("prompt-sync")({ sigint: true });
const { TerminalUtils } = require("../terminalUtils/TerminalUtils");
const { escribirTextoAnimado } = require("../terminalUtils/animaciones");






async function mostrarMenuInici() {
    console.clear();

    // Título
    TerminalUtils.log("==================================================", "#00FFFF");
    TerminalUtils.log("        ⚔️  AUTOMATIC COMBATS by Grup4 ⚔️        ", "#FFFF00");
    TerminalUtils.log("==================================================", "#00FFFF");

    await TerminalUtils.espera(500);

    // Animación escritura
    await escribirTextoAnimado("Cargando menú...", "#00FF00");
    await TerminalUtils.espera(500);

    console.clear();


    
    // Arte ASCII
    TerminalUtils.log("      /| ________________");
    TerminalUtils.log("O|===|* >________________>");
    TerminalUtils.log("      \\|");

    TerminalUtils.log("\n+--------- Elige personaje ---------+\n", "#FFFFFF");

    TerminalUtils.log("1. Paladí Humà", "#00FF00");
    TerminalUtils.log("2. Mag Elf", "#00FFFF");
    TerminalUtils.log("3. Guerrer Nan", "#FFAA00");
    TerminalUtils.log("4. Arquer Mitjà", "#FF66FF");

    TerminalUtils.log("");
}






/**
 * Se asegura de que la opción que escoja el usuario sea válida, pero también
 * avisa de si hay un error
 * @param {*} maxOpciones 
 * @returns 
 */
async function leerOpcion(maxOpciones) {
    let opcion;

    while (true) {
        console.clear();
        await mostrarMenuInici();

        opcion = parseInt(prompt("> "));

        if (!isNaN(opcion) && opcion >= 1 && opcion <= maxOpciones) {
            break;
        }


        console.log("")
        TerminalUtils.log("ERROR: Escoge una opción válida", "#FF0000");
        await TerminalUtils.espera(1000);
    }

    switch (opcion) {
        case 1: return new Paladi_Huma();
        case 2: return new Mag_Elf();
        case 3: return new Guerrer_Nan();
        case 4: return new Arquer_Mitja();
    }
}

module.exports = { mostrarMenuInici, leerOpcion };