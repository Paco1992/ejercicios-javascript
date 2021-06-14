/** El métod FIND recibe como parametros en la función de callback: el valor, el indice y el array que estamos recorriendo
 *esta funcíón deberá recibir true or false. En caso de ser true va a parar la busqueda del array y el objecto con dicho valor
*/
/*La diferencia de FIND con FILTER es que find nos devolverá el valor del primer valor que se encuentre, es decir si hay más elementos dentro del array con la propiedad que le estoy pidiendo solo me devolverá el primero que se encuentre.En cambio, filter nos creará un nuevo array con los elementos que se le solicite. Ver ejemplo de manzana, este valor aparece dos veces: en el id 1 y el id 5 pero en este caso al aplicar FIND solo me devuelve la posicion del id 1*/ 

const frutas = [
    {id:1 , nombre:'manzana' , color: 'rojo' },
    {id:2 , nombre:'pera' , color: 'verde' },
    {id:3 , nombre:'plátano' , color: 'amarillo' },
    {id:4, nombre:'uva' , color: 'morado' },
    {id:5, nombre:'manzana' , color: 'rojo' },
]

const buscarFruta = (valor) => valor.nombre === 'uva'

const frutaEncontrada = frutas.find(buscarFruta);
console.table(frutaEncontrada);

/*Otra manera de sintaxis es:*/
const buscarFruta2 = ({nombre}) => nombre === 'manzana' 

const frutaEncontrada2 = frutas.find(buscarFruta2);
console.table(frutaEncontrada2);