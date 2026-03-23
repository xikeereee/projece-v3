const { mostrarMenuInici, leerOpcion } = require("funciones");

mostrarMenuInici();
const opcion = leerOpcion(4); // lee la opción una sola vez

console.log("Has triat l'opció:", opcion);

// Aquí puedes pasar 'opcion' a otra función
// por ejemplo ejecutarAccion(opcion)

