/*Método reduce. Es un acumulador de los valores de los elementos del array. El primer parametro de la callback que le pasamos al  método reduce() es la función reductora y encargada de ir actualizando el acumulador y el segundo parametro es el valor inicial del acumulador que en este ejemplo es el número 0 pero el valor inicial lo podemos hacer con otro valor, por jemplo en el ejercicio 3, el valor inicial empieza en 5 . En la parte del return tendremos que acumular el valor del elemento inicial + el nuevo valor del siguiente elemento
Por ejemplo para saber el total de una compra
*/

const numeros = [5, 10, 20, 30];

let total = numeros.reduce((acumulador, valor) => acumulador + valor,0);
console.log(`el total es ${total}`);
//debugger;

/*Otra manera de hacerla más comoda es:*/ 
let acumular = (acumulador, valor)=>acumulador + valor;
let total2 = numeros.reduce(acumular, 0)
console.log(`el total2 es ${total2}`);
//debugger;

/*Con acumulador de doble. Por ejemplo en un carrito de compras y eliges 2 productos:*/
/* const acumularDobles = (acumulador, valor) => acumulador + valor*2;
let dobles = numeros.reduce(acumular, 0);// el primer valor de este parametro tiene que ver con la const acumular
console.log(`el doble del resultado es: ${dobles}`);
//debugger; */


/**Vamos a sacar el numero mayor del array (o número mayor del array) */
const compararNumero = (valor, indice) => {
    if(valor > 20){
        return valor};
    return indice;  
};
const numeroMayor = numeros.reduce(compararNumero);
console.log(`el numero mayor del array es:`, numeroMayor)
//el numero mayor del array es: 30

/*con un forech sería  un poco más de código */
const numeros2 = [10, 20, 30];
let resultado = 0;
numeros2.forEach(acumulador =>resultado += acumulador);
console.log(`el resultado es ${resultado}`); 





