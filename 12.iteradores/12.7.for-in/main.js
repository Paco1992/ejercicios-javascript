//es similar al for in es similar al for of pero la diferencia es que es con el for in se itera sobre objetos{}  y con for of se itera sobre arreglos[]

const articulos= {
    id: 1, 
    nombre: 'Gafas', 
    precio: 180 }
 

//producto representa a cada elemento, normalmente se pone con el mismo nombre del array pero en singular
for(let propiedad in articulos){
    console.log(`${articulos[propiedad]}`);
} 