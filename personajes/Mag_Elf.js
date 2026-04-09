const { Base } = require("./Base.js")

class Mag_Elf extends Base { 
    
    constructor(){ // Constructor para Mostrar valores a escoger
        super();
        this.Nom = "Mag Elf";
        this.Vida = 40;
        this.Poder = 25;
        this.Velocitat = 15;
    }


    atack1(enemic) {
        enemic.modVida(-this.Poder);
    }

    atack2(enemic) {
        const cops = Math.floor(Math.random() * 4) + 3;
        const dany = this.Poder * 0.2;
    


for(let i = 0; i < cops; i++) {
    enemic.modVida(-dany)
}
}
}
module.exports = Mag_Elf;