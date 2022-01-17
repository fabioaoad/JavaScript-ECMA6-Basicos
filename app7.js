//// UNIDAD 8 ///
console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Introducción a los Símbolos


// ECMAS5 se tenia los siguientes tipos de datos únicos
// undefined, null, boolean, number, string, object
// ECMAS6 introduce a los symbol



// Simbolos y propiedades

// EJEMPLO1 - INICIO

//let primerNombre = new Symbol(); //da error porq los simbolos no tienen constructor por lo que no debe usar "new"

let primerNombre = Symbol();
let segundoNombre = Symbol();

let persona = {
  [segundoNombre]: 'Martin'
};

persona[primerNombre] = "Fabio";
console.log(persona.primerNombre); // undefined
console.log(persona[primerNombre]); // Fabio
console.log(persona[segundoNombre]); // Fabio

// EJEMPLO1 - FIN


// EJEMPLO2 - USO DE ALIAS - INICIO

let ultimoNombre = Symbol('ultimo apellido');
persona[ultimoNombre] = "Aoad";
let otroSimbolo = Symbol();

console.log( ultimoNombre ); // Symbol('ultimo apellido')
console.log(otroSimbolo); // Symbol()

// EJEMPLO2 - USO DE ALIAS - FIN



// EJEMPLO3 - LOS SIMBOLOS SIEMPRE SON DIFERENTES - INICIO

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');

console.log( simbolo1 == simbolo2 );          // false
console.log( simbolo1 === simbolo2 );         // false
console.log( Object.is(simbolo1, simbolo2) ); // false

// para saber si es un simbolo usar typeof
console.log( typeof primerNombre ); // symbol

// EJEMPLO3  - LOS SIMBOLOS SIEMPRE SON DIFERENTES - FIN




// EJEMPLO4 - INICIO

//console.log( " Mi simbolo: " + primerNombre );    // NO se puede convertir un simbolo a string
//console.log( `Mi simbolo es:  ${ primerNombre }` ); // NO se puede convertir un simbolo a string

console.log( 'ultimo apellido' in persona ); // false pero yo se que esta seteado, entonces usar:
console.log( persona[ultimoNombre] ); // ahora si retorna "Aoad"

// EJEMPLO4 - FIN




console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Compartiendo simbolos - Symbol.for() y Symbol.keyFor()




let userID = Symbol.for("userID");
let objeto = {};

objeto[userID] = "12345";

console.log( objeto[userID] ); // 12345
console.log( userID );        // Symbol(userID)



let userID2 = Symbol.for("userID");

console.log( userID == userID2 );           // true
console.log( userID === userID2 );          // true
console.log( Object.is(userID, userID2) );  // true


console.log( objeto[userID2] ); // 12345
console.log( userID2 );         // Symbol(userID)


//uso de piscina de SIMBOLOS

let id = Symbol.for("id unico");
console.log( Symbol.keyFor( id ) ); // id unico


let id2 = Symbol.for("id unico");
console.log( Symbol.keyFor( id2 ) );  // id unico


console.log( id === id2 ); // true


let id3 = Symbol("id unico");
console.log( Symbol.keyFor( id3 ) ); // undefined porq no existe nada asociado en la pila al id3 porq estoy creando un simbolo























//
