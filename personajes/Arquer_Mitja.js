const { Base } = require("./Base.js");

class Arquer_Mitja extends Base{
    Vida = 50
    Poder = 30
    Velocitat = 20


    tirPrecis(enemic) {
        enemic.modVida - this.Poder;
    }


    tirMultiple(enemic) {
        const cops = Math.floor(Math.random * 3) + 1;
        const dany = this.poder * 0.5;
    



for(let i = 0; i < cops; i++) {
    enemic.modVida(-dany)
}
}
}

module.exports = Arquer_Mitja;