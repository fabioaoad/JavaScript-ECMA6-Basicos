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
// Promesas


// EJEMPLO1 - INICIO

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


// EJEMPLO1 - FIN





//
