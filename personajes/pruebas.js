const Paladi_Huma = require("./Paladi_Huma.js");
const Mag_Elf = require("./Mag_Elf.js");
const Guerrer_Nan = require("./Guerrer_Nan.js");
const Arquer_Mitja = require("./Arquer_Mitja.js");




const paladi = new Paladi_Huma(75, 25, 10);
const mag = new Mag_Elf(40, 45, 15);
const guerrer = new Guerrer_Nan(90, 20, 5);
const arquer = new Arquer_Mitja(50, 30, 20);

console.log(paladi);
console.log(mag);
console.log(guerrer);
console.log(arquer);


console.log("Vida mag antes:", mag.Vida);
paladi.atacDivi(mag);
console.log("Vida mag después:", mag.Vida);


console.log("Vida paladí antes:", paladi.Vida);
mag.bolaFoc(paladi);
console.log("Vida paladí después:", paladi.Vida);

console.log("Vida guerrero antes:", guerrer.Vida);
guerrer.recuperarAle();
console.log("Vida guerrero después:", guerrer.Vida);


console.log("Vida Arquer antes:", arquer.Vida);
arquer.tirMultiple(arquer);
console.log("Vida Arquer después:", arquer.Vida);
