const prompt = require("prompt-sync")({ sigint: true });
const { mostrarMenuInici, leerOpcion, mostrarMenuDos, leerInteraccioDos, CrearPers } = require("funciones");
const Paladi_Huma = require("./personajes/Paladi_Huma");

personajeActual = null; // Aquí guardaremos el personaje seleccionado o creado

mostrarMenuInici();
const opcio = leerOpcion(4); // Elegir personaje (1-4)

personajeActual = opcio; // Guardar personaje seleccionado

mostrarMenuDos(personajeActual);
const interact = leerInteraccioDos(4); // Elegir acción (1-4) 

let nouPersonatge;
switch (interact) {
    case 1: // Crear nuevo personaje
        console.clear()
        console.log("\nCreando un nuevo personaje...");
        nouPersonatge = CrearPers(personajeActual);
        console.log("Personaje creado:", nouPersonatge);
        break;

    case 2: // Ver estadísticas
        console.log("\nEstadísticas del personaje seleccionado:");
        console.log(personajeActual);
        break;

    case 3: // Luchar
        console.log("\n¡Comienza la lucha!");
        // Aquí puedes llamar a tu función de combate
        break;

    case 4: // Salir
        console.log("\nSaliendo del juego...");
        break;

    default:
        console.log("Opción no válida.");
        break;
}
/*
console.log("Has triat l'opció:", opcion);
*/

// Aquí puedes pasar 'opcion' a otra función
// por ejemplo ejecutarAccion(opcion)

