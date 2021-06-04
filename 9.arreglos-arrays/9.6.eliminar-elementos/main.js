const colores = []//array vacío y lo llenaremos más abajo con las propiedades de cada objeto. 

const color1={
    nombre: "rojo",
}
const color2={
    nombre: "verde",
}

const color3={
    nombre: "azul",
}

const color4={
    nombre: "amarillo",
}


colores.push(color1);
colores.push(color2);
colores.push(color3);
colores.push(color4);
console.table(colores);


//Con el método pop() se elimina el último elemento del arreglo
/* colores.pop(); // esto quiere decir que el artículo3 se eliminará
console.table(colores);  */
//con el método shift() se elimará al comienzo del arreglo
/* colores.shift();
console.table(colores); */

//eliminar elementos que estén en medio del array. Se utiliza el método splice(); dentro del parentisis lleva dos argumentos: el primero es desde donde voy a empezar a cortar y la segunda posición es indicar cuantos elementos quiero eliminar
colores.splice(0, 2);
console.table(colores);