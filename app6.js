//// UNIDAD 7 ///
console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Cambiar el prototipo de un objeto


// EJEMPLO1 ECMAS6 - INICIO

let gato = {
  sonido(){
    console.log("Miua!");
  },
  chillido(){
    console.log("MIAU!!!!");
  }
};


let perro = {
  sonido(){
    console.log("Guau!!");
  }
};

let angora = Object.create( gato );

console.log( Object.getPrototypeOf( angora ) === gato );

angora.sonido();
angora.chillido();

// convierto mi gato angora a un perro con "setPrototypeOf"
// nota: el chillido no funciona porq el perro no lo tiene
Object.setPrototypeOf( angora, perro );
console.log( Object.getPrototypeOf( angora ) === gato );

angora.sonido();
angora.chillido();

// EJEMPLO1 ECMAS6 - FIN
