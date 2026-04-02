const { Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja } = require("../personajes");
const { mostrarMenuInici, leerOpcion } = require("./Menu.js"); // ajusta según tu estructura
const prompt = require("prompt-sync")({ sigint: true });

function CrearPers(personajeActual) {
    console.log("Personaje actual:", personajeActual.Nom);

    // Mostrar el menú de selección
    mostrarMenuInici();

    const nuevoPersonaje = leerOpcion(4); // leerOpcion ya devuelve un objeto de personaje

    return nuevoPersonaje; // Devuelve el **objeto completo**, no solo el nombre
}

module.exports = { CrearPers };