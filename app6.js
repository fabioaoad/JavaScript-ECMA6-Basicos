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

// convierto mi gato angora a un perro con "setPrototypeOf" - HERENCIA
// nota: el chillido no funciona porq el perro no lo tiene
Object.setPrototypeOf( angora, perro );
console.log( Object.getPrototypeOf( angora ) === gato );

angora.sonido();
//angora.chillido();

// EJEMPLO1 ECMAS6 - FIN








console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Acceso al prototipo con la referencia SUPER



// EJEMPLO1 ECMAS5 - INICIO

var persona = {
  saludar(){
    return "Hola";
  }
};



var amigo = {
  saludar(){
    return Object.getPrototypeOf(this).saludar.call(this) + ", saludos ECMS5!!!";
  }
};

// heredo las propiedades de "persona" y se las paso a "amigo"
Object.setPrototypeOf( amigo, persona );
console.log( amigo.saludar() );

// EJEMPLO1 ECMAS5 - FIN

console.log("////////////////////////////////////////////");


// EJEMPLO2 ECMAS6 - INICIO

var persona2 = {
  saludar(){
    return "Hola";
  }
};



var amigo2 = {
  saludar(){
    return super.saludar() + ", saludos ECMS6!!!";
  }
};

// heredo las propiedades de "persona" y se las paso a "amigo"
Object.setPrototypeOf( amigo2, persona2 );
console.log( amigo2.saludar() );

// EJEMPLO2 ECMAS6 - FIN





console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Destructuración de objetos

// EJEMPLO1 ECMAS6 - INICIO

let ajustes = {
  nombre: "Fabio Aoad",
  email: "fabioaoad@gmail.com",
  facebook: "fb/fabioaoad",
  google: "fabioaoad",
  premium: true
};

let { nombre, facebook, email, google, premium:dePago, twitter, otraCosa = "otro valor" } = ajustes;

console.log( nombre, email, facebook, google, dePago, twitter, otraCosa );


// EJEMPLO1 ECMAS6 - FIN
