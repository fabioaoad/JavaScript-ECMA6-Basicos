// Callback
// forma tradicional de hacer tareas tareas a destiempo.
// no son asincronos, salvo que tengan una tarea asincona a dentro
// demoran la accion de un funcion hasta que se realice una tarea antes


const getUsuarioById = ( id, callback) => {

  const usuario = {
    nombre: 'Fabio',
    id
  };

  if( id === 20 ){
    callback(`El usuario con el id ${ id }, no existe`)
  } else {
    callback( null, usuario );
  }


};




// SIN SIMULAR ERRROR
getUsuarioById( 5, (err, user) => {

  if ( err ) {
    return console.log(err);
  }

  console.log( 'Usuario de BD', user );

});

//SIMULO UN ERROR ENVIANDO ID 20
getUsuarioById( 20, (err, user) => {

  if ( err ) {
    return console.log(err);
  }

  console.log( 'Usuario de BD', user );

});
