let movil = {
    nombre: "Samsung",
    precio: 200,
}
//si quisiera acceder a las propiedades y guardar su valor hasta antes de destructuring:
/* let movilNombre = movil.nombre;
let movilPrecio = movil.precio;
console.log(`marca del móvil ${movilNombre} y su precio es de ${movilPrecio}`); */


//con destructuring:
//entrellaves puedo sacar  las variables que quiero del objeto
let {nombre, precio} = movil; //acá directamente creo las variables de las mismas propiedades cuando las llamo en los corchetes
console.log(nombre);
console.log(precio); 

//sacar valores por defecto
let  {stock=false} = movil;
console.log(stock); //en este caso sacará un undefined por consola porque no tengo esa propiedad stock dentro del objeto. Para poder  hacerlo  tendré que añadir a stock un tipo de valor así {stock=false}. Pero si ahora  le añado al objeto la propiedad stock con valor de true? Lo que me sacará por consola es true pero sin embargo con poner el false  preveo  ese dato para que no saque el valor de indefinido.