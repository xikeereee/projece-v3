const prompt = require("prompt-sync")({ sigint: true });
const { mostrarMenuInici, leerOpcion, mostrarMenuDos, leerInteraccioDos } = require("funciones");


mostrarMenuInici();
const opcio = leerOpcion(4); // lee la opción una sola vez

mostrarMenuDos(opcio);
const interact = leerInteraccioDos();
/** 
 * 
if(leerInteraccioDos == 1 ){
    do{
        
}

*/
/*
console.log("Has triat l'opció:", opcion);
*/

// Aquí puedes pasar 'opcion' a otra función
// por ejemplo ejecutarAccion(opcion)

