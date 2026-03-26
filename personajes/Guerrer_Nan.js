const { Base } = require("./Base.js");

class Guerrer_Nan extends Base{
    Vida = 90
    Poder = 20
    Velocitat = 5


    recuperarAle() {
        this.modVida(this.Poder * 1.5);
    }

    copDestral (enemic) {
        enemic.modVida - this.Poder;
    }
}

module.exports.Guerrer_Nan = Guerrer_Nan;