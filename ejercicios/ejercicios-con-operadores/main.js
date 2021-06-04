let x = 5;
let y = 2;
let resultado = x + y;
document.getElementById("demo").innerHTML = `${resultado}`;
console.log(resultado);

var a = 10;
a += 5;//sumo de 5 en 5/
document.getElementById("demo2").innerHTML = a;
console.log(a);

let txt1 = "Francisco ";
let txt2 = "Ramírez";
document.getElementById("demo3").innerHTML = txt1 + txt2;

let j = 5 + 5; //10/
let k = "5" + 5; //55 tipo String/
let resultado2 = "Hello" + 5;//Hello5 string/
document.getElementById("demo4").innerHTML = j + "<br>" + resultado2;
console.log(typeof j);
console.log(typeof k);
console.log(typeof resultado2);