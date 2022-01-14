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










console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Romper la relación de referencia de los objetos utilizando el operador SPREAD

let persona1 = {
  nombre: "Fabio",
  edad: 25
}

let persona2 = { ...persona1 }

persona2.nombre = 'Martin';

console.log( persona1 );
console.log( persona2 );







console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Añadir propiedades a objetos a partir de otros objetos ustilizando el operador SPREAD
// util para trabajar con patrón redux

let persona3 = {
  nombre: 'FABIO',
  edad: 26
};

let persona4 = {
  nombre: 'MARTIN',
  edad: 18,
  direccion: 'Residencial Belgrano',
  conduce: true,
  vehiculo: true,
  vegetariano: false,
  casado: false
};

persona3 = {
  ...persona4,
  ...persona3
}


console.log( persona3 );
console.log( persona4 );







console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Diferencia entre el SPREAD y REST


// EJEMPLO 1 REST y SPREAD - INICIO

function saludarRest( saludo, ...nombres ){

  for ( i in nombres ) {
    console.log( `${saludo} ${nombres[i]}.` );
  }

}



function saludarSpread( saludo, ...nombres ){

  console.log( `${saludo} ${nombres}.` );

}


saludarRest( "Hola", "Fabio", "Martin", "Aoad" );


let personas = ["Maria", "Florencia", "Gabriela"];
saludarSpread("Que tal!! ", personas);

// EJEMPLO 1 REST y SPREAD - FIN



// EJEMPLO 2 SPREAD - INICIO

let partes = ["carburador", "rueda", "volante", "puerta"];
let auto = ["Chasis", "Motor", ...partes, "asientos", "luces", "tablero"];

console.log( auto );

// EJEMPLO 2 SPREAD - FIN








console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// new.target es una meta propiedad
// new.target es más seguro que el instanceof


// function Persona(nombre){
//
//   if ( typeof new.target !== "undefined" ) {
//     this.nombre = nombre;
//   } else {
//     throw new Error('Esta función debe de ser utilizada con el new');
//   }
//
//   this.nombre = nombre;
//
// }
//
// var persona     = new Persona("Fabio");
// var noEsPersona =     Persona.call( persona, "Fabio");

//console.log(persona);
//console.log(noEsPersona);


console.log("////////////////////////////////////////////");
////////////////////////////////////////////


function crear_persona(nombre="Fernando", apellido = "Herrera"){
console.log(arguments);
}
crear_persona();
