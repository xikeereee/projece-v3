// MenuDos.js
const prompt = require("prompt-sync")({ sigint: true });
const { Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja } = require("../personajes");

function mostrarMenuDos(opcio) {
    console.log("Has triat el personatge: ", opcio.Nom);
    prompt();

    console.clear()

    console.log("+--------- Que farém ---------+ \n");

    console.log("1. Crear nou personatge");
    console.log("2. Veure estadístiques");
    console.log("3. Lluitar");
    console.log("4. Sortir");
}

function leerInteraccioDos(max) {
    let Interaccio;
    do {
        Interaccio = parseInt(prompt("> "));
    } while (isNaN(Interaccio) || Interaccio < 1 || Interaccio > max);

    return Interaccio;
}


module.exports = { mostrarMenuDos, leerInteraccioDos };