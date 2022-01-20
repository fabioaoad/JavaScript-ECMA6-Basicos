//// UNIDAD 13 ///
console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Promesas - problema



// EJEMPLO1 - PROBLEMA -  INICO


function tareaAsincrona(){

  setTimeout(function(){
    console.log("Proceso Asincrono terminado - sin promesa");
    resolve();
    //reject();
  }, 1000)

}


tareaAsincrona();

console.log("Código secuencial");


function resolve(){
  console.log("Todo OK!");
}



function reject(){
  console.log("Todo MAL!");
}


// EJEMPLO1 - PROBLEMA - FIN





console.log("////////////////////////////////////////////");
////////////////////////////////////////////
// Promesas - más ejemplos


// EJEMPLO1 - ECMAS6 - INICIO

function tareaAsincrona2(){

  let promesa = new Promise( (resolve, reject) => {
    setTimeout(function(){
          console.log("Proceso Asincrono terminado - con promesa");
          resolve();
        //    reject();
        }, 2500)
  })


  return promesa;

}


tareaAsincrona2().then( function(){
          console.log("Todo OK!");
     },
     function(){
          console.error("Todo MAL!");
      })

console.log("Código secuencial");


// EJEMPLO1 - ECMAS6 - FIN


console.log("////////////////////////////////////////////");



// EJEMPLO2 - ECMAS5 - INICIO

function msgAfterTimeout (msg, who, timeout, onDone) {
    setTimeout(function () {
        onDone(msg + " Hola " + who + "!");
    }, timeout);
}

msgAfterTimeout(" Este es un msj del ECMAS5 ", "FABIO", 3000, function (msg) {
    msgAfterTimeout(msg, "MARTIN", 4000, function (msg) {
        console.log("Hecho despues de 3000ms:" + msg);
    });
});

// EJEMPLO2 - ECMAS5 - FIN



// EJEMPLO3 - ECMAS6 - INICIO

function msgAfterTimeout2 (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hola ${who}!`), timeout)
    })
}

msgAfterTimeout2(" Este es un msj del ECMAS6 ", "FABIO", 5000).then((msg) =>
    msgAfterTimeout2(msg, "MARTIN", 6000)
).then((msg) => {
    console.log(`Hecho despues de 5000ms:${msg}`)
})

// EJEMPLO3 - ECMAS6 - FIN













//
