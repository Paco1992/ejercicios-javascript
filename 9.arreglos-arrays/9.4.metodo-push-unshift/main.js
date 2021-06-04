/*Los métodos push y unshift añaden elementos al array. El push va añadiendoal final pero el unshift añade el elemento en la primera posición del array */

const articulos = []//array vacío y lo llenaremos más abajo con las propiedades de cada objeto. Es un ejemplo de cuando por ejemplo vamos al super  o hacemos la compra por Internet

const articulo1={
    nombre: "Jabón Palmolive",
    precio: 2.50,
}
console.log(articulos); //acá no aparece nada en consola porque no he metido nada al array

//para ir llenando el array vacío utilizo el método push: 
articulos.push(articulo1);
console.table(articulos);

const articulo2={
    nombre: "Crema dental colgate",
    precio: 2,
}
articulos.push(articulo2, articulo1);
console.table(articulos);



const articulo3={
    nombre: "Champú Pantene",
    precio: 3,
}
articulos.unshift(articulo3);
console.table(articulos);
