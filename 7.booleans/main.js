const estudiar= true;
console.log(estudiar);
console.log(typeof estudiar);

const trabajar= false;
console.log(trabajar);
console.log(typeof trabajar);

const estudiar2= "true";
console.log(typeof estudiar2);

console.log(estudiar == "true");

const autenticado= false;
if(autenticado){console.log('puedes acceder')}else{console.log('debes autenticarte')};

const loggin= true;
console.log(loggin ? 'puedes entrar' : 'no estás autenticado');