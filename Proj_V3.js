const prompt = require("prompt-sync")({ sigint: true });
const { mostrarMenuInici, leerOpcion, mostrarMenuDos } = require("funciones");

mostrarMenuInici();
const opcio = leerOpcion(4); // lee la opción una sola vez

mostrarMenuDos(opcio);

/*
console.log("Has triat l'opció:", opcion);
*/

// Aquí puedes pasar 'opcion' a otra función
// por ejemplo ejecutarAccion(opcion)

