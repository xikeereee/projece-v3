class Base {

    Vida
    Poder
    Velocitat


    constructor(Vida, Poder, Velocitat) {
        this.Vida = Vida;
        this.VidaMax = Vida;
        this.Poder = Poder;
        this.Velocitat = Velocitat;
    }

    modVida(quantitat) {
        this.Vida += quantitat;

        if(this.Vida < 0) {
            this.Vida = 0;
        }

        if(this.Vida > this.VidaMax) {
            this.Vida = this.VidaMax
        }
    }
};

module.exports.Base = Base;