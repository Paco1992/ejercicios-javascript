/*function uno(some){
    document.getAnimations.ElementById("demo").innerHTML=some;
    alert(uno);
}

function saludo(){
    uno("hola");
    alert(saludo);
}

function despedida(){
    uno("adiós");
    alert(despedida);
}

saludo();
despedida();*/

function uno(algunaCosa){
    document.getElementById("demo").innerHTML=algunaCosa;
    alert(uno);
}

function verde(){
uno("se pintará en el párrafo vacío");
}

function rojo(){
    uno("Adiós");
    alert(rojo);
}

rojo();
