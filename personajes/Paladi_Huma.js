const { Base } = require("./Base.js");


class Paladi_Huma extends Base {

    constructor() { // Constructor para Mostrar valores a escoger
        super();
        this.Nom = "Paladí Humà";
        this.Vida = 75;
        this.Poder = 25
        this.Velocitat = 10
    }


    atack1(enemic) {
        const dany = this.Poder * 0.7;
        const cura = this.Poder * 0.25;

        enemic.modVida(-dany);
        this.modVida(cura);
    }

    atack2(enemic) {
        const VidaPropia = this.Poder * 0.5;
        const VidaContrincant = this.Poder * 1.25;

        this.modVida(-VidaPropia);
        enemic.modVida(-VidaContrincant);

    }
}

module.exports = Paladi_Huma;

