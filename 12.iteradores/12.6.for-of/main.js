//es similar al for y sirve para lo mismo: "recorrer un array"

//recorrer un array de elementos*****
let productos = ['camisetas', 'pantalones', 'blusas'];

//producto representa a cada elemento, normalmente se pone con el mismo nombre del array pero en singular
for(let producto of productos){
    console.log(producto);
}

console.log(' ');//console que solo me vale como salto de linea

//Recorrer arreglo de objetos****
const articulos= [
    {id: 1, nombre: 'Gafas', precio: 180 },
    {id: 2, nombre: 'Limpiador de gafas', precio:10},
    {id: 3, nombre: 'Estuche', precio: 20}
];

//articulo representa a cada elemento, normalmente se pone con el mismo nombre del array pero en singular
for(let articulo of articulos){
    console.log(articulo.nombre);
}