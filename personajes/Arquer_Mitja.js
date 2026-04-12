/**
 * Projecte V3 Combats Automàtics
 * Grup 4
 * Autors: Iker Moreno, Marc Beltrán, Alexander Constante
 * Construcción/exportación de objeto personaje: Aquer_Mitja
 */




const { Base } = require("./Base.js");

class Arquer_Mitja extends Base {

    constructor() { // Constructor para Mostrar valores a escoger
        super();
        this.Nom = "Arquer Mitja";
        this.Vida = 50;
        this.Poder = 30;
        this.Velocitat = 20;

        this.VidaMax = this.Vida;
    }


    atack1(enemic) { // Tir precís
        enemic.modVida(-this.Poder);
    }


    atack2(enemic) { // Tir multiple
        const cops = Math.floor(Math.random() * 3) + 1;
        const dany = this.Poder * 0.5;

        for (let i = 0; i < cops; i++) {
            enemic.modVida(-dany);
        }

        return cops;
    }

}

module.exports = Arquer_Mitja;