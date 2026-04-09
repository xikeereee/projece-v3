const prompt = require("prompt-sync")({ sigint: true });
const { Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja } = require("../personajes");


// Genera un enemigo distinto al personaje actual
function generarEnemic(personajeActual) {
    const personajes = [Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja];
    let enemigo;
    do {
        const index = Math.floor(Math.random() * personajes.length);
        enemigo = new personajes[index]();
    } while (enemigo.Nom === personajeActual.Nom); // ahora en mayúscula
    return enemigo;
}




// Lucha y pregunta al usuario quién ganó
function luchar(personajeActual) {
    const enemic = generarEnemic(personajeActual);

    console.log("Tu personaje: " + personajeActual.Nom);
    console.log("Enemigo: " + enemic.Nom);

    console.log("\nQuién ha ganado?");
    console.log("1. " + personajeActual.Nom);
    console.log("2. " + enemic.Nom);

    let opcion;
    do {
        opcion = parseInt(prompt("> "));
    } while (opcion !== 1 && opcion !== 2);

    let resultado;
    if (opcion === 1) {
        console.log("Has guanyat amb " + personajeActual.Nom);
        resultado = "victoria";
    } else {
        console.log("Has perdut contra " + enemic.Nom);
        resultado = "derrota";
    }

    return resultado;
}



module.exports = { generarEnemic, luchar };