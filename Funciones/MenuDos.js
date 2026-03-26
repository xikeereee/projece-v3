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

function leerInteraccioDos(InteraccioDos) {
    let Interaccio;
    do {
        Interaccio = parseInt(prompt("> "));
    } while (isNaN(Interaccio) || Interaccio < 1 || Interaccio > InteraccioDos); // corregido

    switch (Interaccio) {
        case 1:
            Interaccio = "Crear nou personatge"
            break;
        case 2:
            Interaccio = "Veure estadístiques"
            break;
        case 3:
            Interaccio = "Lluitar"
            break;
        case 4:
            Interaccio = "Sortir"
            break;
    }
    return Interaccio;
}


module.exports = { mostrarMenuDos, leerInteraccioDos };