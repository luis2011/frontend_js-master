/**
 * Operadores Lógicos
 *
 */

// OR Encuentra el primer valor verdadero
// Si un operando no es un booleano, se lo convierte a booleano para la evaluación.

// console.log(true || true); 
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// Por ejemplo, el número 1 es tratado como true, el número 0 como false:

// if (1 || 0) { // Funciona como if( true || false )
//   console.log("valor verdadero!");
// }

// let hour = 9;

// if (hour < 10 || hour > 18) {
//   console.log( 'La oficina esta cerrada.' );
// }

// console.log(1 || 0); // 1 (1 es un valor verdado)

// console.log(null || 1); // 1 (1 es el primer valor verdadero)
// console.log(null || 0 || 1); // 1 (el primer valor verdadero)

// console.log(undefined || null || 0); // 0 (todos son valores falsos, retorna el último valor)


// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder


// AND - Encuentra el primer valor false
// El operador AND es representado con dos ampersands &&:

// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//   console.log("La hora es 12:30");
// }

// Al igual que con OR, cualquier valor es permitido como operando de AND:

// if (1 && 0) { // evaluado como true && false
//   console.log( "no funcionará porque el resultado es un valor falso" );
// }

// ! (NOT) Devuelve el valor contrario convertido a boolean
// El operador booleano NOT se representa con un signo de exclamación !.

// console.log(!true); // false
// console.log(!0); // true

// console.log(!!"cadena de texto no vacía"); // true
// console.log(!!null); // false

// console.log(Boolean("cadena de texto no vacía")); // true
// console.log(Boolean(null)); // false


 /*************************************
*
*             Ejercicios
*
**************************************/

console.log(`
  ¿Cuál es el resultado de OR?

  console.log( null || 2 || undefined )

  ¿Cuál es el resultado de AND?
  console.log( 1 && null && 2 )

  ¿Cuál es el resultado de ! NOT?
  console.log( !'Hola' )

  El resultado de OR AND OR
  console.log( null || 2 && 3 || 4 )
`)