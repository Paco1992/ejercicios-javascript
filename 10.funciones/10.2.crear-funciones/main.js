/*Las funciones son procedimientos(pasos) o instrucciones que tienen como proposito realizar una acción y son reutilizables.
Se conocen como 1. Declaracion de funcion y 2. como expresion de funcion*/

//Declaracion de funcion:

function  sumar(){//Dentro van los parametros de la funcion
    console.log(20 + 30);
}
sumar();//así llamo a la función

//Expresion de función: es similar a crear una variable
const sumarDos = function(){
    console.log(4 +3);
}
sumarDos();

/**Funciones de core de js */
// alert();
// prompt();
// parseInt();
// console.log()