// en Proj_V3.js
const { mostrarMenuInici, leerOpcion } = require("./Funciones/Menu.js"); // require en vez de import
const prompt = require("prompt-sync")({ sigint: true });

mostrarMenuInici();
leerOpcion();

