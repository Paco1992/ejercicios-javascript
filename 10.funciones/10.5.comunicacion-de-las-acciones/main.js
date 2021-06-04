start(); //en una function declarativa JS nos permite mandar a llamar a la funcion  antes de declararla
function start(){
    console.log('1. accediendo al sistema...');
    acceder('Johana');
}


//esta funcion acceder() la  pretendo llamar despues de que empiece el programa y por eso la mando a llamar dentro de la funcion start() y de esta manera las funciones se van llamando y encadenando

function acceder(usuario){
    console.log(`2. ${usuario}  Ahora puedes acceder`)
    entrar();
} 
//esta funcion será llamada después de que el usuario acceda con sus datos
function entrar(){
    console.log('3. Estas dentro del sistema');
}