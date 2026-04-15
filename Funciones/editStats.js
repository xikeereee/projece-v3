/**
 * Projecte V3 Combats Automàtics
 * Grup 4
 * Autors: Iker Moreno, Marc Beltrán, Alexander Constante
 * Estadísticas y manipulación de datos
 */

const fs = require("fs");
const path = require("path");
const { TerminalUtils } = require("../terminalUtils/TerminalUtils");






/**
 * Actualiza o crea estadísticas del personaje en CSV
 */
function actualizarEstadisticas(personaje, resultado) {
    const nombreArchivo = personaje.Nom.replace(/ /g, "_");

    const carpeta = path.join(__dirname, "..", "Estadisticas", nombreArchivo);
    const archivo = path.join(carpeta, nombreArchivo + ".csv");

    if (!fs.existsSync(carpeta)) fs.mkdirSync(carpeta, { recursive: true });

    if (!fs.existsSync(archivo)) {
        fs.writeFileSync(archivo, "Personatge;Victories;Derrotes\n", "utf8");
    }




    const data = fs.readFileSync(archivo, "utf8").trim().split("\n");
    let header = data[0];
    let stats = data[1];

    let nombre = personaje.Nom;
    let victorias = "0";
    let derrotas = "0";





    if (stats) {
        let parts = stats.split(";");
        nombre = parts[0];
        victorias = parts[1];
        derrotas = parts[2];
    }



    if (resultado === "victoria") {
        victorias = (parseInt(victorias) + 1).toString();
    } else if (resultado === "derrota") {
        derrotas = (parseInt(derrotas) + 1).toString();
    }



    fs.writeFileSync(
        archivo,
        header + "\n" + nombre + ";" + victorias + ";" + derrotas,
        "utf8"
    );




    
    TerminalUtils.log("===============================================", "#00FF00");
    TerminalUtils.log("Estadístiques actualitzades", "#00FF00");
    TerminalUtils.log(`Personatge: ${personaje.Nom}`, "#FFFFFF");
    TerminalUtils.log(`Victòries: ${victorias} | Derrotes: ${derrotas}`, "#FFFFFF");
    TerminalUtils.log("===============================================", "#00FF00");
}








/**
 * Muestra estadísticas del personaje
 */
function verEstadisticas(personaje) {
    const nombreArchivo = personaje.Nom.replace(/ /g, "_");

    const carpeta = path.join(__dirname, "..", "Estadisticas", nombreArchivo);
    const archivo = path.join(carpeta, nombreArchivo + ".csv");

    
    if (!fs.existsSync(archivo)) {
        TerminalUtils.log(`No hi ha estadístiques per ${personaje.Nom}`, "#FF0000");
        return;
    }





    const data = fs.readFileSync(archivo, "utf8").trim().split("\n");
    const stats = data[1];

    if (!stats) {
        TerminalUtils.log(`No hi ha estadístiques registrades per ${personaje.Nom}`, "#FF0000");
        return;
    }





    const parts = stats.split(";");
    const nombre = parts[0];
    const victorias = parts[1];
    const derrotas = parts[2];

    TerminalUtils.log("===============================================", "#00FFFF");
    TerminalUtils.log(`Estadístiques de ${nombre}`, "#00FFFF");
    TerminalUtils.log(`Victòries: ${victorias}`, "#00FF00");
    TerminalUtils.log(`Derrotes: ${derrotas}`, "#FF5555");
    TerminalUtils.log("===============================================", "#00FFFF");
}










/**
 * Resetea estadísticas del personaje
 */
function resetearEstadisticas(personaje) {
    const nombreArchivo = personaje.Nom.replace(/ /g, "_");

    const carpeta = path.join(__dirname, "..", "Estadisticas", nombreArchivo);
    const archivo = path.join(carpeta, nombreArchivo + ".csv");

    if (!fs.existsSync(carpeta)) fs.mkdirSync(carpeta, { recursive: true });





    
    const contenidoInicial =
        "Personatge;Victories;Derrotes\n" +
        personaje.Nom + ";0;0\n";

    fs.writeFileSync(archivo, contenidoInicial, "utf8");

    TerminalUtils.log("===============================================", "#FFAA00");
    TerminalUtils.log(`Estadístiques resetejades per ${personaje.Nom}`, "#FFAA00");
    TerminalUtils.log("===============================================", "#FFAA00");
}

module.exports = { actualizarEstadisticas, verEstadisticas, resetearEstadisticas };
