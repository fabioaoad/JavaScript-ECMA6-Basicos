// const IMPUESTO_SV = 15.23;
//
// if (true) {
//     const IMPUESTO_SV = 19.2;
//     console.log(IMPUESTO_SV);
// }
// console.log(IMPUESTO_SV);
//
//
// const PERSONA = {
//     nombre: "Fabio",
//     apellido: "Aoad"
// };
//
// //PERSONA.nombre = "Martin";
//
// PERSONA = {
//     nombre: "Juan",
//     apellido: "Perez"
// };
//
// console.log(PERSONA);

// for (let i = 0; i <= 10; i++) {
//   //
//   //
// }
// console.log(i);














// var funciones = [];
//
// for (var i = 0; i < 10; i++) {
//     funciones.push(
//       (function(valor){
//         return function(){
//           console.log(valor);
//         }
//       })(i)
//     );
// }
//
//
//
// funciones.forEach( function (func){
//   func();
// });




//funciones.push( function(){console.log(i);} );

// let numero = 10;
// if( true ){
//   let numero = 20;
//   console.log('valor if: ', numero);
//     while(true){
//       let numero = 20;
//       console.log('valor while: ', numero);
//       for(let numero = 1; numero < 10; numero ++){
//         numero = numero;
//         console.log('valor de for: ', numero);
//       } break;
//     }
// }
// console.log('valor es: ',numero);





////////////////////////////////////////////
// startsWith endsWith includes
var saludo = "Hola Mundo!";

// ECMAS 5
console.log( saludo.substr(0,1) === "H" ); // true: compara desde posicion 0 hasta posicion 1 con "H"
console.log( saludo.substr(0,5) === "H" ); // false: compara desde posicion 0 hasta posicion 5 (Hola M) con "H"
console.log( saludo.substr(0,1) === "h" ); // false: compara desde posicion 0 hasta posicion 1 con "h"
console.log( saludo.indexOf("x") ); // retorno -1 porque no encontro caracter
console.log( saludo.indexOf("u") ); // retorna posicion (0 a n) de donde encontro el caracter

// ECMAS 6
console.log( saludo.startsWith("H") ); // true
console.log( saludo.startsWith("h") ); // false
console.log( saludo.startsWith("Mu", 5) ); // true
console.log( saludo.endsWith("!") ); // true
console.log( saludo.includes("x") ); // retorna false porque no encontro caracter
console.log( saludo.includes("u") ); // retorna true porque  encontro el caracter
console.log( saludo.includes("x", 5) ); // false
console.log( saludo.includes("d", 5) ); // true
////////////////////////////////////////////


console.log("////////////////////////////////////////////");



////////////////////////////////////////////
// repeat

let texto = "Hola";
console.log( texto.repeat(2) ); //HolaHola

const ESPACIOS = 12;

let nombres = ["Fabio", "Martin", "Aoad"];
let telefonos = ["1259634586","5638462598","4456628753"];

for( i in nombres ){
  let diferencia = ESPACIOS - nombres[i].length;
  console.log( nombres[i] + " ".repeat(diferencia) + "|" + telefonos[i] );
}
////////////////////////////////////////////

console.log("////////////////////////////////////////////");

////////////////////////////////////////////
// Literal Templates (back tick o Acento Grave)

function obtenerNombre(){
  return "Fabio Martin Aoad";
}

let nombre = "Fabio";
let apellido = "Aoad";
let nombreCompleto = nombre + " " + apellido;

console.log( nombreCompleto );

let nombreCompleto2 = `El nombre completo es ${nombre} ${apellido}`;
console.log( nombreCompleto2 );

let nombreCompleto3 = `El nombre completo es ${obtenerNombre()} ${5 + 6}`;
console.log( nombreCompleto3 );

let multiLinea = `<h1 class=miClase>${nombre}</h1>
<p>Hola Mundo mi apellido es ${apellido}</p>
`;
console.log( multiLinea );

console.log("////////////////////////////////////////////");


let cliente = { name: "Fabio" }
let tarjeta = { amount: 7, product: "alfajores", unitprice: 42 }
let message = `Hola ${cliente.name}, quieres comprar ${tarjeta.amount} ${tarjeta.product} por un total de ${tarjeta.amount * tarjeta.unitprice} pesos?`;
console.log(message);

////////////////////////////////////////////

console.log("////////////////////////////////////////////");

////////////////////////////////////////////
// Templates con tag

// Ejemplo 1 usando operador spread "..."
function etiqueta( literales, ...substituciones ){
  //console.log( arguments );
  let resultado = "";
  console.log(literales);
  console.log(substituciones);

  for(let i = 0; i < substituciones.length; i++){
    resultado += literales[i];
    resultado += substituciones[i];
  }

  return resultado;
}

let unidades = 5 , consto_unitario = 10;
let mensaje = etiqueta`${unidades} tornillos cuentas ${ unidades * consto_unitario } pesos.`;
console.log( mensaje );

console.log("////////////////////////////////////////////");

// Ejemplo 2

function etiqueta2( literales, valor1, valor2 ){
  console.log(literales);
  console.log(valor1);
  console.log(valor2);
}

let unidades2 = 5 , consto_unitario2 = 10;
etiqueta2`${unidades2} tornillos cuentas ${ unidades2 * consto_unitario2 } pesos.`;


console.log("////////////////////////////////////////////");
