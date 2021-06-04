/*Agregar una propiedad cuando el código este en ejecución:*/ 

const elemento = {
    nombre: "Iphone",
    precio: 1000,
    stock: true,
}
console.table(elemento);
console.log('++++++++++++++++++++++++++')

//en este punto ya estaría fuera de la ejecución del código por lo tanto para agregar una nueva propiedad doy:
elemento.garantia = "2 años";

console.table(elemento);
console.log('+++++++++o+++++++++++++++') 

/*Eliminar propiedades del objeto*/ 
delete elemento.precio;
console.table(elemento); 