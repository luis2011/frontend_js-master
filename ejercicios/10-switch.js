/*
console.log(`
  1. Escribe el código utilizando if..else que corresponda al siguiente switch:
  2. Reescribe el código utilizando solo un argumento switch:
`)
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
}*/


let navegador =''
if(navegador==='Edge'){
    console.log( "¡Tienes Edge!" );
   
}else if(navegador==='Chrome' || navegador==='Firefox' || navegador ==='Safari' || navegador==='Opera'){
    console.log( 'Esta bien, soportamos estos navegadores también' );
    
}else{
    console.log( '¡Esperamos que esta página se vea bien!' );
}


/*
let a = 1

if (a == 0) {
  console.log( 0 );
}
if (a == 1) {
  console.log( 1 );
}

if (a == 2 || a == 3) {
  console.log( '2,3' );
}*/

let a = 2
switch (a) {
    case 0:
      console.log( '0' );
      break;
    case 1:
      console.log( '1' );
      break;
    case 2:
        console.log( '2,3' );
        break;
    case 3:
        console.log( '2,3' );
      break;
      default:
        console.log( 'Intenta con otros numeros!' );
    }