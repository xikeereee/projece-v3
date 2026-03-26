const prompt = require("prompt-sync")({ sigint: true });
const {leerOpcion, mostrarMenuInici} = require("./Menu.js");
const {mostrarMenuDos, leerInteraccioDos} = require("./MenuDos.js");
const { CrearPers } = require("./personajes.js");

module.exports = {
    leerOpcion,
    mostrarMenuInici,
    mostrarMenuDos,
    leerInteraccioDos,
    CrearPers
};


