//// UNIDAD 10 ///
console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Introducción a los maps







console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// maps y sus métodos


let mapa = new Map();

mapa.set( "nombre", "Fabio" );
mapa.set( "edad", 28 );
mapa.set( "apellido" ); // apellido → undefined
mapa.set(); // undefined → undefined
mapa.set( {}, { hola: "Mundo" } ); // {} → {…}

console.log( mapa );
console.log( mapa.size );


console.log( mapa.get( "nombre" ) ); // Fabio
console.log( mapa.get( "edad" ) ); // 28
console.log( mapa.has( "nombre" ) ); // true
console.log( mapa.has( "apellido" ) ); // false


mapa.delete( "nombre" );
console.log( mapa.has("nombre") ); // false
console.log( mapa.get("nombre") ); // undefined




mapa.set( "edad" ); // elimina el valor 28 de la edad
console.log(mapa ); // edad → undefined

mapa.clear();
console.log( mapa );



console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Inicialización de un map con valores por defecto

// EJEMPLO1 - INICIO

let mapa2 = new Map( [ ["nombre", "Fabio"], ["edad", 28] ] );
// let mapa2 = new Map(  ["nombre", "Fabio"], ["edad", 28]  ); // Da error

console.log( mapa2 );


// EJEMPLO1 - FIN


console.log("////////////////////////////////////////////");


// EJEMPLO2 - INICIO

let mapa3 = new Map( [ ["nombre", "Fabio"], [null, undefined] ] );
console.log( mapa3.get(null) ); // undefined

// EJEMPLO2 - FIN


console.log("////////////////////////////////////////////");


// EJEMPLO3 - INICIO

let mapa4 = new Map( [ ["nombre", "Fabio"], [undefined, null] ] );
console.log( mapa4.get(undefined) ); // null


// EJEMPLO3 - FIN





console.log("////////////////////////////////////////////");


// EJEMPLO4 - INICIO

let mapa5 = new Map( [ ["nombre", "Fabio"], [null, 1234] ] );
console.log( mapa5.get(null) ); // 1234


// EJEMPLO4 - FIN




console.log("////////////////////////////////////////////");


// EJEMPLO5 - INICIO

let mapa6 = new Map( [ ["nombre", "Fabio"], [undefined, 123456] ] );

console.log( mapa6.get(undefined) ); // 123456


// EJEMPLO5 - FIN




console.log("////////////////////////////////////////////");


// EJEMPLO6 - INICIO

let mapa7 = new Map( [ ["nombre", "Fabio"], [undefined] ] );

console.log( mapa7.get(undefined) ); // undefined
console.log( mapa7.get(null) );      // undefined

// EJEMPLO6 - FIN



console.log("////////////////////////////////////////////");


// EJEMPLO7 - INICIO

let mapa8 = new Map( [ ["nombre", "Fabio"], [null] ] );

console.log( mapa8.get(null) );         // undefined
console.log( mapa8.get(undefined) );    // undefined

// EJEMPLO7 - FIN











console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// foreach de los map


let mapa9 = new Map( [ ["nombre", "Martin"], ["edad",24] ] );


// EJEMPLO1 - INICIO

mapa9.forEach( function( valor, llave, mapaOrigen){
  console.log( `llave: ${llave}, valor: ${valor}` );
  console.log( mapaOrigen );
});

// EJEMPLO1 - FIN

console.log("////////////////////////////////////////////");


// EJEMPLO2 - INICIO

mapa9.forEach(
  (valor, llave) =>
      console.log( `llave: ${llave}, valor: ${valor}`)
);

// EJEMPLO2 - FIN

console.log("////////////////////////////////////////////");


// EJEMPLO3 - INICIO

mapa9.forEach(
  (valor) =>
      console.log( `valor: ${valor}`)
);

// EJEMPLO3 - FIN



console.log("////////////////////////////////////////////");



////////////////////////////////////////////
// for-of nuevo ciclo en ECMAS6



let numeros = [100,24,56,34,65,1,6,75,386];

// EJEMPLO1 - INICIO

console.log("/////////////FOR///////////////////////////////");

for (let i = 0; i < numeros.length; i++) {
  console.log( numeros[i] );
}


// EJEMPLO1 - FIN




// EJEMPLO2 - INICIO

console.log("/////////////////FOR-IN///////////////////////////");

for (let i in numeros) {
  console.log( numeros[i] );
}

// EJEMPLO2 - FIN





// EJEMPLO3 - INICIO

console.log("/////////////////FOR-OF///////////////////////////");

for (let numero of numeros) {
  console.log( numero );
}

// EJEMPLO3 - FIN




// EJEMPLO4 - INICIO

console.log("/////////////////FOR-OF - ARRAY DE OBJETOS///////////////////////");

let personas = [
  { nombre: "Fabio", edad: 23 },
  { nombre: "Martin", edad: 24 },
  { nombre: "Aoad", edad: 22 },
  { nombre: "María", edad: 23 },
  { nombre: "Susana", edad: 25 },
  { nombre: "Florencia", edad: 26 },
  { nombre: "Luciana", edad: 31 },
];


for (let persona of personas) {
  console.log( persona.nombre, persona.edad );
}

// EJEMPLO4 - FIN





// EJEMPLO5 - INICIO

console.log("/////////////////FOR-OF - SET DE OBJETOS///////////////////////");

let personas2 = new Set();

personas2.add( { nombre: "Fabio", edad: 23} );
personas2.add( { nombre: "Martin", edad: 24} );
personas2.add( { nombre: "Aoad", edad: 22} );
personas2.add( { nombre: "María", edad: 23} );
personas2.add( { nombre: "Susana", edad: 25} );
personas2.add( { nombre: "Florencia", edad: 26} );
personas2.add( { nombre: "Luciana", edad: 31} );


for (let persona of personas2) {
  console.log( persona.nombre, persona.edad );
}


// EJEMPLO5 - FIN





// EJEMPLO6 - INICIO

console.log("/////////////////FOR-OF - SET DE VALORES PLANOS///////////////////////");

let personas3 = new Set();

personas3.add( "Fabio" );
personas3.add( "Martin" );
personas3.add( "Aoad" );
personas3.add( "María" );
personas3.add( "Susana" );
personas3.add( "Florencia" );
personas3.add( "Luciana" );


for (let persona of personas3) {
  console.log( persona );
}

// EJEMPLO6 - FIN





// EJEMPLO7 - INICIO

console.log("/////////////////FOR-OF - MAP DE OBJETOS///////////////////////");

let persona4 = new Map( [ ["nombre", "Fabio"], ["apellido", "Aoad"] ] );

for (let persona of persona4) {
  console.log( persona );
}


// EJEMPLO7 - FIN


















//
