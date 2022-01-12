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
