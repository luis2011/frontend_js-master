
/*************************************
*
*             Ejercicios
*
**************************************/

// console.log(`
//   1. Hacer un get al siguiente endpoint https://jsonplaceholder.typicode.com/users
//   2. Guardar ese arreglo en una variable
//   3. Loopear sobre ese arreglo y mostrar el email de cada usuario por consola
//   4. Obtener los usuarios que tengan id que sea mayor a 5
//   5. Obtener el usuario con el numero de telefono que sea igual a 024-648-3804
// `)

const url = "https://jsonplaceholder.typicode.com/users";



const getPosts = async () => {
  try {
    const response = await fetch(url)
    const users = await response.json()
    //   2. Guardar ese arreglo en una variable
    let newArray = users
    console.log(users)
    console.log('mostrar el email de cada usuario por consola') 
    newArray.forEach(function(item) {
            console.log(item.email)
     });

     console.log('usuarios que tengan id que sea mayor a 5') 
     newArray.forEach(function(item) {
        if(item.id > 5){
            console.log(item)
            }
        })
    
     console.log('telefono que sea igual a 024-648-3804')   
    newArray.forEach(function(item) {
            if(item.phone ==='024-648-3804'){
                console.log(item)    
            }
        })
        

  } catch(err) {
    console.log(err)
    console.log("Hubo un error intentando acceder al backend")
  }
}

let newArray =getPosts()

