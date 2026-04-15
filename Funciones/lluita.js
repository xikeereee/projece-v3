/**
 * Projecte V3 Combats Automàtics
 * Grup 4
 * Autors: Iker Moreno, Marc Beltrán, Alexander Constante
 * Script de combate
 */



const prompt = require("prompt-sync")({ sigint: true });
const { TerminalUtils } = require("../terminalUtils/TerminalUtils");
const { escribirTextoAnimado } = require("../terminalUtils/animaciones");
const { Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja } = require("../personajes/index.js");
const { actualizarEstadisticas } = require("./editStats.js");








function generarEnemic(personajeActual) {
    const personajes = [Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja];
    let enemigo;
    do {
        const index = Math.floor(Math.random() * personajes.length);
        enemigo = new personajes[index]();
    } while (enemigo.Nom === personajeActual.Nom);
    return enemigo;
}



function barraVida(actual, max) {
    const totalBloques = 20; // tamaño de la barra
    const porcentaje = actual / max;
    const bloquesLlenos = Math.round(porcentaje * totalBloques);
    const bloquesVacios = totalBloques - bloquesLlenos;

    const barra = "█".repeat(bloquesLlenos) + "░".repeat(bloquesVacios);
    return `[${barra}] ${actual}/${max}`;
}




async function luchar(personajeActual) {
    console.clear();

    const enemic = generarEnemic(personajeActual);

    TerminalUtils.log("====================================================", "#FF0000");
    TerminalUtils.log("              ⚔️  INICI DEL COMBAT ⚔️              ", "#FFFF00");
    TerminalUtils.log("====================================================", "#FF0000");

    await escribirTextoAnimado(`Apareix un enemic: ${enemic.Nom}!`, "#FF5555");
    await TerminalUtils.espera(400);

    TerminalUtils.log(`El teu personatge: ${personajeActual.Nom}`, "#00FFAA");
    TerminalUtils.log(`Enemic: ${enemic.Nom}`, "#FF7777");
    TerminalUtils.log("-----------------------------------------------", "#FF0000");

    let atacante, defensor;

    if (personajeActual.Velocitat > enemic.Velocitat) {
        atacante = personajeActual;
        defensor = enemic;
    } else {
        atacante = enemic;
        defensor = personajeActual;
    }

    TerminalUtils.log(`Comença atacant: ${atacante.Nom}`, "#FFFF00");
    prompt("\nPrem ENTER per continuar...");

    while (personajeActual.Vida > 0 && enemic.Vida > 0) {
        console.clear();
        TerminalUtils.log(`--- TURNO DE ${atacante.Nom} ---`, "#00FFFF");

        let tirada = Math.floor(Math.random() * 100) + 1;
        let esquiva = tirada <= defensor.Velocitat;

        let atac = Math.floor(Math.random() * 2) + 1;

        if (esquiva) {
            TerminalUtils.log(`${defensor.Nom} ha esquivat l'atac!`, "#00FF00");
        } else {
            if (atac === 1) {
                atacante.atack1(defensor);
                TerminalUtils.log(`${atacante.Nom} usa ATAC 1`, "#FFAA00");
            } else {
                const cops = atacante.atack2(defensor);
                if (cops) {
                    TerminalUtils.log(`${atacante.Nom} fa ATAC 2 (${cops} cops)`, "#FF5500");
                } else {
                    TerminalUtils.log(`${atacante.Nom} usa ATAC 2`, "#FF5500");
                }
            }
        }

        // Barras de vida
        TerminalUtils.log(
            `Vida ${personajeActual.Nom}: ${barraVida(personajeActual.Vida, personajeActual.VidaMax)}`,
            "#00FFAA"
        );

        TerminalUtils.log(
            `Vida ${enemic.Nom}: ${barraVida(enemic.Vida, enemic.VidaMax)}`,
            "#FF7777"
        );

        prompt("\nPrem ENTER per continuar...");

        let temp = atacante;
        atacante = defensor;
        defensor = temp;
    }

    console.clear();
    TerminalUtils.log("===== FI DEL COMBAT =====", "#FFFF00");

    if (personajeActual.Vida > 0) {
        TerminalUtils.log("Has guanyat!", "#00FF00");
        actualizarEstadisticas(personajeActual, "victoria");
    } else {
        TerminalUtils.log("Has perdut...", "#FF0000");
        actualizarEstadisticas(personajeActual, "derrota");
    }

    personajeActual.Vida = personajeActual.VidaMax;
    enemic.Vida = enemic.VidaMax;

    prompt("\nPrem ENTER per continuar...");
}



module.exports = { generarEnemic, luchar };