
// Async - Await

const getNombre = async() => {

  return new Promise( (resolve, reject) => {

    setTimeout( () => {
      resolve('Fabio');
    }, 3000);

  });

}

//console.log( getNombre() ); // me retorna una promesa

const saludo = async() => {
  const nombre = await getNombre();
  return `Hola ${ nombre }`;
};



// getNombre().then( nombre => {
//   console.log(nombre);
// });


saludo().then( mensaje => {
  console.log(mensaje);
});
