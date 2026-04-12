/**
 * Projecte V3 Combats Automàtics
 * Grup 4
 * Autors: Iker Moreno, Marc Beltrán, Alexander Constante
 * Script de combate
 */



const prompt = require("prompt-sync")({ sigint: true });
const { Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja } = require("../personajes/index.js");
const { actualizarEstadisticas } = require("./editStats.js");






/**
 * Cambia un enemigo distinto al actual (o si no existe ninguno te lo genera)
 * @param {*} personajeActual 
 * @returns 
 */
function generarEnemic(personajeActual) {
    const personajes = [Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja];
    let enemigo;
    do {
        const index = Math.floor(Math.random() * personajes.length);
        enemigo = new personajes[index]();
    } while (enemigo.Nom === personajeActual.Nom);
    return enemigo;
}





/**
 * Mediante tu personaje actual se lleva a cabo el combate, entra en un bucle hasta que la 
 * vida, tanto del personaje del usuario como del rival bajen de 0
 * @param {*} personajeActual 
 */
function luchar(personajeActual) {
    const enemic = generarEnemic(personajeActual);

    console.log("Tu personaje: " + personajeActual.Nom);
    console.log("Enemigo: " + enemic.Nom);

    let atacante, defensor;

    // Definición del primer jugador
    if (personajeActual.Velocitat > enemic.Velocitat) {
        atacante = personajeActual;
        defensor = enemic;
    } else {
        atacante = enemic;
        defensor = personajeActual;
    }

    console.log("Empieza atacando: " + atacante.Nom);
    prompt();







    // Bucle de combate
    while (personajeActual.Vida > 0 && enemic.Vida > 0) {
        console.log("\n--- TURNO DE " + atacante.Nom + " ---");




        // Dado para poder esquivar
        let tirada = Math.floor(Math.random() * 100) + 1;
        let esquiva = tirada <= defensor.Velocitat;





        // Elegir ataque
        let atac = Math.floor(Math.random() * 2) + 1;

        if (esquiva) {
            console.log(defensor.Nom + " ha esquivado el ataque!");
        } else {
            if (atac === 1) {
                atacante.atack1(defensor);
                console.log(atacante.Nom + " usa ataque 1");
            } else {
                const cops = atacante.atack2(defensor); // Mostrar nombre de golpes
                if (cops) {
                    console.log(atacante.Nom + " hace el ataque 2 (" + cops + " veces)");

                } else {
                    console.log(atacante.Nom + " usa ataque 2");
                }
            }

        }



        // Mostrar vidas
        console.log("Vida " + atacante.Nom + ": " + atacante.Vida);
        console.log("Vida " + defensor.Nom + ": " + defensor.Vida);

        prompt();



        // Cambiar turnos
        let temp = atacante;
        atacante = defensor;
        defensor = temp;
    }




    // Muestra de resultados
    console.log("\n===== FIN DEL COMBATE =====");
    if (personajeActual.Vida > 0) {
        console.log("Has ganado!");
        actualizarEstadisticas(personajeActual, "victoria");
    } else {
        console.log("Has perdido...");
        actualizarEstadisticas(personajeActual, "derrota");
    }





    //Resetear vidas para volver a jugar si se quiere
    personajeActual.Vida = personajeActual.VidaMax;
    enemic.Vida = enemic.VidaMax;
    prompt();
}




module.exports = { generarEnemic, luchar };