const cursoReact= '  son 14 alumnos  '
console.log(cursoReact);
console.log(cursoReact.length);

console.log(cursoReact.trimStart());




console.log(cursoReact)



const cursoReact = '  son 14 alumnos  ';
console.log(cursoReact);
console.log(cursoReact.length); //contará también los espacios en blanco
//Eliminar al inicio. Este método nos ayudará por ejemplo cuando estemos validando los datos que el usuario nos pase por un formulario
console.log(cursoReact.trimStart()); 
//Eliminar al final:
console.log(cursoReact.trimEnd());
//eliminar ambos: 
console.log(cursoReact.trimStart().trimEnd()); 
//Antes solo estaba el método trim() 
console.log(cursoReact.trim());