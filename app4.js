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
// Funciones anónimas


// EJEMPLO1 ECMAS5 - INICIO

var saludo4 = function(nombre){
  return "Hola " + nombre;
}("Fabio");

console.log( saludo4 );

// EJEMPLO1 ECMAS5 - FIN




// EJEMPLO2 ECMAS5 - tambien puede llevar parentesis  pero no se usa - INICIO

var saludo4 = (function(nombre){
  return "Hola " + nombre;
})("Aoad");

console.log( saludo4 );

// EJEMPLO2 ECMAS5 - tambien puede llevar parentesis  pero no se usa - FIN




// EJEMPLO3 ECMAS6 - INICIO

let saludo5 = ( nombre => `Hola ${nombre}` )("Martin");
console.log( saludo5 );

// EJEMPLO3 ECMAS6 - FIN



console.log("///////////////////////////////// ///////////");
////////////////////////////////////////////
// en ECMAS6 no hay cambios en el objeto this


// EJEMPLO1 ECMA5 - se muetra el error al hacer click en documento - INICIO

var manejador = {
  id: "123",

  init: function(){
      document.addEventListener("click", function(event){
        this.clickEnPagina( event.type );
        console.log(this);
      }, false );
  }, // fin del init

  clickEnPagina: function(type){
    console.log( "Manejando (ejemplo 1) " + type + " para el id: " + this.id  );
  }
};



manejador.init();

// EJEMPLO1 ECMA5 - se muetra el error al hacer click en documento - FIN


// EJEMPLO2 ECMA5 - se corrige el error al hacer click en documento - INICIO

var manejador2 = {
  id: "123",

  init: function(){
      document.addEventListener("click", (function(event){
        this.clickEnPagina( event.type );
        console.log(this);
      }).bind(this), false );
  }, // fin del init

  clickEnPagina: function(type){
    console.log( "Manejando (ejemplo 2) " + type + " para el id: " + this.id  );
  }
};



manejador2.init();

// EJEMPLO2 ECMA5 - se corrige el error al hacer click en documento - FIN







// EJEMPLO3 ECMA6 - INICIO

var manejador3 = {
  id: "123",

  init: function(){
      document.addEventListener("click",
      event => this.clickEnPagina( event.type ));
  }, // fin del init

  clickEnPagina: function(type){
    console.log( "Manejando (ejemplo 3) " + type + " para el id: " + this.id  );
  }
};



manejador3.init();

// EJEMPLO3 ECMA6 - FIN




console.log("///////////////////////////////// ///////////");
////////////////////////////////////////////
// Funciones de flecha y arreglos



// ARREGLO A ORDENAR
var arreglo = [5,10,11,2,4,6,1,66,43,33,17,96];

// EJEMPLO1 ECMAS5 - INICIO

var ordenadoECMS5 = arreglo.sort(function(a,b){
  return a-b;
});

console.log( ordenadoECMS5 );

// EJEMPLO1 ECMAS5 - FIN



// EJEMPLO2 ECMAS6 - INICIO

var ordenadoECMS6 = arreglo.sort( (a,b) => a-b );

console.log( ordenadoECMS6 );

// EJEMPLO2 ECMAS6 - FIN







console.log("///////////////////////////////// ///////////");
////////////////////////////////////////////
// Identificando funciones de flecha



var restar = (a,b) => a - b;

console.log( typeof restar ); // me devuelve function es decir, es una funcion
console.log( restar instanceof Function ); //otra forma es con "instanceof Function" que me dice true ya que es una funcion de flecha


//var restar2 = new restar(1,6); // NO se puede hacer porq las funciones flecha no tiene el new


// la siguente funcion anonima da error porq arguments no esta definido
// dentro del objeto global

// ( (a,b) => {
//   console.log( arguments[3] );
// })();



// la siguente funcion da soluncion al problema anterior.
function ejemplo(x,y){

  ( (a,b) => {
    console.log( arguments[3] );
  })();


}
