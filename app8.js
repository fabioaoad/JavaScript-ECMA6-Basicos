//// UNIDAD 9 ///
console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Introducción a los Set




console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Creando sets - agregando items y buscando elementos

// EJEMPLO1 - INICIO

let items = new Set();

items.add( 10 );
items.add( 11 );
items.add( 8 );
items.add( 7 );
items.add( 6 );
items.add( 6 ); // no agrega por que ya existe
items.add( 6 ); // no agrega por que ya existe
items.add( 6 ); // no agrega por que ya existe
items.add( "6" ); // si añade por que antes del add hace un Object.is para verificar si añadir o no

console.log( items.size );
console.log( items );

// EJEMPLO1 - FIN


console.log("////////////////////////////////////////////");



// EJEMPLO2 - INICIO

let items2 = new Set( [1,2,3,4,5,6,7,7,7,7,7,7] );

console.log( items2.size );
console.log( items2 );

console.log( items2.has(7) );   // true
console.log( items2.has("7") ); // false
console.log( items2.has(1) );   // true
console.log( items2.has(6) );   // true
console.log( items2.has(9) );   // false

// EJEMPLO2 - FIN







console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Removiendo valores de un set

// EJEMPLO1 - INICIO

let items3 = new Set( [1,2,3,4,5] );

console.log( items3 );
console.log( items3.size );


items3.delete( 3 ); // elimino el 3


console.log( items3 );
console.log( items3.size );


// items3.delete( 3 ); // ya estaba eliminado y no pasa nada en consola
// // Es como si hubiera hecho lo siguiente:
// if( items3.has(3) ){
//   items3.delete( 3 );
// }


items3.clear(); // elimino todos los datos del set

console.log( items3 );
console.log( items3.size );




// EJEMPLO1 - FIN






console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// forEach() en set

let personas = new Set(["Fabio", "Martin", "Aoad"]);

personas.forEach( function( valor, llave, setOriginal){
  console.log( valor, llave, setOriginal );
  console.log( personas === setOriginal );
});





























//
