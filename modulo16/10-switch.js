/**
 * Switch
 *
 */

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     console.log( 'Muy pequeño' );
//     break;
//   case 4:
//     console.log( '¡Exacto!' );
//     break;
//   case 5:
//     console.log( 'Muy grande' );
//     break;
//   default:
//     console.log( "Desconozco estos valores" );
// }

// Cualquier expresión puede ser un argumento switch/case

// let a = "1";
// let b = 0;

// switch (+a) {
//   case b + 1:
//     console.log("esto se ejecuta, porque +a es 1, exactamente igual b+1");
//     break;

//   default:
//     console.log("esto no se ejecuta");
// }

// Agrupar cases

// let a = 2 + 2;

// switch (a) {
//   case 4:
//     console.log('¡Correcto!');
//     break;

//   case 3:                   
//   case 5:
//     console.log('¡Incorrecto!');
//     console.log("¿Por qué no tomas una clase de matemáticas?");
//     break;

//   default:
//     console.log('El resultado es extraño. Realmente.');
// }

// El type importa


// let myValue = "Some Value" // "0" , 0

// switch (myValue) {
//   case '0':
//   case '1':
//     console.log( 'Uno o cero' );
//     break;

//   case '2':
//     console.log( 'Dos' );
//     break;

//   case 3:
//     console.log( '¡Nunca ejecuta!' );
//     break;
//   default:
//     console.log( 'Un valor desconocido' );
// }

/*************************************
*
*             Ejercicios
*
**************************************/

console.log(`
  1. Escribe el código utilizando if..else que corresponda al siguiente switch:
  2. Reescribe el código utilizando solo un argumento switch:
`)

// 1
switch (navegador) {
  case 'Edge':
    console.log( "¡Tienes Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    console.log( 'Esta bien, soportamos estos navegadores también' );
    break;

  default:
    console.log( '¡Esperamos que esta página se vea bien!' );
}

// 2
let a = 1

if (a == 0) {
  console.log( 0 );
}
if (a == 1) {
  console.log( 1 );
}

if (a == 2 || a == 3) {
  console.log( '2,3' );
}