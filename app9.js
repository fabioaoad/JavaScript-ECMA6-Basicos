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






























//
