/**
 * Projecte V3 Combats Automàtics
 * Grup 4
 * Autors: Iker Moreno, Marc Beltrán, Alexander Constante
 * Definición de personaje elegido por usuario, creación de nuevo personaje
 */



const { Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja } = require("../personajes");
const { mostrarMenuInici, leerOpcion } = require("./Menu.js"); // ajusta según tu estructura
const prompt = require("prompt-sync")({ sigint: true });





/**
 * Creación de personajes: Muestra tu personaje actual, Muestra menú, lee tu opción nueva y
 * devuelve un personaje nuevo (en forma de objeto)
 * @param {*} personajeActual 
 * @returns
 */
function CrearPers(personajeActual) {
    console.log("Personaje actual:", personajeActual.Nom);

    // Mostrar el menú de selección
    mostrarMenuInici();

    const nuevoPersonaje = leerOpcion(4); // leerOpcion ya devuelve un objeto de personaje

    return nuevoPersonaje; // Devuelve el **objeto completo**, no solo el nombre
}

module.exports = { CrearPers };