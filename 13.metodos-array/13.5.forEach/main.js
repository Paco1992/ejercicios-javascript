
/*FOREACH es un método for pero mejorado y sirve para recorrer un array. No va a crear un array nuevo al contrario de  map, reduce o filter. El foreach  en la funcion de callback puede recibir como parametro:  el valor, el index y/o el array en sí  */

const animales = [
    {id:1, nombre: 'lilo' , tipo: 'gato' , edad: 1 },
    {id:2, nombre: 'leo' , tipo: 'perro' , edad: 2},
    {id:3, nombre: 'lala', tipo: 'conejo', edad: 1},
    {id:4, nombre: 'boby', tipo:'perro' , edad: 3 },
    {id:5, nombre: 'canela', tipo: 'gato', edad: 4 },
    {id:6, nombre: 'nala', tipo: 'perro' , edad: 5},
];

animales.forEach((valor) => console.log(valor.nombre + ` es un ${valor.tipo}`));

console.log('------------------------------------')

animales.forEach((animal) => console.log(animal.edad))

/*Si quisieramos contar cuantas propiedades tipo hay, es decir, contar cuántos gatos, cuántos perros hay y crear con ellos un objeto lo podríamos hacer así:
1- Declaramos una variable que podríamos llamar por ejemplo tipoAnimal y será un objeto vacío(linea28*)
2-Realizamos el forEach pasando un valor en su parametro y lo podemos nombrar como queramos(linea29*)
3- Ponemos la condición de if para saber si tipoAnimal tiene dentro el tipo de animal repetido(linea30*), entonces:
4-tipoAnimal[animal.tipo] le vamos incrementando de uno(linea31*)
5- (lo hacemos con ELSE)  o si del tipoAnimal solo hay uno, lo igualamos con el numero 1 al ser el unico dentro del array.
6- por consola saldrá que hay 2 gatos, 3 perros  y 1 conejo. Por lo tanto el gato y perro pasan por if y el conejo por else.
*/ 


let tipoAnimal = {}
animales.forEach((animal)=>{
    if(tipoAnimal[animal.tipo]){
        tipoAnimal[animal.tipo]++
    }else{
        tipoAnimal[animal.tipo] = 1;
    }
});
console.log(tipoAnimal);

