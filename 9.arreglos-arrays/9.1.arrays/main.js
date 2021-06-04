/*Agrupa elementos y usa la sintaxis de llaves [] y no se usan los corchetes como en los objetos{} */

const alumnos = [ "Natalia", "Javi", "Paco", "David", "Josue", "Alex", "Jeampierre", "Cristian", "Yeison", "Yvonne", "Silvia", "Andrés", "Isa"];
console.log(alumnos);
//con los arreglos tendré posición y su valor


//otras forma de sintaxis para crear un array es: 
const alumnos2 = new Array("Carlos", "Camilo", "Violeta", "Gabriela" );
console.log(alumnos2);

//también pueden tener varios datos dentro de un mismo array 
const alumnos3 = [ "Natalia", "Javi", "Paco", "David", "Josue", "Alex", "Jeampierre", "Cristian", "Yeison", "Yvonne", "Silvia", "Andrés", "Isa", [25, 16, 26, 22, 28, 24, 24, 24, 25, 22, 21, 20, 19, 23, 27 ]];
console.table(alumnos3);
document.querySelector('h2').innerHTML = `el/la alumnx ${alumnos3[5]} tiene: ${alumnos3[13][0]} años`;


/*ACCEDER A LOS ARRAYS:***************/
console.log(alumnos[5]); //accedo a Alex
console.log(alumnos2[2]);//accedo a violeta
console.log(alumnos3[13]);//accedo
console.log(alumnos3[13][3]);//accedo al número 22 que está en la posición del array 3