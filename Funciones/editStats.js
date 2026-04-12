/**
 * Projecte V3 Combats Automàtics
 * Grup 4
 * Autors: Iker Moreno, Marc Beltrán, Alexander Constante
 * Estadísticas y manipulación de datos
 */


const fs = require("fs");
const path = require("path");





/**
 * Entran las variables personaje y resultado, crea/modifica archivos, de tipo CSV, de cada personaje,
 * se navega/crea los directorio.
 * @param {*} personaje 
 * @param {*} resultado 
 */
function actualizarEstadisticas(personaje, resultado) {
    // Convertimos espacios en _ para carpeta y archivo
    const nombreArchivo = personaje.Nom.replace(/ /g, "_");

    // Carpeta y archivo del personaje
    const carpeta = path.join(__dirname, "..", "Estadisticas", nombreArchivo);
    const archivo = path.join(carpeta, nombreArchivo + ".csv");

    // Si no existe la carpeta, crearla
    if (!fs.existsSync(carpeta)) fs.mkdirSync(carpeta, { recursive: true });

    // Si no existe el archivo, crearlo con valores iniciales
    if (!fs.existsSync(archivo)) {
        fs.writeFileSync(archivo, "Personatge;Victories;Derrotes\n", "utf8");
    }

    // Leer CSV actual
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

    // Actualizar según resultado
    if (resultado === "victoria") {
        victorias = (parseInt(victorias) + 1).toString();
    } else if (resultado === "derrota") {
        derrotas = (parseInt(derrotas) + 1).toString();
    }

    // Guardar de nuevo
    fs.writeFileSync(archivo, header + "\n" + nombre + ";" + victorias + ";" + derrotas, "utf8");

    console.log("Estadísticas actualizadas: " + personaje.Nom + " - Victorias: " + victorias + ", Derrotas: " + derrotas);
}










/**
 * Con el personaje escogido se hace lectura de las estadisticas de cada personaje,
 * se repasa la existencia del archivo así como se procede a su lectura
 * @param {*} personaje 
 * @returns 
 */
function verEstadisticas(personaje) {
    // Convertimos espacios en _ para carpeta y archivo
    let nombreArchivo = personaje.Nom.replace(/ /g, "_");

    let carpeta = path.join(__dirname, "..", "Estadisticas", nombreArchivo);
    let archivo = path.join(carpeta, nombreArchivo + ".csv");

    // Verificar si existe el archivo
    if (!fs.existsSync(archivo)) {
        console.log("No hay estadísticas para " + personaje.Nom);
        return;
    }

    // Leer CSV
    let data = fs.readFileSync(archivo, "utf8").trim().split("\n");
    let stats = data[1]; // segunda línea, después del header
    if (!stats) {
        console.log("No hay estadísticas registradas para " + personaje.Nom);
        return;
    }

    let parts = stats.split(";");
    let nombre = parts[0];
    let victorias = parts[1];
    let derrotas = parts[2];

    console.log("Estadísticas de " + nombre + ":");
    console.log("Victorias: " + victorias);
    console.log("Derrotas: " + derrotas);
}







/**
 * Esta función es capaz tanto de crear un archivo (nuevamente) si no existiese y 
 * reescribe en blanco los valores del personaje pasado por esta función
 * @param {*} personaje 
 */
function resetearEstadisticas(personaje) {
    // Reemplaza espacios por _ para carpeta y archivo
    const nombreArchivo = personaje.Nom.replace(/ /g, "_");

    const carpeta = path.join(__dirname, "..", "Estadisticas", nombreArchivo);
    const archivo = path.join(carpeta, nombreArchivo + ".csv");

    // Si no existe la carpeta, crearla
    if (!fs.existsSync(carpeta)) fs.mkdirSync(carpeta, { recursive: true });

    // Crear o reescribir el archivo con valores iniciales
    const contenidoInicial = "Personatge;Victories;Derrotes\n" +
        personaje.Nom + ";0;0\n";

    fs.writeFileSync(archivo, contenidoInicial, "utf8");

    console.log("Estadisticas reseteadas para: " + personaje.Nom);
}



module.exports = { actualizarEstadisticas, verEstadisticas, resetearEstadisticas };