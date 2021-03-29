/**
 * Objects
 *
 */

// let user = new Object(); // sintaxis de "construtor de objetos"
// let anotherUser = {};  // sintaxis de "objeto literal"

// let user = {     // un objeto
//   name: "John",  // En la clave "name" se almacena el valor "John"
//   age: 30        // En la clave "age" se almacena el valor 30
// };

// console.log(user.name)
// console.log(user.age)

// user.isAdmin = true

// console.log(user)

// delete user.isAdmin

// console.log(user)

// Corchetes, notacion
// let user = {}

// user['another property'] = 123
// user.another = 123
// console.log(user)

// Bucle - for in

// for (key in object) {
//   // se ejecuta el cuerpo para cada clave entre las propiedades del objeto
// }

// let user = {
//   name: "Fran",
//   age: 31,
//   isAdmin: true
// };

// for (let key in user) {
//   // claves
//   // console.log( key );  // name, age, isAdmin
//   // valores de las claves
//   console.log( user[key] ); // Fran, 31, true
// }

/*************************************
*
*             Ejercicios
*
**************************************/

// console.log(`
//   1. Escribe el código, una línea para cada acción:
//           Crea un objeto user vacío.
//           Agrega la propiedad name con el valor John.
//           Agrega la propiedad surname con el valor Smith.
//           Cambia el valor de name a Pete.
//           Remueven la propiedad name del objeto.
//   2. Mostrar un console log con la suma de los salaries del objeto 2
//   3. Crea una función multiplyNumeric(obj) que multiplique todas las propiedades numéricas de obj por 2. (P.D. Usa typeof para verificar si hay un número aquí.)
// `)

// // 2.
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// 3
// Antes de la llamada
// let menu = {
//   width: 200,
//   height: 300,
//   title: "Mi menú"
// };

// multiplyNumeric(menu);

// Después de la llamada console.log(menu) deberia devolver { width: 400, height: 600, title: 'Mi menú' }



//RESOLUCION DE EJERCICIOS 

//NUMBER ONE
//let objeto = {}
//objeto['name'] = 'John'
//objeto['surname'] ='Smith'
//objeto['name'] = 'Pete'
//delete objeto.name
//console.log(objeto)

//NUMBER TWO
//let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum=0
//for (const key in salaries) {
//    sum = sum + salaries[key]
//}
//console.log(sum)

//NUMBER THREE
/*
let menu = {
       width: 200,
       height: 300,
       title: "Mi menú"
     };
 
 function multiplyNumeric(menu){   
        for (let key in menu){
          //console.log(typeof menu[key])
          if (typeof menu[key]==='number'){
            menu[key] = menu[key]*2
          }
        }    
      }   
     
multiplyNumeric(menu);

console.log(menu)
*/
