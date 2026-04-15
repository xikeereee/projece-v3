/**
 * Recomendación para usar animaciones de manera más ordenada
 */


const { TerminalUtils } = require("../terminalUtils/TerminalUtils");

async function escribirTextoAnimado(texto, color) {
    for (let i = 0; i < texto.length; i++) {
        TerminalUtils.write(texto[i], color);
        await TerminalUtils.espera(40);
    }
    console.log("");
}

module.exports = { escribirTextoAnimado };