/* a diferncia  de las constantes en los objetos si que puedo reasignar valor a las constantes*/

const  alumno ={
    nombre: "Camilo",
    apellido: "López",
    edad: 24,
    aprobar: false
}
console.table(alumno);

alumno.aprobar=true;

console.table(alumno);