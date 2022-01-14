//// UNIDAD 5 ///
console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Arrow Function (Funciones Flecha)

// EJEMPLO1 ECMAS5 - un parámetro - INICIO

var miFuncion2 = function(valor){
  return valor;
}
console.log(miFuncion2("Hola"));

// EJEMPLO1 ECMAS5 - un parámetro - FIN




// EJEMPLO2 ECMAS6 - un parámetro - INICIO

let miFuncion1 = valor => valor;
console.log(miFuncion1("Mundo"));

// EJEMPLO2 ECMAS6 - un parámetro - FIN



// EJEMPLO3 ECMAS5 - dos parámetro - INICIO

var sumar2 = function(num1, num2){
  return num1 + num2;
}
console.log(sumar2(3,5));

// EJEMPLO3 ECMAS5 - dos parámetro - FIN



// EJEMPLO4 ECMAS6 - dos parámetro - INICIO

let sumar1 = (num1, num2) => num1 + num2;
console.log(sumar1(3,5));

// EJEMPLO4 ECMAS6 - dos parámetro - FIN




// EJEMPLO5 ECMAS5 - ningun parámetro - INICIO

var saludar2 = function(){
  return "Hola Fabio";
}
console.log(saludar2());

// EJEMPLO5 ECMAS5 - ningun parámetro - FIN




// EJEMPLO6 ECMAS6 - ningun parámetro - INICIO

let saludar1 = () => "Hola Martin";
console.log(saludar1());

// EJEMPLO6 ECMAS6 - ningun parámetro - FIN





// EJEMPLO7 ECMAS5 - INICIO

var saludarPersona2 = function(nombre){
  var salida = "Hola, " + nombre;
  return salida;
}
console.log(saludarPersona2("Fabio"));

// EJEMPLO7 ECMAS5 - FIN



// EJEMPLO8 ECMAS6 - INICIO

let saludarPersona1 = nombre => {
  let salida = `Hola, ${nombre}`;
  return salida;
}
console.log(saludarPersona1("Martin"));

// EJEMPLO8 ECMAS6 - FIN





// EJEMPLO9 ECMAS5 - retorno objeto literal - INICIO

var obtenerLibro2 = function(id){
  return{
    id: id,
    nombre: "Transformers"
  }
}
console.log(obtenerLibro2());

// EJEMPLO9 ECMAS5 - retono objeto literal - FIN







// EJEMPLO10 ECMAS6 - retorno objeto literal - INICIO

let obtenerLibro1 = id => ( { id:id, nombre: "Transformers" } );
console.log(obtenerLibro1());

// EJEMPLO10 ECMAS6 - retono objeto literal - FIN


console.log("////////////////////////////////////////////");
////////////////////////////////////////////
