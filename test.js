const { TerminalUtils } = require("terminalutils");

async function main() {
    let missatge = "Bienvenido Jugador 1";
    for(let letras of missatge){
        TerminalUtils.write(letras)
        await TerminalUtils.espera(35)
    }

}

main()