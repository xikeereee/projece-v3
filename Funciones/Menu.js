const prompt = require("prompt-sync")({ sigint: true });
/**
 * 
 * Crear Libreria de funciones
 */

function mostrarMenuInici() {
    console.log("+--------- Benvingut a Combats automàtics ---------+ \n");
    console.log("Pressiona cualquier tecla per a continuar... \n");
    prompt();

    console.clear();

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

module.exports = { mostrarMenuInici, leerOpcion };