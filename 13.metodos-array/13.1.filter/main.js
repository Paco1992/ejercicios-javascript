const alumnos  = [
    {id:1, nombre:'Carlos', apellido:'Sánchez', edad:27},
    {id:2, nombre:'María', apellido:'Pérez', edad:23},
    {id:3, nombre:'Víctor', apellido:'García', edad:24},
    {id:4, nombre:'Carla', apellido:'García', edad:28},
    {id:5, nombre:'Sebastián', apellido:'Serrano', edad:29},
    {id:6, nombre:'Violeta', apellido:'Hernández', edad:29},
    {id:7, nombre:'José', apellido:'Castro', edad:22},
    {id:8, nombre:'Violeta', apellido:'Sánchez', edad:25},
];

/* Llegarmeos al resultado de una manera más verbosa, porque de esta manera tenemos que usar más código. A lo que se le conoce como PARADIGMA IMPERATIVO.
En este caso hay que crear un nuevo array para poder hacer la filtración del dato que quiero extraer
 y  crear un bucle for() y pasar una condición. condicional que cuando alumnos llegue a la posicion i y el apellido sea igual a: 'García' haga un push de este apellido al nuevo array que hemos llamado filtrarApellido*/ 
/* let filtarApellido1 = [];
for(let i = 0; i < alumnos.length; i++){
    if(alumnos[i].apellido === 'García'){
        filtarApellido1.push(alumnos[i]) 
    }
}
console.log(filtarApellido1);  */

/* esto es paradigma funcional.
En filter programamos una función que predice si se cumple o no, es decir que retorna un true o false.
Filtraremos con el método filter para sacar un nuevo array del parámetro evaluado. FILTER lo que acepta es una función como parametro. Lo que se conoce como CALLBACKS: que son funciones que se mandan a llamar  dentro de otra.
La función de filter acepta tres parametros que son: valor,  índice y array pero normalmente se suele usar el valor porque es el parametro obligatorio y a dicho valor le puedo llamar de la manera que crea conveniente.

Con el método filter nos da el mismo resultado que arriba pero con menos código porque lo que hace es iterar como hace el bucle for por cada uno de los elementos que tenga nuestro array y además  va ejecuntando la siguiente funcion.

Con este método filter vamos a necesitar menos lógica porque se divide  con el filter en pequeñas funciones donde cada cosa tiene que hacer algo y además poder reutilizar la funcion en todo el código
*/

/*Función FILTER con la sintaxis antigua*/ 


const filtrarApellido = alumnos.filter(function(alumno){
    return alumno.apellido === 'Sánchez'
})
console.table(filtrarApellido);

const filtarEdad = alumnos.filter(function(alumno){
    return alumno.edad === 27;
})
console.table(filtarEdad);

const nombre = alumnos.filter(function(alumno){
    return alumno.nombre === 'José';
})
console.table(nombre);

const filtrarId = alumnos.filter(function(x){
    return x.id === 5;
});
console.table(filtrarId);


const filtrarNombreYApellido = alumnos.filter(function(x){
    return x.nombre === 'Violeta' || x.apellido === 'Sánchez';
})

console.table(filtrarNombreYApellido);



/*Function de FILTER con ARROW FUNCTION que se idearon en JS para ser usadas como functiones de callback*/ 
const filtrarNombreYApellido1 = alumnos.filter((x) =>{
    return x.nombre === 'Violeta' || x.apellido === 'Sánchez';
});
console.table(filtrarNombreYApellido1); 

/*A tener en cuenta que cuando devolvemos un solo valor se puede quitar la {, return y así queda la función con menos código*/

const filtrarEdad = alumnos.filter((valor) =>valor.edad === 29);
console.table(filtrarEdad); 

const filtrarApellido1 = alumnos.filter((porapellido)=>porapellido.apellido === 'Serrano');
console.table(filtrarApellido1); 

const alumnosMenores = alumnos.filter( (años) => años.edad < 25 );
console.table(alumnosMenores);  

/*otra forma de hacer separando las funciones*/ 
const mayores = años => años.edad >25;
const alumnosMayores = alumnos.filter(mayores);
console.table(alumnosMayores); 

/*Parámetros opcionales para FILTER por ejemplo para sacar los elementos repetidos de un array.*/ 
/*Si tenemos un array de numeros y hay numeros(precios, nombres, etc) repetidos podemos sacar los numeros repetidos usando filter  usando sus tres parametros que son el 1: elemento(valor), 2: posicion del elemento(índice) y  3: el array en si. 
Esta funcion nos va a decir si la posicion que ocupa la posicion del elemento es la misma que si usamos un indexOf(). */


const arrayDeNumeros = [1, 2, 3, 4, 3, 1, 10, 20, 10, 30, 30, 30];
            
const numerosNorepetidos = arrayDeNumeros.filter((valorDelElemento, indexDeLaPosicion, arrayDeNumeros) =>{
    return indexDeLaPosicion === arrayDeNumeros.indexOf(valorDelElemento);
});
console.table(numerosNorepetidos); 
/*Como indexOf() nos retorna la primera posicion donde encuentra el elemento en el siguiente array se encontrará con elementos que están repetidos y entonces no pueden pasar al nuevo array*/

//En este caso se filtrará el número: 1, 2, 3, 4, 10, 20 y 30 en sus posiciones respectivas contando desde cero y comprobaremos que va a ir hasta el número 6