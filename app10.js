//// UNIDAD 11 ///
console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Declaración básica de una clase en ECMAS6


// EJEMPLO1 - INICIO

class Persona {

  constructor(nombre){
    this.nombre = nombre;
  }

  decirNombre(){
    console.log( this.nombre );
  }

}



let fabio = new Persona("Fabio");
// let martin =  Persona("Martin"); // error del contructor de la clase ya que no puede ser invocado

fabio.decirNombre(); // Fabio

console.log( fabio instanceof Persona );  // true
console.log( fabio instanceof Object );   // true

console.log( typeof Persona ); // function (deberia decir class)
console.log( typeof Persona.prototype.decirNombre ); // function


// EJEMPLO1 - FIN


console.log("////////////////////////////////////////////");

// EJEMPLO2 - INICIO

class Persona2 {

  decirNombre(){
    console.log( this.nombre );
  }

}



let martin = new Persona2("Martin");

martin.decirNombre(); // undefined

console.log( martin instanceof Persona2 );  // true
console.log( martin instanceof Object );   // true

console.log( typeof Persona2 ); // function (deberia decir class)
console.log( typeof Persona2.prototype.decirNombre ); // function


// EJEMPLO1 - FIN






















//
