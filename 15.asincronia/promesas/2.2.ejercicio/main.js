let miPromesa=new Promise((resolve)=>{
    setTimeout(() =>{
        //ejecucion
        resolver("Hola, pude esolver tu promesa")
    }, 3000)
});

miPromesa,then(function(valor){
    document.getElementById("parrafo").innerHTML=valor;
});