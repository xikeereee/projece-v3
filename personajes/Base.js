class Base {

    Vida
    Poder
    Velocitat


    constructor(Vida, Poder, Velocitat) {
        this.Vida = Vida
        this.VidaMax = VidaMax
        this.Poder = Poder
        this.Velocitat = Velocitat
    }

    modVida(quantitat) {
        this.vida += quantitat;

        if(this.vida < 0) {
            this.vida = 0
        }
        if (this.vida > this.VidaMax) {
            this.vida = this.VidaMax;
        }
    }
};

module.exports.Base = Base;