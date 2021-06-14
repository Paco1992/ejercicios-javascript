function primera(calculo){
    //ejecucion
    document.getElementById("demo").innerHTML=calculo;
}

function calculadora(num1, num2, callback){
//ejecucion
let suma=num1+num2;
callback(suma);
}

