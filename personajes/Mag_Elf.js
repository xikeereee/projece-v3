const { Base } = require("./Base.js")

class Mag_Elf extends Base {

    constructor() { // Constructor para Mostrar valores a escoger
        super();
        this.Nom = "Mag Elf";
        this.Vida = 40;
        this.Poder = 25;
        this.Velocitat = 15;

        this.VidaMax = this.Vida;
    }


    atack1(enemic) { // Bola de foc
        enemic.modVida(-this.Poder);
    }

    atack2(enemic) { // Electrocutar 
        const cops = Math.floor(Math.random() * 4) + 3; // entre 3 y 6
        const dany = this.Poder * 0.2;

        for (let i = 0; i < cops; i++) {
            enemic.modVida(-dany);
        }

        return cops;
    }
}
module.exports = Mag_Elf;