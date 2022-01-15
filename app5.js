//// UNIDAD 6 ///
console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Extensiones de objetos literales


// EJEMPLO1 ECMAS5 - INICIO

function crearPersona ( nombre, apellido, edad ){

  return{
    nombre: nombre,
    apellido: apellido,
    edad: edad
  }
}

var fabio = crearPersona("Fabio", "Aoad", "26")

console.log( fabio );

// EJEMPLO1 ECMAS5 - FIN


// EJEMPLO2 ECMAS6 - INICIO

function crearPersona ( nombre, apellido, edad ){

  return{
    nombre,
    apellido,
    edad
  }
}

var martin = crearPersona("Martin", "Aoad", "26")

console.log( martin );

// EJEMPLO2 ECMAS6 - FIN
