const prompt = require("prompt-sync")({ sigint: true });
const { Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja } = require("../personajes");


// Genera un enemigo distinto al personaje actual
function generarEnemic(personajeActual) {
    const personajes = [Paladi_Huma, Mag_Elf, Guerrer_Nan, Arquer_Mitja];
    let enemigo;
    do {
        const index = Math.floor(Math.random() * personajes.length);
        enemigo = new personajes[index]();
    } while (enemigo.Nom === personajeActual.Nom); // ahora en mayúscula
    return enemigo;
}

function luchar(personajeActual) {
    const enemic = generarEnemic(personajeActual);

    console.log("Tu personaje: " + personajeActual.Nom);
    console.log("Enemigo: " + enemic.Nom);

    let atacante, defensor;

    // Decidir quién empieza
    if (personajeActual.Velocitat > enemic.Velocitat) {
        atacante = personajeActual;
        defensor = enemic;
    } else {
        atacante = enemic;
        defensor = personajeActual;
    }

    console.log("Empieza atacando: " + atacante.Nom);

    // Tirada de esquiva
    let esquivacion = Math.floor(Math.random() * 100) + 1;
    console.log("Tirada esquiva: " + esquivacion);
    prompt();

    // Determinar si esquiva
    let esquiva = esquivacion <= defensor.Velocitat;

    // Elegir ataque
    let atac = Math.floor(Math.random() * 2) + 1;

    if (atac === 1) {
        atacante.atack1(defensor, !esquiva);
        console.log(atacante.Nom + " usa ataque 1");
    } else {
        atacante.atack2(defensor, !esquiva);
        console.log(atacante.Nom + " usa ataque 2");
    }

    // Mensaje de esquiva
    if (esquiva) {
        console.log(defensor.Nom + " ha esquivado el daño!");
    }

    // Mostrar vidas finales
    console.log("Vida: " + atacante.Nom + " = " + atacante.Vida);
    console.log("Vida: " + defensor.Nom + " = " + defensor.Vida);

    prompt();
}
    /*
    else if (personajeActual.Velocitat < enemic.Velocitat){
        torn = enemic
        def = personajeActual
        console.log("TUPU ME ESTA ATACANDO AL BICHO!!!!!!!!!!!!!!!!!")
        const atac = Math.floor(Math.random() * 2) + 1;
        if (atac === 1) {
            torn.atack1(def)
            console.log("Vida: " + torn.Nom + "=" + torn.Vida)
            console.log("Vida: " + def.Nom + "=" + def.Vida)
            awebo = ("🍑🐗")
        } else {
            torn.atack2(def)
            console.log("Vida: " + torn.Nom + "=" + torn.Vida)
            console.log("Vida: " + def.Nom + "=" + def.Vida)
            awebo = ("tupuⓂ️Ⓜ️")

        }
        console.log(awebo)
        prompt()
    }
*/
/*
// Lucha y pregunta al usuario quién ganó
function luchar(personajeActual) {
    const enemic = generarEnemic(personajeActual);
    
    console.log("Tu personaje: " + personajeActual.Nom);
    console.log("Enemigo: " + enemic.Nom);
    
    console.log("\nQuién ha ganado?");
    console.log("1. " + personajeActual.Nom);
    console.log("2. " + enemic.Nom);
    
    let opcion;
    do {
        opcion = parseInt(prompt("> "));
    } while (opcion !== 1 && opcion !== 2);
    
    let resultado;
    if (opcion === 1) {
        console.log("Has guanyat amb " + personajeActual.Nom);
        resultado = "victoria";
    } else {
        console.log("Has perdut contra " + enemic.Nom);
        resultado = "derrota";
    }
    
    return resultado;
}
*/



module.exports = { generarEnemic, luchar };