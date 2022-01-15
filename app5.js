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




console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Métodos concisos (tambien llamados simples)

// EJEMPLO1 - ECMAS5 - INICIO

var  persona = {
  nombre: "Fabio",
  getNombre: function(){
    console.log( this.nombre );
  }
}


persona.getNombre();


// EJEMPLO1 - ECMAS6 - FIN



// EJEMPLO2 - ECMAS6 - INICIO

var  persona2 = {
  nombre: "Fabio",
  getNombre(){
    console.log( this.nombre );
  }
}


persona2.getNombre();


// EJEMPLO2 - ECMAS6 - FIN
