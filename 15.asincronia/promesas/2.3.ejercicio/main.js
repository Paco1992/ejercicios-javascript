const invitados = [];

const nuevoInvitado = (invitado) =>
  new Promise((resolve) => {
    //ejecucion
    setTimeout(() => {
      invitados.push(invitado);
      resolve(`se ha unido ${invitado}`);
    }, 3000);
  });

nuevoInvitado("Alejandra")
    .then(resultado=>{
        console.log(resultado)
        console.log(invitados)
        return nuevoInvitado("Felipe IV")
    })

    .then(resultado=>{
        console.log(resultado)
        console.log(invitados)
        return nuevoInvitado("Filemon")
    });
