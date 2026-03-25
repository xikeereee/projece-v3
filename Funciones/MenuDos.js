// MenuDos.js
const prompt = require("prompt-sync")({ sigint: true });

function mostrarMenuDos(opcio) {
    console.log("Has triat el personatge: " + opcio);
    prompt();

    console.clear()

    console.log("+--------- Que farém ---------+ \n");

    console.log("1. Crear nou personatge");
    console.log("2. Veure estadístiques");
    console.log("3. Lluitar");
    console.log("4. Sortir");
}

function leerOpcionDos(maxOpciones) {
    let opcion;
    do {
        opcion = parseInt(prompt("> "));
    } while (isNaN(opcion) || opcion < 1 || opcion > maxOpciones); // corregido

    switch (opcion) {
        case 1:
            opcion = "Paladí Humà"
            break;
        case 2:
            opcion = "Mag Elf"
            break;
        case 3:
            opcion = "Guerrer Nan"
            break;
        case 4:
            opcion = "Arquer Mitjà"
            break;
    }
    return opcion;
}


module.exports = { mostrarMenuDos, leerOpcionDos };