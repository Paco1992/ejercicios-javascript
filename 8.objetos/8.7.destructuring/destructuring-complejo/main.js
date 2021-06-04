//añado más propiedades al objeto
let movil ={
    nombre: "Samsung",
    precio: 200,
    fabricado: {
        pais: "China",
        direccion: {
            ciudad: "Bejing",
            calle: "nueva, 24"
        }
    }
} 

//accediendo a las propiedads más internas del objeto: 
//para acceder a la propiedad debo seguir la misma estructura que tiene el objeto. Por ej si quiero saber el valor de  fabricado y una vez dentro quiero acceder al país
let {fabricado: {pais}} = movil;
console.log(pais);

let {fabricado: {direccion: {ciudad}}} = movil
console.log(ciudad);
