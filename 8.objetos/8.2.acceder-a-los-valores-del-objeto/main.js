const articulo = {
    nombre: "Samsung",
    precio: 200,
    stock: true,
}
console.table(articulo);



/**para acceder a una sola variable del objeto: los objetos tienen lo que se llama sintaxis de punto y es que a través de dicho punto puedo entrar a su valor */

console.log(articulo.nombre);//sacará por consola Samsung 

//también podemos acceder a través del corchete aunque no es la manera más usada:
console.log(articulo['precio']);

//accediendo con destructuring...lo veremos en la cerpeta 8.6
const {nombre} = articulo;
console.log(nombre); 