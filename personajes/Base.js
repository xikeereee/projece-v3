class Base {

    constructor(nom, TotalVida, Poder) {
        this.nom = nom;
        this.TotalVida = TotalVida;
        this.vida = TotalVida;
        this.poder = Poder;
    }

    Dany(cuantitat) {
        this.vida -= cuantitat;
        if(this.vida < 0) {
            this.vida = 0;
        }
    }

    Curar(cuantitat) {
        this.vida += cuantitat;
        if (this.vida > this.TotalVida) {
            this.vida = this.TotalVida;
        }
    }
}