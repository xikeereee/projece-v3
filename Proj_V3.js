const prompt = require("prompt-sync")({ sigint: true });
const { TerminalUtils } = require("./TerminalUtils.js");
const {
    mostrarMenuInici,
    leerOpcion,
    mostrarMenuDos,
    leerInteraccioDos,
    CrearPers,
    luchar,
    actualizarEstadisticas,
    verEstadisticas,
    resetearEstadisticas
} = require("funciones");

let personajeActual = null; // personaje actual

// --- Selección inicial de personaje ---
mostrarMenuInici();
personajeActual = leerOpcion(4); // devuelve un objeto de clase personaje

// --- Bucle principal de interacción ---
let salir = false;
do {
    console.clear();
    mostrarMenuDos(personajeActual); // Mostrar menú de interacción

    let interact = leerInteraccioDos(4); // Elegir acción (1-4)

    switch (interact) {

        case 1: // Crear nuevo personaje
            console.clear();
            console.log("\nCreando un nuevo personaje...");
            personajeActual = CrearPers(personajeActual); // reemplaza el actual
            resetearEstadisticas(personajeActual);        // reiniciar estadísticas
            console.clear();
            console.log("Personaje creado:", personajeActual.Nom);
            prompt("\nPresiona cualquier tecla para continuar...");
            break;

        case 2: // Ver estadísticas
            console.clear();
            verEstadisticas(personajeActual);
            prompt("\nPresiona cualquier tecla para continuar...");
            break;

        case 3: // Luchar
            console.clear();
            const resultado = luchar(personajeActual); // genera enemigo internamente
            actualizarEstadisticas(personajeActual, resultado);
            prompt("\nPresiona cualquier tecla para continuar...");
            break;

        case 4: // Salir
            console.log("\nSaliendo del juego...");
            salir = true;
            break;

        default: // Opción no válida
            console.log("Opción no válida. Por favor, escoge de nuevo.");
            prompt("\nPresiona cualquier tecla para continuar...");
            break;
    }

} while (!salir);