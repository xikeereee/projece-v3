const { Base } = require("./Base.js")

class Mag_Elf extends Base {
    Vida = 40
    Poder = 25
    Velocitat = 15


    bolaFoc(enemic) {
        enemic.modVida(-this.Poder);
    }

    electrocutar(enemic) {
        const cops = Math.floor(Math.random() * 4) + 3;
        const dany = this.Poder * 0.2;
    


for(let i = 0; i < cops; i++) {
    enemic.modVida(-dany)
}
}
}
module.exports = Mag_Elf;