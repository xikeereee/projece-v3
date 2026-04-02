const prompt = require("prompt-sync")({ sigint: true });
const { Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja } = require("../personajes");

function mostrarMenuInici() {
    console.log("+--------- Has de triar personatge ---------+ \n");
    console.log("1. Paladí Humà");
    console.log("2. Mag Elf");
    console.log("3. Guerrer Nan");
    console.log("4. Arquer Mitjà \n");
}

function leerOpcion(maxOpciones) {
    let opcion;
    do {
        opcion = parseInt(prompt("> "));
    } while (isNaN(opcion) || opcion < 1 || opcion > maxOpciones);

    switch (opcion) {
        case 1: opcion = new Paladi_Huma(); break;
        case 2: opcion = new Mag_Elf(); break;
        case 3: opcion = new Guerrer_Nan(); break;
        case 4: opcion = new Arquer_Mitja(); break;
        default:
            console.log("No s'ha detectat cap personatge");
            break;
    }

    return opcion;
}

module.exports = { mostrarMenuInici, leerOpcion };