// Callback
// forma tradicional de hacer tareas tareas a destiempo.
// no son asincronos, salvo que tengan una tarea asincona a dentro
// demoran la accion de un funcion hasta que se realice una tarea antes

// EJEMPLO1 - INICIO

const empleados = [
  {
  id:1,
  nombre: 'Fabio'
  },
  {
  id:2,
  nombre: 'Martin'
  },
  {
  id:3,
  nombre: 'Aoad'
  }
];


const salarios = [
  {
  id:1,
  salario: 1000
  },
  {
  id:2,
  salario: 2000
  }
];





const getEmpleado = ( id, callback) => {

  const empleadoDB = empleados.find( empleado => empleado.id === id );

  if( !empleadoDB ){
    callback( `No existe empleado con el id: ${ id }` );
  } else {
    callback( null, empleadoDB );
  }

};









// id de la persona
//err:
// No se encontró un salario para el nombre del empleado
//si existe:
// {
//   nombre: 'Fabio',
//   salario: 1000,
//   id: 1
// }

const getSalario = (empleado, callback) => {

const salarioDB = salarios.find( salario => salario.id === empleado.id );

if( !salarioDB ){
  callback(`No existe un salaro para el empleado: ${ empleado.nombre }`);
}else {
  callback( null, {
    nombre: empleado.nombre,
    salario: salarioDB.salario,
    id: empleado.id
  });
}


};




// uso

getEmpleado( 1, (err, empleado) => {
  if( err ){
    return console.log(err);
  }
  getSalario( empleado, (err, resp) => {
    if( err ){ return console.log(err); }
    console.log(`El Salario de ${ resp.nombre } es de ${ resp.salario }`);
  });
});

console.log('////////////////////////////////////////////////////////////');

getEmpleado( 2, (err, empleado) => {
  if( err ){
    return console.log(err);
  }
  getSalario( empleado, (err, resp) => {
    if( err ){ return console.log(err); }
    console.log(`El Salario de ${ resp.nombre } es de ${ resp.salario }`);
  });
});


console.log('////////////////////////////////////////////////////////////');


getEmpleado( 3, (err, empleado) => {
  if( err ){
    return console.log(err);
  }
  getSalario( empleado, (err, resp) => {
    if( err ){ return console.log(err); }
    console.log(`El Salario de ${ resp.nombre } es de ${ resp.salario }`);
  });
});

// EJEMPLO1 - FIN



//
