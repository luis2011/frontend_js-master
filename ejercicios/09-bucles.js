/*
console.log(`
  Usa el bucle for para mostrar usando console.log números pares del 2 al 10 inclusive.
  Remplazar este while por for (la salida debe ser la misma)
`)*/

/*let i = 0;
while (i < 3) {
  console.log( `numero ${i}!` );
  i++;
} 
 
for (i=1; i<=10; i++){
    if (i%2===0){
      console.log( `numero ${i}` );
    }
}*/

for (i=1; i<=10; i++){
  (i%2===0)?console.log( `numero ${i}`):null
}
