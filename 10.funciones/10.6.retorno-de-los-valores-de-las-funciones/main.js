function sumar(a, b) {
    return a+b;//ya no pongo el console sino la palabra return
}
const total = sumar(2,3);//al poner el return siempre debo almacenar el dato de los argumentos en una variable
console.log(total);

//ejemplo para añadir producto:(por ejemplo para aplicar el iva del 4%)
let compra=0;
function seleccionar(producto){
    return compra +=producto;//+=  es porque es el acumulativo de lo que vaya llevando de los productos  más la suma del valor del producto seleccionado   
}
let acumular= seleccionar(500);
acumular= seleccionar(500);
console.log(acumular);

function iva(compra){
    return compra * 1.04;//ó (1+(4/100)) que como resultado es 1.04
}
let  acumuladoImpuesto = iva(compra);
console.log(`el valor del total de la compra con IVA es: ${acumuladoImpuesto}`); 
//=============================================================
console.log('----------')
//ejemplo para decrementar: (por ejemplo un DTO del 4%)
let compra2 = 0;

function escoger(articulo){
    return compra2 +=articulo;
}

let  acumulado = escoger(300);
acumulado=escoger(700);
console.log(acumulado);

function descuento(compra2){
    return compra2 * 0.96//(1-(4/100)) que como resultado es 0.96
}
let total2 = descuento(compra2);
console.log(`el valor de la compra2 con el 4% de descuento es de ${total2}`); 
