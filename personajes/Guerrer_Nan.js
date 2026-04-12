/**
 * Projecte V3 Combats Automàtics
 * Grup 4
 * Autors: Iker Moreno, Marc Beltrán, Alexander Constante
 * Construcción/exportación de objeto personaje: Guerrer_nan
 */




const { Base } = require("./Base.js");

class Guerrer_Nan extends Base {

    constructor() { // Constructor para Mostrar valores a escoger
        super();
        this.Nom = "Guerrer Nan";
        this.Vida = 90;
        this.Poder = 20;
        this.Velocitat = 5;

        this.VidaMax = this.Vida;
    }


    atack1() { // Recuperar alè
        this.modVida(this.Poder * 1.5);
    }

    atack2(enemic) { // Cop de destral
        enemic.modVida(-this.Poder);
    }
}

module.exports = Guerrer_Nan;