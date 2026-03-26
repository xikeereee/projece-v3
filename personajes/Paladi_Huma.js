const { Base } = require("./Base.js");


class Paladi_Huma extends Base {
    Vida = 75
    Poder = 25
    Velocitat = 10


atacDivi(enemic) {
    const dany = this.Poder * 0.7;
    const cura = this.Poder * 0.25;

    enemic.modVida(-dany);
    this.modVida(cura);
}

ultimRecurs(enemic) {
    const VidaPropia = this.Poder * 0.5;
    const VidaContrincant = this.Poder * 1.25;

    this.modVida(-VidaPropia);
    enemic.modVida(-VidaContrincant);

}
}

module.exports = Paladi_Huma;

