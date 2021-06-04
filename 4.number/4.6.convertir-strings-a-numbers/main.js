
const numero1= "1";
console.log(typeof numero1);//Me indica por console que es un string/

//Convirtiendo el string("cadena de texto")en NÚMERO ENTERO/
console.log(Number.parseInt(numero1));//me saca por consopla, no un string, sino el número que en este caso es el 1

//Convirtiendo el string en un NÚMERO DECIMAL/
const numero2= "5.2";
console.log(Number.parseFloat(numero2)); //saca opr consola el número 5.2/

//Cuando intenta convertir el valor de un string que no está escrito como número , no me deja hacer el parseo y se devuelve, ya que no es un número, como este caso:/
const numero3= "catorce";
console.log(Number.parseInt(numero3));//NaN/

//Comprobar si un número es o no un entero/
const numero4= 4;
console.log(Number.isInteger(numero4));//true

console.log(Number.isInteger(numero3));//false
console.log(Number.isInteger(numero1));//false
