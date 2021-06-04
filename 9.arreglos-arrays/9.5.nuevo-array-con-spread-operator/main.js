/*Utilizar el spread operator y no los métodos de push y unshift*/ 

const articulos = []//array vacío y lo llenaremos más abajo con las propiedades de cada objeto. Es un ejemplo de cuando por ejemplo vamos al super  o hacemos la compra por Internet

const articulo1={
    nombre: "Jabón Palmolive",
    precio: 2.50
}
const articulo2={
    nombre: "Crema dental colgate",
    precio: 2
}

const articulo3={
    nombre: "Champú Pantene",
    precio: 3
}

let total;
total = [...articulos, articulo1, articulo2];
console.table(total);
total = [articulo3, ...total];// el producto se pondrá en la posicion 0
console.table(total);

