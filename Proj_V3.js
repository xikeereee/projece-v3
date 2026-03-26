const prompt = require("prompt-sync")({ sigint: true });
const { mostrarMenuInici, leerOpcion, mostrarMenuDos, leerInteraccioDos, CrearPers } = require("funciones");

let personajeActual = null;
mostrarMenuInici();
const opcio = leerOpcion(4); // lee la opción una sola vez

personajeActual = opcio;

mostrarMenuDos(personajeActual);
const interact = leerInteraccioDos();

let personatge = false;
if (interact == 1) {
    do {
        console.log("Putos negros")
        CrearPers()
    }while (personatge = true)
}

/*
console.log("Has triat l'opció:", opcion);
*/

// Aquí puedes pasar 'opcion' a otra función
// por ejemplo ejecutarAccion(opcion)

