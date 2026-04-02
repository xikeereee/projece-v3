// MenuDos.js
const prompt = require("prompt-sync")({ sigint: true });
const { Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja } = require("../personajes");
const { mostrarMenuInici, leerOpcion } = require("./Menu.js"); // ajusta según tu estructura

function mostrarMenuDos(opcio) {

    console.clear()
    
    console.log("+--------- QUE VOLS FER ---------+ \n");

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