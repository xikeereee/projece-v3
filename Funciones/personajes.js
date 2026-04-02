const { mostrarMenuInici, leerOpcion } = require("./Menu.js"); // ajusta la ruta según tu proyecto
const prompt = require("prompt-sync")({ sigint: true });

function CrearPers(personajeActual) {
    console.log("Personatge actual:", personajeActual);

    // Mostramos menú de selección (si quieres que el usuario pueda elegir nombre/tipo)
    mostrarMenuInici();
    const opcion = leerOpcion(4); // El usuario elige un personaje

    return opcion; // devuelve el personaje actualizado
}

module.exports = { CrearPers };