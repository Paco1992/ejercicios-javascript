const personas =[
    {nombre: 'Camila' , edad: 35},
    {nombre: 'Daniel' , edad: 50},
    {nombre: 'Karla' , edad: 29},
    [
        {nombre: 'María' , edad: 30},
        {nombre: 'Paco' , edad: 60},
        [  {nombre: 'Javier' , edad: 39}], [  {nombre: 'José', edad: 25},]
    ],
];
console.table(personas); //De esta manera no podemos apreciar bien la anidación que hay de los obejtos


const personasFlat = personas.flat(Infinity);
console.table(personasFlat); //En cambio aplicando el método flat y pasando como parametro Infinity podemos apreciar mejor los datos en la consola 