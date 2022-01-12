//// UNIDAD 4 ///
console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Parametros por defecto

//EJEMPLO 1 - INICIO

function saludo( mensaje, tiempo ){

  mensaje = mensaje || "Hola Mundo";

  setTimeout(function(){
    console.log( mensaje );
  }, tiempo);

}

saludo("Fabio Martin Aoad");

//EJEMPLO 1 - FIN




//EJEMPLO 2 - INICIO

function saludo2( mensaje, tiempo ){

  mensaje = ( typeof mensaje  !== "undefined")? mensaje : "Hola Fabio";

  setTimeout(function(){
    console.log( mensaje );
  }, tiempo);

}

saludo2();

//EJEMPLO 2 - FIN






//EJEMPLO 3 - INICIO

function saludo3( mensaje = "Hola Martin", tiempo = 1500 ){

  setTimeout(function(){
    console.log( mensaje );
  }, tiempo);

}

saludo3();

//EJEMPLO 3 - FIN





// EJEMPLO 4 - INICIO

function saludar( fn ){
  console.log( "El valor de fn (ejemplo 4) es: ", typeof fn);
  if ( typeof fn === "undefined" ) {
    console.error("No es una función");
    return;
  }
  fn();
}

saludar();

//EJEMPLO 4 - FIN





// EJEMPLO 5 - INICIO

function saludar2( fn = fnTemporal ){
  console.log( "El valor de fn (ejemplo 5) es: ", typeof fn);
  if ( typeof fn === "undefined" ) {
    console.error("No es una función");
    return;
  }
  fn();
}

function fnTemporal(){
  console.log("Hola Mundo FN (ejemplo 5)");
}

saludar2();

//EJEMPLO 5 - FIN






// EJEMPLO 6 - INICIO

function saludar3( fn = fnTemporal2, persona = { nombre: "Martin" } ){
  console.log( "El valor de fn (ejemplo 6) es: ", typeof fn);
  if ( typeof fn === "undefined" ) {
    console.error("No es una función");
    return;
  }
  fn();
}

function fnTemporal2(){
  console.log("Hola Mundo FN (ejemplo 6)");
}

saludar3();

// EJEMPLO 6 - FIN






// EJEMPLO 7 - INICIO

function saludar4( fn = fnTemporal2, persona = { nombre: "Martin" } ){
  console.log( "El valor de fn (ejemplo 7) es: ", typeof fn);
  if ( typeof fn === "undefined" ) {
    console.error("No es una función");
    return;
  }
  fn();
}

function fnTemporal3(){
  console.log("Hola Mundo FN (ejemplo 7)");
}

var persona = {
  nombre: "Fabio Martin Aoad"
};

saludar4( fnTemporal3, persona );

// EJEMPLO 7 - FIN



console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// como los valores por defecto afectan al objeto arguments

// EJEMPLO 1 - envio con argumentos - INICIO
// sumar recibe en arguments: a,b, "Fabio", y objeto {g:1,t:2}

function sumar(a,b){

  console.log( arguments );

}


sumar( 1, 2, 5, "Fabio", { g: 1, t: 2 } );

// EJEMPLO 1 - envio con argumentos - FIN


// EJEMPLO 2 - envio sin argumentos - INICIO
//sumar2 no recibe nada y arguments esta vacio

function sumar2( a = 1, b = 2 ){

  console.log( arguments );

}


sumar2();

// EJEMPLO 2 - envio sin argumentos - FIN
