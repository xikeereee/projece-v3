const { Base } = require("./Base.js");

class Guerrer_Nan extends Base{ 
    
    constructor(){ // Constructor para Mostrar valores a escoger
        super();
        this.Nom = "Guerrer Nan";
        this.Vida = 90;
        this.Poder = 20;
        this.Velocitat = 5;
    }


    atack1() {
        this.modVida(this.Poder * 1.5);
    }

    atack2(enemic) {
        enemic.modVida(-this.Poder);
    }
}

module.exports = Guerrer_Nan;