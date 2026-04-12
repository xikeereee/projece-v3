/**
 * Projecte V3 Combats Automàtics
 * Grup 4
 * Autors: Iker Moreno, Marc Beltrán, Alexander Constante
 * Exportación de módulos i constantes
 */



const prompt = require("prompt-sync")({ sigint: true });

const { leerOpcion, mostrarMenuInici } = require("./Menu.js");
const { mostrarMenuDos, leerInteraccioDos } = require("./MenuDos.js");
const { CrearPers } = require("./personajes.js");
const { generarEnemic, luchar } = require("./lluita.js");
const { actualizarEstadisticas, verEstadisticas, resetearEstadisticas } = require("./editStats.js")

module.exports = {
    leerOpcion,
    mostrarMenuInici,
    mostrarMenuDos,
    leerInteraccioDos,
    CrearPers,
    generarEnemic,
    luchar,
    actualizarEstadisticas,
    verEstadisticas,
    resetearEstadisticas
};