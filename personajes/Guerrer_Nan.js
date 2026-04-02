const { Base } = require("./Base.js");

class Guerrer_Nan extends Base{ 
    
    constructor(){ // Constructor para Mostrar valores a escoger
        super();
        this.Nom = "Guerrer Nan";
        this.Vida = 90;
        this.Poder = 20;
        this.Velocitat = 5;
    }


    recuperarAle() {
        this.modVida(this.Poder * 1.5);
    }

    copDestral (enemic) {
        enemic.modVida(-this.Poder);
    }
}

module.exports = Guerrer_Nan;