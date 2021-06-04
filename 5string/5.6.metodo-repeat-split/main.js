//Método Repeat/
const alumno= 'Francisco Ramírez Perucho: ';
const asistencia= 'OK ';
console.log(asistencia.repeat(5));
console.log(`${alumno} ${asistencia}`.repeat(5));
document.querySelector(`h2`).innerHTML=`${alumno}${asistencia}`.repeat(5);

//Método Split/
const curvaFrontend= 'html css javascript react'
console.log(curvaFrontend.split(" "));
console.log(curvaFrontend.split(" "));
document.querySelector('h3').innerHTML=`${curvaFrontend.split("")}`;
document.querySelector('h4').innerHTML=`${curvaFrontend}`;