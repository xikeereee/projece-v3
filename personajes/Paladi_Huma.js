const { Base } = require("./Base.js");


class Paladi_Huma extends Base {

    constructor() { // Constructor para Mostrar valores a escoger
        super();
        this.Nom = "Paladí Humà";
        this.Vida = 75;
        this.Poder = 25;
        this.Velocitat = 10;

        this.VidaMax = this.Vida;
    }


    atack1(enemic, hacerDanyo = true) { // Atac diví
        const dany = this.Poder * 0.7;
        const cura = this.Poder * 0.25;

        if (hacerDanyo) {
            enemic.modVida(-dany);
        }

        this.modVida(cura);
    }

    atack2(enemic) { // Ultim recurs
        const VidaPropia = this.Poder * 0.5;
        const VidaContrincant = this.Poder * 1.25;

        this.modVida(-VidaPropia);
        enemic.modVida(-VidaContrincant);

    }
}

module.exports = Paladi_Huma;

