const { Base } = require("./Base");


class Paladi_Huma extends Base {
    Vida = 75
    Poder = 25
    Velocitat = 10


atacDivi(enemic) {
    const dany = this.Poder * 0.7;
    const cura = this.Poder * 0.25;

    enemic.modVida - dany;
    this.modVida(cura);
}
}

module.exports.Paladi_Huma = Paladi_Huma;
