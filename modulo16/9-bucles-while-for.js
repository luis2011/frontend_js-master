/**
 * Bucles while and for
 *
 */


// while 
// Mientras que la condition (condición) sea true, el código del cuerpo del bucle será ejecutado.

// while (condition) {
//   // código
//   // llamado "cuerpo del bucle"
// }

// let index = 0;

// while (index < 3) { 
//   console.log( index );
//   index++;
// }

// El bucle “do…while”
// El bucle primero ejecuta el cuerpo, luego comprueba la condición, y, mientras sea un valor verdadero, la ejecuta una y otra vez.
// Esta sintaxis solo debería ser usada cuando quieres que el cuerpo del bucle sea ejecutado al menos una vez sin importar que la condición sea verdadera. Usualmente, se prefiere la otra forma: while(…) {…}.

// let i = 4;
// do {
//   console.log( i );
//   i++;
// } while (i < 3);


// for

// for (begin; condition; step) {
//   // ... cuerpo del bucle ...
// }

// for (let i = 0; i < 3; i++) { 
//   console.log(i);
// }

// begin	i = 0	Se ejecuta una vez al comienzo del bucle.
// condición	i < 3	Comprobada antes de cada iteración del bucle. Si es falsa, el bucle se detiene.
// paso	i++	Se ejecuta después del cuerpo en cada iteración pero antes de la comprobación de la condición.
// cuerpo	console.log(i)	Se ejecuta una y otra vez mientras que la condición sea verdadera.

// break and continue

// for (let i = 0; i < 10; i++) {
//   // si es verdadero, saltar el resto del cuerpo
//   if (i % 2 == 0) continue;
//   if (i === 5) break
//   console.log(i)
// }

 /*************************************
*
*             Ejercicios
*
**************************************/

console.log(`
  Usa el bucle for para mostrar usando console.log números pares del 2 al 10 inclusive.
  Remplazar este while por for (la salida debe ser la misma)
`)

let i = 0;
while (i < 3) {
  console.log( `numero ${i}!` );
  i++;
}
