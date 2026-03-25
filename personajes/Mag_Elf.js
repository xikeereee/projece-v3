const { Base } = require("./Base.js")

class Mag_Elf extends Base {
    Vida = 40
    Poder = 25
    Velocitat = 15


    bolaFoc(enemic) {
        enemic.modVida - this.Poder;
    }

    electrocutar(enemic) {
        const Cops = Math.floor(Math.random() * 4) + 3;
        const dany = this.poder * 0.2;
    }
}
module.exports.Mag_Elf = Mag_Elf;