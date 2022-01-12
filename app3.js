//// UNIDAD 4 - CONTINUACIÓN ///
console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Parámetros REST - Parámetros sin nombre

// EJEMPLO en ECMAS5 - INICIO

function agregar_alumno(){

    console.log( arguments );

    for (var i = 1; i < arguments.length; i++) {
      arguments[0].push( arguments[i] );
    }

    return arguments[0];

}


var alumnos_arr = ["Fabio"];
var alumnos_arr2 = agregar_alumno( alumnos_arr, "Martin", "Aoad", "Pedro", "Luis" );

console.log( alumnos_arr2 );


// EJEMPLO en ECMAS5 - FIN


console.log("////////////////////////////////////////////");


// EJEMPLO en ECMAS6 - INICIO

function agregar_alumno2( arr_alumnos, ...alumnos ){
    //console.log(arr_alumnos);
    console.log( arguments );
    //console.log(alumnos.length);
    //console.log(alumnos);

    for (let i = 0; i < alumnos.length; i++) {
      arr_alumnos.push( alumnos[i] );
    }
   //console.log(arr_alumnos);
    return arr_alumnos;

}


let alumnos_arr3 = ["Fabio"];
let alumnos_arr4 = agregar_alumno2( alumnos_arr3, "Martin", "Aoad", "Pedro", "Luis" );

console.log( alumnos_arr4 );

// EJEMPLO en ECMAS6 - FIN









console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Resticciones del Parámetros REST
// * Sólo puede existir un Parámetro rest en la función
// * El parámetro rest debe ir siempre como último parámetro

// function juntar_nombres( ...nombres, apellido ){
//
//   // cualqueir cosa
//
// }







console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Operador spread
// REST permite especificar argumentos independientes que serán combinados en un arreglo,
// SPREAD permite especificar un arreglo que será separado
// y cada item enviado será un argumento independiente a la función.

// EJEMPLO 1 ECMAS5 - INICIO

var numeros = [1,4,6,7,55,162,487,850];
var max = Math.max.apply( Math, numeros );

console.log( max );

// EJEMPLO 1 ECMAS5 - FIN



// EJEMPLO 1 ECMAS6 - INICIO

let numeros2 = [1,4,6,7,55,162,487,850];
let max2 = Math.max( ...numeros2 );

console.log( max2 );

// EJEMPLO 1 ECMAS6 - FIN



// EJEMPLO 2 ECMAS5 - INICIO

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum.apply(null, numbers));

// EJEMPLO 2 ECMAS5 - FIN


// EJEMPLO 2 ECMAS6 - INICIO

console.log(sum(...numbers));

// EJEMPLO 2 ECMAS6 - FIN
