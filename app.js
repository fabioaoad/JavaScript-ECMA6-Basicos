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
