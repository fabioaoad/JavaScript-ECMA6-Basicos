//// UNIDAD 12 ///
console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Métodos estáticos y Métodos computados en las clases



// EJEMPLO1 - MÉTODO ESTATICO - INICO


class Persona {
  constructor( nombre ) {
    this.nombre = nombre;
  }

  decirNombre(){
    console.log( this.nombre );
  }


  // defino un método estatico qye crea otra instancia de la Persona
  static crear( nombre ){
    return new Persona(nombre);
  }
}

let yo = Persona.crear( "Fabio" );
console.log( yo );



// EJEMPLO1 - MÉTODO ESTATICO - FIN

console.log("////////////////////////////////////////////");


// EJEMPLO2 - MÉTODO COMPUTADO - INICO

let nombreMetodo = "gritarNombre";

class Persona2 {
  constructor( nombre ) {
    this.nombre = nombre;
  }

  decirNombre(){
    console.log( this.nombre );
  }

  [ nombreMetodo ](){
    console.log( this.nombre.toUpperCase() );
  }

  // defino un método estatico qye crea otra instancia de la Persona
  static crear( nombre ){
    return new Persona2(nombre);
  }

}

let yo2 = Persona2.crear("Martin");
console.log( yo2 );

//let otraPersona = yo.crear("AOAD"); // no puedo hacer Uncaught TypeError: yo.crear is not a function
//console.log( otraPersona );


// EJEMPLO2 - MÉTODO COMPUTADO - FIN
















//
