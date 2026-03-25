// MenuDos.js
const prompt = require("prompt-sync")({ sigint: true });

function mostrarMenuDos(opcio) {
    console.log("Has triat el personatge: " + opcio);
    prompt();
}

module.exports = { mostrarMenuDos };