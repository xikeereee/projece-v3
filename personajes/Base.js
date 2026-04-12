/**
 * Projecte V3 Combats Automàtics
 * Grup 4
 * Autors: Iker Moreno, Marc Beltrán, Alexander Constante
 * Construcción/exportación de objeto personaje: Base
 */



class Base {
    Nom
    Vida
    Poder
    Velocitat


    constructor(Nom, Vida, Poder, Velocitat) {
        this.Nom = Nom;
        this.Vida = Vida;
        this.VidaMax = Vida;
        this.Poder = Poder;
        this.Velocitat = Velocitat;
    }

    modVida(quantitat) {
        this.Vida += quantitat; // Mod vida (positiva o negativa)

        if (this.Vida < 0) {
            this.Vida = 0; // Evitar que la vida baje a 0
        }

        if (this.Vida > this.VidaMax) {
            this.Vida = this.VidaMax // Evita que la vida supere la vida máxima
        }
    }
};

module.exports.Base = Base;