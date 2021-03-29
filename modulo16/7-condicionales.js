/**
 * Condicionales
 *
 */

// La sentencia if(...) evalúa la condición en los paréntesis, y convierte el resultado en booleano si el resultado es true ejecuta un bloque de código.

// const age = 31

// if (age > 18) { console.log('Eres mayor de edad')} 
// else if (age < 18) { console.log('Eres menor de edad')} 
// else { console.log('TIenes 18 años !!')}

// El número 0, un string vacio "", null, undefined, y NaN se convierte en false. Por esto son llamados valores “falso”.
// El resto de los valores se convierten en true, entonces los llamaremos valores “verdadero”.

// if (0) { // 0 es falso
//   console.log("esto nunca se ejecutará")
// }

// if (1) { // 1 es verdadero
//   console.log("esto siempre se ejecutará")
// }

// if (age >= 18) {
//   console.log("Sos mayor de 18 años")
// }

// if (age >= 21) {
//   console.log("Sos mayor de 21 años")
// } else {
//   console.log("Sino")
// }


/**
 * Operadores Ternarios
 *
 */

// Nos permite ejecutar esto en una forma más corta y simple.

// const age = 12;
// age > 18 ? console.log('Eres mayor de edad !') : console.log('Eres menor de edad')

// Multiple ternarios

// let age = 101;

// let message = (age < 3) ? '¡Hola, bebé!' :
//   (age < 18) ? '¡Hola!' :
//   (age < 100) ? '¡Felicidades!' :
//   '¡Qué edad tan inusual!';

// console.log(message)

 /*************************************
*
*             Ejercicios
*
**************************************/

console.log(`
  Escribir la siguiente pregunta usando (if, else) y el operador ternario partiendo de la siguiente variable

  let password = "myOldPassword"

  Pregunta:
  Esta contraseña es igual a "MyPassword1234" si es asi mostrar un console.log con el mensaje "Logged In" sino escribir
  un console.log con el mensaje "Wrong Password"

  2. Reescriba esta condición if usando el operador ternario '?':
  
`)
