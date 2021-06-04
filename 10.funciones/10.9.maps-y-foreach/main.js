//Array de objetos
//const alumnos = ["Juan", "Pepe", "Isa"]

const alumnos = [
    {nombre: "Laura", edad: 18, color: "rojo"},
    {nombre: "Camila", edad: 14},
    {nombre: "Violeta", edad: 12, estatura: 1.50},
    {nombre: "Gabi", edad: 12},
    {nombre: "Miguel", edad: 16},
    {nombre: "Juan", edad: 16},
]
console.log(alumnos.lenght);//longitud del array


console.table(alumnos);
//nuevo array con map colo en edades
const alumnosEdad = alumnos.map(persona =>`${persona.edad}`);
console.log(alumnosEdad);

//nuevo array con forEach de los nombres
