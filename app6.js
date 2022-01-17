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
  premium: true,
  github: "gh/fabioaoad"
};

let { nombre, facebook, email, google, premium:dePago, twitter, otraCosa = "otro valor", github:cuentaGH = "miGH/fabio" } = ajustes;

console.log( nombre, email, facebook, google, dePago, twitter, otraCosa, cuentaGH );


// EJEMPLO1 ECMAS6 - FIN








console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Destructuración de objetos anidados

let autoGuardado = {

  archivo: "app.js",
  cursor: {
    linea: 7,
    columna: 16
  },
  ultimoArchivo:{
    archivo: "index.html",
    cursor: {
              cursor: 8,
              columna: 20
            }
  },
  otroNodo:{
            subNodo:{
                     cursor:{
                              linea: 11,
                              columna: 11
                            }
                    }
          }
};

let { cursor: cursorActivo } = autoGuardado;
console.log( cursorActivo );

let { ultimoArchivo: { cursor:ultimoArchivo } } = autoGuardado;
console.log( ultimoArchivo );

let { otroNodo: { subNodo:{ cursor:otroSuperNodo } } } = autoGuardado;
console.log( otroSuperNodo );

let otroSuperNodo2 = autoGuardado.otroNodo.subNodo.cursor;
console.log( otroSuperNodo2 );







console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Destructuración de arreglos

// EJEMPLO1 ECMAS6 - INICIO

let frutas = ["Mandarina", "Naranja", "Duranzo"];

let [ fruta1, fruta2 ] = frutas;

console.log( fruta1 );
console.log( fruta2 );

// EJEMPLO1 ECMAS6 - FIN

// EJEMPLO2 ECMAS6 - INICIO

let [,,fruta3] = frutas;

console.log(fruta3);

// EJEMPLO2 ECMAS6 - FIN


// EJEMPLO3 ECMAS6 - INICIO

// sobreescribir valores

let otraFruta = "Manzana";
[ otraFruta ] = frutas;
console.log( otraFruta );

// EJEMPLO3 ECMAS6 - FIN


// EJEMPLO4 ECMAS6 - INICIO

let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

//Destructuración

[a,b] = [b,a]
console.log(a);
console.log(b);

// EJEMPLO4 ECMAS6 - FIN




console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Destructuración de arreglos anidados

// EJEMPLO1 ECMAS6 - INICIO

let colores1 = [ "rojo", ["verde", "amarillo"], "morado", "naranja" ];

let [ color1, [color2] ] = colores1;

console.log(color1);
console.log(color2);

// EJEMPLO1 ECMAS6 - FIN


// EJEMPLO2 ECMAS6 - INICIO

let colores2 = [ "rojo", "verde", "amarillo", "morado", "naranja" ];

// operador rest
let [ colorPrincipal, colorSecundario, ...demasColores ] = colores2;

console.log( colorPrincipal );
console.log( colorSecundario );
console.log( demasColores );

// EJEMPLO2 ECMAS6 - FIN


// EJEMPLO3 ECMAS6 - INICIO

let colores3 = [ "violeta", "negro" ];

// operador rest
let [ colorPrincipal2, colorSecundario2, ...demasColores2 ] = colores3;

console.log( colorPrincipal2 );
console.log( colorSecundario2 );
console.log( demasColores2 );

// EJEMPLO3 ECMAS6 - FIN





console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Valores por defeco en la destructuración

let frutas4 = ["naranja", "pera"];

let [ fruta5, fruta6 = "manzana" ] = frutas4;

console.log(fruta5);
console.log(fruta6);



let opciones = {
  nombre5: "Fabio",
  apellido5: "miOtroApellido"
};

let { nombre5, apellido5 = "Aoad" } = opciones;
console.log( nombre5, apellido5 );





console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Destructuración de parámetros con valores por defecto

// EJEMPLO1 - INICIO
function crearJugador( nickname, opciones ){

  opciones = opciones || {};

  let hp = opciones.hp,
      sp = opciones. sp,
      clase = opciones.clase;

      console.log( nickname, hp, sp, clase );

}


crearJugador( "FMA-M", {
  hp: 100,
  sp: 50,
  clase: "MAGO"
});

// EJEMPLO1 - FIN

// EJEMPLO2 - INICIO

function crearJugador2( nickname, { hp, sp, clase } = { hp:80, sp:20, clase: "HUMANO" } ){

      console.log( nickname, hp, sp, clase );

}

//con valores por defecto de los parámetros
crearJugador2( "FMA-H" );

// envio los parámetros explicitamente
crearJugador2( "FMA-W", {
  hp: 800,
  sp: 350,
  clase: "WARRIOR"
});

// EJEMPLO2 - FIN



































//
