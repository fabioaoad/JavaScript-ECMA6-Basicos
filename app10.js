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


// EJEMPLO2 - FIN



console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// clases como expresiones

// EJEMPLO1 - INICIO

let miFuncion = function(){
  console.log("Hola Mundo");
}

let otraFuncion = miFuncion;
console.log( typeof otraFuncion );
otraFuncion();

// EJEMPLO1 - FIN

console.log("////////////////////////////////////////////");


// EJEMPLO2 - INICIO

let Persona3 = class{
  constructor(){
    this.nombre = "",
    this.edad = 24,
    this.direccion = "Mi calle 1234"
  }

  decirNombre(){
    console.log("Hola Mundo");
  }
}
let aoad = new Persona3();

console.log( typeof aoad );             // Object
console.log( aoad instanceof Persona3); // true

// EJEMPLO2 - FIN





console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// clases como parámetros


// EJEMPLO1 - INICIO

function creadorClases( definicionClase ){
  return new definicionClase();
}

let objeto = creadorClases( class{
  constructor() {
    this.nombre = undefined;
    this.edad = 24
  }

  saludar(){
    console.log("HOLA");
  }
});

objeto.saludar();

// EJEMPLO1 - FIN

console.log("////////////////////////////////////////////");


// EJEMPLO2 - INICIO

class Cuadrado{
  constructor(lado){
    this.lado = lado;
  }

  getArea(){
    return this.lado * this.lado;
  }
};


function imprimirCuadrado( cuadrado ){
  if( !(cuadrado instanceof Cuadrado) ){
    console.error("El parámetro enviado no es un cuadrado");
    return;
  }
  console.log( cuadrado.getArea() );
}


let mesa = new Cuadrado(10);
let mesa2 = "1234";

imprimirCuadrado( mesa ); // 100
// imprimirCuadrado( mesa2 ); // El parámetro enviado no es un cuadrado

// EJEMPLO2 - FIN









//
