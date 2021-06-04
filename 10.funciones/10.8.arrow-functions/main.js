const primera = function (){
  console.log("funcion tradicional")
    return "mi primera funcion tradicional";

}
let guardarPrimera = document.getElementById("primera").innerHTML = primera ();
primera();

const primera = function() {
    console.log("funcion tradicional");
    return "mi primera function tradicional";
  };
  
  //con esto pinta por pantalla: mi primera function tradicional
  let guardarPrimera = document.getElementById("primera").innerHTML = primera();
  primera(); 
  
  //si tienen una sola linea puedo precindir de los{} y el return
  const segunda = () =>"mi primera arrow functions";
  let guardarSegunda = document.getElementById("segunda").innerHTML = segunda();
  
  
  //pasando parametros a la funcion tradicional:  
  const tercera = function(tipoFuncion) {
      console.log(`funcion de tipo: ${tipoFuncion}`);
    }; 
   tercera("tradicional");//acá paso los argumentos
  
  //pasando parametros a una arrow functions: 
  //si solo se pasa un parametro no es necesario poner el parentesis
  const cuarta = (tipoFuncion2)=>{
      console.log(`funcion de tipo: ${tipoFuncion2}`);
  }
  cuarta("arrow functions");//acá paso los argumentos