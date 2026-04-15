/**
 * Projecte V3 Combats Automàtics
 * Grup 4
 * Autors: Iker Moreno, Marc Beltrán, Alexander Constante
 * Script MAIN
 */

const { TerminalUtils } = require("./terminalUtils/TerminalUtils");
const prompt = require("prompt-sync")({ sigint: true });
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
} = require("./funciones");


//------------------------------>> MAIN <<------------------------------\\

async function main() {

    let personajeActual = null;

    // 🎬 Pantalla inicial
    await mostrarMenuInici();
    personajeActual = await leerOpcion(4);

    let salir = false;

    do {
        console.clear();

        await mostrarMenuDos(personajeActual);

        let interact = await leerInteraccioDos(4);

        switch (interact) {

            case 1:
                console.clear();
                TerminalUtils.log("\nCreando un nuevo personaje...", "#00FFFF");

                personajeActual = CrearPers(personajeActual);
                resetearEstadisticas(personajeActual);

                console.clear();
                TerminalUtils.log("Personaje creado: " + personajeActual.Nom, "#00FFAA");
                prompt("\nPresiona cualquier tecla para continuar...");
                break;

            case 2:
                console.clear();
                TerminalUtils.log("📊 Estadísticas del personaje", "#FFFF00");
                verEstadisticas(personajeActual);
                prompt("\nPresiona cualquier tecla para continuar...");
                break;

            case 3:
                console.clear();
                TerminalUtils.log("⚔️  Iniciando combate...", "#FF4444");
                luchar(personajeActual);
                prompt("\nPresiona cualquier tecla para continuar...");
                break;

            case 4:
                TerminalUtils.log("\nSaliendo del juego...", "#FF0000");
                salir = true;
                break;

            default:
                TerminalUtils.log("Opción no válida.", "#FF0000");
                prompt("\nPresiona cualquier tecla para continuar...");
                break;
        }

    } while (!salir);
}

// ARRANCAR
main();
