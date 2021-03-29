/**
 * Arrays
 *
 */
// Existe una estructura llamada Array (llamada en español arreglo o matriz/vector) para almacenar colecciones ordenadas.

// let arr = new Array();
// let arr = [];

// inciar un arreglo con data

// const fruits = ["Apple", "Orange", "Pear"]

// console.log(fruits)

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

// fruits[0] = "Pear"

// console.log(fruits)

// mezcla de valores
// let arr = [ 
//   'Apple', 
//   { name: 'John' },
//   true,
//   function() { console.log('hello') }
// ];

// console.log(arr[3]())

// Metodo pop y push trabajan con el final del array
// pop toma un elemento desde el final. muta el array original
// push inserta un elemento al final. muta el array original

// let fruits = ["Apple", "Orange", "Pear"];

// console.log(fruits.pop())

// console.log(fruits)

// fruits.push('Banana')

// console.log(fruits)


// Metodo shift y unshift trabajan con el principio del array
// shift extrae el primer elemento del array y lo devuelve
// unshift agrega el elemento al principio del array

// fruits.shift() 
// console.log( fruits );

// fruits.unshift('Banana')
// console.log(fruits)

// fruits.unshift(['uno', 'dos'])


 /*************************************
*
*             Ejercicios
*
**************************************/

// console.log(`
//   1. Tenemos 5 operaciones de array.
//         Crear un array con los items “Jazz” y “Blues”. // Jazz, Blues
//         Agregar “Rock-n-Roll” al final. // Jazz, Blues, Rock-n-Roll
//         Reemplazar el valor en el medio por “Classics”. // Jazz, Classics, Rock-n-Roll
//         Colocar primero Rap y Reggae al array. // Rap, Reggae, Classics, Rock-n-Roll
//   2. Sumar los valores del siguiente Array 
//         [12, 45, 32, 56, 190]
// `)

//NUMBER ONE
let arr= ['Jazz' ,'Blue']
console.log(arr)
arr.push('Rock-n-Roll')
console.log(arr)
arr[1]='Classics'
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift('Reggae')
arr.unshift('Rap')
console.log(arr)

//NUMBER TWO
let arr1 = [12, 45, 32, 56, 190]
let sumar=0
for (const key in arr1) {
    sumar = sumar + arr1[key]
}
console.log(sumar)