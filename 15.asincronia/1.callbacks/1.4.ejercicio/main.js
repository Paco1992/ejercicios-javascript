setTimeout(()=>{
    mensaje("I love you!");
}, 3000)

function mensaje(valor){
    document.getElementById("comentar").innerHTML=valor;
    }