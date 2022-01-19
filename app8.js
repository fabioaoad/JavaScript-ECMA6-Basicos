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

// EJEMPLO1 - INICIO

let personas = new Set(["Fabio", "Martin", "Aoad"]);

personas.forEach( function( valor, llave, setOriginal){
  console.log( valor, llave, setOriginal );
  console.log( personas === setOriginal );          // true
  console.log( personas == setOriginal );           // true
  console.log( Object.is(personas, setOriginal) );  // true
});


// EJEMPLO1 - FIN




console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Convertir un set en array y eliminar duplicados


// EJEMPLO1 - INICIO

let numeros = [1,2,3,4,5,6,7];

let setNumeros = new Set( numeros ); // convierto el array a set

console.log( setNumeros ); // Set(7) [ 1, 2, 3, 4, 5, 6, 7 ]

let arrayNumeros = [...setNumeros]; // vuelvo a converti a array

console.log( arrayNumeros ); // Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]


// EJEMPLO1 - FIN

console.log("////////////////////////////////////////////");


// EJEMPLO2 - INICIO

let numeros2 = [1,2,3,4,5,6,7,7,7,7,6,4,2,2,2,2,1,1,3,3,3,7,6,4,2,7,8];

let arrayNumeros2 = eliminaDuplicados( numeros2 );
console.log( arrayNumeros2 ); // Array(8) [ 1, 2, 3, 4, 5, 6, 7, 8 ]

function eliminaDuplicados( items ){

  let set = new Set(items);
  return [...set]

}



// EJEMPLO2 - FIN




console.log("////////////////////////////////////////////");





// EJEMPLO3 - INICIO


let numeros3 = [1,2,3,4,5,6,7,7,7,7,6,4,2,2,2,2,1,1,3,3,3,7,6,4,2,7,8];

let arrayNumeros3 = eliminaDuplicados( numeros3 );
console.log( arrayNumeros3 ); // Array(8) [ 1, 2, 3, 4, 5, 6, 7, 8 ]

function eliminaDuplicados2( items ){

  return [... new Set(items)]

}


// EJEMPLO3 - FIN





console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Weekset



let set = new WeakSet();

let per1 = {
  nombre1: "Fabio"
};

let per2 = {
  nombre2: "Martin"
};

console.log(set);

set.add(per1);
set.add(per2);
console.log(set);
//set.delete(per2);

console.log(set);



let personas66 = new Set([["nombre","fernando"],["nombre","maria"]]);
console.log(personas66);







//
