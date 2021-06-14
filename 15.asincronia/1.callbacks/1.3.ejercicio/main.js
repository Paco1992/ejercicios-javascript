const alumnos=["Natalia", "Javi", "Paco", "David", "Josue", "Jeampierre", "Cristian"];
mostraralumnos = () =>{
    // ejecuta la funcion
    setTimeout(() =>{
        // lo congelamos durante 2 seg
        alumnos.forEach(persona =>{// este forEach, cuenta la lista de alumnos, no dice nada
            console.log(persona)
            // esto lo muestra en la consola
        })
    }, 2000)
}
mostraralumnos();