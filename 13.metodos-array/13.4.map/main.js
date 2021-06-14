/*MAP crea un nuevo array y me trae todos los valores de una  de las propiedades  que le pida del primer array que he creado.
Es decir, si le pido que traiga los valores de id me va a traer todos los ids. O si le pido que traiga la propiedad nombre me va a traer todos los datos de nombre*/ 

const superHeroes = [
    { id: 1, nombre: 'iroman', edad: 38 },
    { id: 2, nombre: 'spiderman', edad: 22 },
    { id: 3, nombre: 'hulk', edad: 39 },
    { id: 4, nombre: 'viudaNegra', edad: 25 },
  ];
  
  const personajes = superHeroes.map((personaje)=>{
      return personaje.nombre;
  })
  console.table(personajes);
  
  const personajes2 = superHeroes.map((valor)=>{
      return valor.edad;
  })
  console.table(personajes2);
  
  const personajes3 = superHeroes.map((valor) =>{
      return valor.id;
  })
  console.table(personajes3) 
  
  /*si quiero que traiga no solo un array de valores sino varios valores:*/
  const personajes4 = superHeroes.map((valor) =>{
      return valor.nombre + ' tiene ' + valor.edad + ' años.'
      //return (`${valor.nombre} tiene ${valor.edad} años`);
  })
  console.table(personajes4);
  
  /*esta manera es lo mismo que el de antes solo que vamos a hacerlo de manera que responda como un objeto:  */
  const personajes5 = superHeroes.map((valor) => ({
      nombre: valor.nombre,
      id: valor.id,}));
  console.table(personajes5);
  
  /*Esta es otra forma de utilizar el método MAP*/ 
  
  const arrayNumeros = [ 1, 2, 3, 4, 5, 6];
  
  const doble = (valorActual, index, arrayNumeros)=>{
      // return valorActual * 2
      return (` el doble de ${valorActual} es ${valorActual *2}`)
  };
  const numerosDobles = arrayNumeros.map(doble)
  console.table(numerosDobles);
  
  
  
  