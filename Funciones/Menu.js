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
        case 1: return new Paladi_Huma();
        case 2: return new Mag_Elf();
        case 3: return new Guerrer_Nan();
        case 4: return new Arquer_Mitja();
        default:
            console.log("No s'ha detectat cap personatge");
            return null;
    }
}

module.exports = { mostrarMenuInici, leerOpcion };