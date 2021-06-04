function acumulado (a, b){//a y b son parámetros (o variables) y son "representativos".
console.log(a+b);
}

acumulado(15, 24);//15 y 24 son argumentos y son "datos reales".
acumulado (500, 810);//Puedo ir cambiando los valores sumando cantidades más complejas.

function registrar(nombre, apellido){
    console.log(`El alumno es: ${nombre} ${apellido}
    `)
}
registrar("José", "Serrano");
registrar ("José"); //sacará por consola José undefined porque no he addo valor a la varieble del apellido como en la línea anterior.

//Parámetros por defecto: en caso tal que pase dos parámetros a la función pero que cuando mande a llamar a dicha función mo obtenga datos, podemos prever esto y poner en los parámetros valores por defecto.

function almacenar(usuario = '', telefono = ''){
    console.log(`Hola${usuario}, ${telefono}te has registrado en... `);
}
almacenar(); //Se verá desconocido y el siguiente argumento no se verá porque es una cadena vacía. 

