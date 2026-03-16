const prompt = require("prompt-sync")({ sigint: true });

function mostrarMenuInici() {
    console.log("+--------- Benvingut a Combats automàtics ---------+ \n")
    console.log("Pressiona cualsevol tecla per a continuar... \n")
    prompt()
    
    console.clear()
    
    console.log("+--------- Has de triar un nou personatge ---------+ \n")
    
    console.log("1. Paladí Humà")
    console.log("2. Mag elf")
    console.log("3. Guerrer nan")
    console.log("4. Arquer mitjà \n")
}

function leerOpcion() {
    const opcio  = prompt("> ")
    return opcio;
}
module.exports = { mostrarMenuInici, leerOpcion }; // exportando