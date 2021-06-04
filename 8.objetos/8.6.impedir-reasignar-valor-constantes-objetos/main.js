/*Para evitar cambiar el comportamiento de una constante dentro de un objeto usaremos como primera medida el  "use strict" y una vez habilitado teenmos acceso a una serie de "métodos para objetos" */
"use strict";

const  alumno ={
    nombre: "Camilo",
    apellido: "López",
    edad: 24,
    aprobar: false
}

console.log(alumno);

/**Agregamos el método freeze y así evitamos por ejemplo cambiar el valor de la constante aprobar=true y así se sigue manteniendo la norma de las constantes y es la norma que dice que a una constante no se le pueden reasignar su valor como a una let */

Object.freeze(alumno); //acá se  ha congelado el procedimiento de cambiar el valor a la const aprobar y dará error en la consola: Uncaught TypeError: Cannot assign to read only property 'aprobar' of object '#<Object>'

alumno.aprobar=true;
console.log(alumno); 