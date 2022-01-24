// Promesas

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





const getEmpleado = ( id ) => {

  return new Promise( (resolve, reject ) => {

    const empleadoDB = empleados.find( empleado => empleado.id === id );

    if( !empleadoDB ){
      reject( `No existe empleado con el id: ${ id }` );
    } else {
      resolve( empleadoDB );
    }

  });

};



const getSalario = (empleado ) => {

return new Promise( (resolve, reject) => {
  const salarioDB = salarios.find( salario => salario.id === empleado.id );

  if( !salarioDB ){
    reject(`No existe un salaro para el empleado: ${ empleado.nombre }`);
  }else {
    resolve({
      nombre: empleado.nombre,
      salario: salarioDB.salario,
      id: empleado.id
    });
  }
});


};



// getEmpleado( 1 ).then( empleado => {
//   return getSalario( empleado );
// })
// .then( resp => {
//   console.log(resp);
// })
// .catch( err => console.log(err) );



// Otra forma de escribirlo. probar con id 1,2,3 y 5
getEmpleado( 1 )
  .then( getSalario )
  .then( resp = console.log)
  .catch( console.error );




//
