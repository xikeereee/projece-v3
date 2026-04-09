const { Base } = require("./Base.js");

class Arquer_Mitja extends Base {

    constructor() { // Constructor para Mostrar valores a escoger
        super();
        this.Nom = "Arquer Mitja";
        this.Vida = 50;
        this.Poder = 30;
        this.Velocitat = 20;
    }


    atack1(enemic) {
        enemic.modVida(-this.Poder);
    }


    atack2(enemic) {
        const cops = Math.floor(Math.random() * 3) + 1;
        const dany = this.Poder * 0.5;

        for (let i = 0; i < cops; i++) {
            do {
                enemic.modVida(-dany)
            }
            while (i === cops)
        }
    }
}

module.exports = Arquer_Mitja;