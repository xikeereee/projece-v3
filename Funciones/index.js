const prompt = require("prompt-sync")({ sigint: true });
const {leerOpcion, mostrarMenuInici} = require("./Menu.js");
const {mostrarMenuDos} = require("./MenuDos.js");

module.exports = {
    leerOpcion,
    mostrarMenuInici,
    mostrarMenuDos
};


