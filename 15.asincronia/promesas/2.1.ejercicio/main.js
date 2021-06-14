const asignatura=new Promise((resolve, reject)=>{
//ejecucion
const nota=5;
if(nota4){resolve("has aprobado");
}else{consolereject("no has aprobado!!");
}
})

//console.log(asignatura)
//3 posibles resultados: pendiente, cumplida, rechazada

asignatura
.then(resultado=>nota(resultado))
.catch(error=>{console.log(error)})

function nota(mensaje){
    console.log(mensaje)
}
