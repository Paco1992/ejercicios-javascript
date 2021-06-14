const primero=document.querySelector(".hero");
console.log(primero);

console.log(primero.innerHTML);
console.log(primero.innerText);
console.log(primero.textContent);

const cambiarTitulo="Cambio de título";
document.querySelector("h1").innerHTML=cambiarTitulo;

const imagen=document.querySelector(".hero img");
imagen.src="icon-3.png";

const padre=document.querySelector("#padre .hijo");
console.log(padre);

const padreHijo2=document.querySelector("#padre .hijo:nth-child(2)");
console.log(padreHijo2);

const primero2=document.querySelector(".hero h1");
primero2.style.color="tomato";
primero2.style.fontFamily="Arial";
primero2.style.textTransform="uppercase";

const eliminar=document.querySelector("#padre .hijo");
console.log(eliminar);

const eliminar2=document.querySelector("#padre .hijo:nth-child(2)");

const eliminar1=document.querySelector(".hijo");
console.log(eliminar1);

const piePagina=document.createElement("li");
piePagina.textContent=`${("telf", 910000000)}`;
console.log(piePagina);
const ubicar1=document.querySelector("footer");
ubicar1.appendChild(piePagina);

const piePagina2=document.createElement("li");
piePagina2.textContent=`${"email", ("jfs@gmail.com")}`;
console.log(piePagina2);
const ubicar2=document.querySelector("footer");
ubicar2.insertBefore(piePagina2, ubicar2.children[2]);
piePagina2.style.color="#a2521f";

const boton=document.createElement("button");
boton.textContent="me gusta";

const ubicar3=document.querySelector("#segundoParrafo");
ubicar3.appendChild(boton);
boton.style.backgroundColor="green";
boton.style.padding="10px";
console.log(ubicar3);

boton.onclick=function() {
    console.log("te ha dado un like");
};

const boton2=document.createElement("button");
boton2.textContent="No me gusta";

const ubicar4=document.querySelector("#segundoParrafo");
ubicar4.insertBefore(boton2, ubicar4.children[2]);
boton2.style.backgroundColor="grey";
boton2.style.padding="10px";
console.log(ubicar4);

boton2.onclick=function() {
    console.log("te ha dado un dislike");
};

const boton3=document.createElement("button");
boton3.textContent="Me encanta";

const ubicar5=document.querySelector("#segundoParrafo");
ubicar5.insertBefore(boton3, ubicar5.children[2]);
boton3.style.backgroundColor="red";
boton3.style.padding="10px";
console.log(ubicar5);

boton3.onclick=function() {
    console.log("te ha dado un love");
};

const ultimoParrafo=document.createElement("p");
ultimoParrafo.textContent="soy el último párrafo";
console.log(ultimoParrafo);

const ubicar6=document.querySelector(".cuarto");
ubicar6.appendChild(ultimoParrafo);
ultimoParrafo.style.backgroundColor="blue";
ultimoParrafo.style.fontSize="30px";

const ultimaImagen=document.createElement("img");
ultimaImagen.src="icon-3.png";
console.log(ultimaImagen);

const ubicar7=document.querySelector(".cuarto");
ubicar7.appendChild(ultimaImagen);

const botonBtn=document.querySelector(".btn");
const footer=document.querySelector("footer");

botonBtn.addEventListener("click", ocultar);

function ocultar(){
    if(botonBtn.style.display="block"){
        x=document.querySelector("footer");
        x.style.display="none"
    }
}

const menu=document.querySelector("nav");
menu.addEventListener("click", ()=>{
    console.log("has dado click en el menu")
});

document.getElementById("padre").addEventListener("click", myFunction);

function myFunction() {


}