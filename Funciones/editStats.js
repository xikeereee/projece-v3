const fs = require("fs");
const path = require("path");

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
    var header = data[0];
    var stats = data[1];
    var nombre = personaje.Nom;
    var victorias = "0";
    var derrotas = "0";

    if (stats) {
        var parts = stats.split(";");
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

function verEstadisticas(personaje) {
    // Convertimos espacios en _ para carpeta y archivo
    var nombreArchivo = personaje.Nom.replace(/ /g, "_");

    var carpeta = path.join(__dirname, "..", "Estadisticas", nombreArchivo);
    var archivo = path.join(carpeta, nombreArchivo + ".csv");

    // Verificar si existe el archivo
    if (!fs.existsSync(archivo)) {
        console.log("No hay estadísticas para " + personaje.Nom);
        return;
    }

    // Leer CSV
    var data = fs.readFileSync(archivo, "utf8").trim().split("\n");
    var stats = data[1]; // segunda línea, después del header
    if (!stats) {
        console.log("No hay estadísticas registradas para " + personaje.Nom);
        return;
    }

    var parts = stats.split(";");
    var nombre = parts[0];
    var victorias = parts[1];
    var derrotas = parts[2];

    console.log("Estadísticas de " + nombre + ":");
    console.log("Victorias: " + victorias);
    console.log("Derrotas: " + derrotas);
}
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