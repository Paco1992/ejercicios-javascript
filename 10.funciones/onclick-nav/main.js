function menuBoton(){
    console.log('funciona el boton cuando hago click');//Compruebo que funciona el botón
    let ancla= document.getElementsByClassName('nav-enlace');
    for(let i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle('desaparecer');
    } 
}