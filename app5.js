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










console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Nombres de propiedades computadas o procesadas

// EJEMPLO1 - ECMAS5 - INICIO

var persona3 = {};

var apellido = "apellido";

persona["primer nombre"] = "Fabio";
persona[apellido] = "Aoad";
persona.apellido = "Aoad";

console.log( persona["primer nombre"] );
console.log( persona[apellido] );
console.log( persona.apellido );

var persona4 = {
  "primer nombre": "Fabio"
}

console.log( persona4["primer nombre"] );

// EJEMPLO1 - ECMAS5 - FIN


// EJEMPLO2 - ECMAS6 - INICIO

var apellido = "primer apellido";

var persona5 = {

  "primer nombre": "Fabio",
  [apellido]: "Aoad"

};

console.log( persona5[ "primer nombre" ] );
console.log( persona5[ apellido ] );

// EJEMPLO2 - ECMAS6 - FIN


// EJEMPLO3 - ECMAS6 - INICIO

var subFijo = " nombre";

var persona6 = {
  [ "primer" + subFijo ]: "Fabio",
  [ "segundo" + subFijo ]: "Martin",
};

console.log( persona6["primer nombre"] );
console.log( persona6["segundo" + subFijo] );

// EJEMPLO3 - ECMAS6 - FIN



console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Nuevo método Objeto.is()

console.log( +0 == -0 ); //true
console.log( +0 === -0 ); //true
console.log( Object.is( +0, -0 ) ); //false

console.log( "==========" );

console.log( NaN == NaN ); //false
console.log( NaN === NaN ); //false
console.log( Object.is(NaN,NaN) ); //true

console.log( "==========" );

console.log( 5 == 5 ); //true
console.log( 5 === 5 ); //true
console.log( Object.is(5,5) ); //true

console.log( "==========" );

console.log( 5 == "5" ); //true
console.log( 5 === "5" ); //false
console.log( Object.is(5,"5") ); //false




console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Nuevo método Objeto.assign()


// EJEMPLO1 ECMAS5 - INICIO

function mezclar( objReceptor, objDonador ){
  Object.keys( objDonador ).forEach( function(key){
    objReceptor[key] = objDonador[key];
  });
  return objReceptor;
}

var objReceptor = {};
var objDonador = {
  nombre: "mi-archivo.js"
}

console.log( mezclar( objReceptor, objDonador ) );

// EJEMPLO1 ECMAS5 - FIN

console.log("////////////////////////////////////////////");


// EJEMPLO2 ECMAS6 - INICIO

function mezclar2( objReceptor, objDonador ){
  Object.keys( objDonador ).forEach( function(key){
    objReceptor[key] = objDonador[key];
  });
  return objReceptor;
}

let objReceptor2 = {};
let objDonador2 = {
  get nombre(){
    return "mi-archivo.js"
  }
}

console.log( objDonador2.nombre );
console.log( "Objeto donador original con el get ",objDonador2 );
console.log( "Objeto receptor mezclado sin el get ",mezclar2( objReceptor2, objDonador2 ) );

// EJEMPLO2 ECMAS6 - FIN


console.log("////////////////////////////////////////////");

// EJEMPLO3 ECMAS6 - INICIO

let objReceptor3 = {};
let objDonador3 = {
  get nombre(){
    return "mi-archivo.js"
  }
}

console.log( "Objeto receptor mezclado (ECMAS6) sin el get ", Object.assign( objReceptor3, objDonador3 ) );

// EJEMPLO3 ECMAS6 - FIN







console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Orden de enumeración de las propiedades de los objetos
// *) Todas las llaves van en orden ascendente
// *) Todas las llaves tipo string van ordenadas en la manera que fueron agregadas al objeto
// *) Todos los símbolos en el orden que fueron agregados al objeto


var objeto = {
  c: 1,
  0: 1,
  x: 1,
  15: 1,
  r: 1,
  3: 1,
  b: 1
};

objeto.d = 1;
objeto["2"] = 1;
objeto["a"] = 1;

console.log( Object.getOwnPropertyNames( objeto ).join(",") );
console.log( Object.keys( objeto ) );
console.log( JSON.stringify( objeto ) );

for (i in Object.keys( objeto ) ) {
  console.log( Object.keys( objeto )[i] );
}


console.log("////////////////////////////////////////////");
////////////////////////////////////////////
