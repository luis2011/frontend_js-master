import React, { useState } from "react"

const Comment1 = () => {
  
  const [count, setCount ] = useState(0) 
  
  // forma nro 1 de mostrar un mensaje en el html
  const [messageError, setMessageError] = useState('')

  // forma nro 2 de mostrar un mensaje en el html
  const [title, setTitle] = React.useState('')

  const addCount = () => {
    setMessageError('') // para que limpie siempre la pantalla hasta que se muestre el mensaje
    if(count < 30){
        
        setCount( count + 1 )
        setTitle('')
    }else{
      setMessageError('No se puede sumar mas de 30')
      // setTitle('No se puede sumar mas de 30')
    }
  }

  const substractCount = () => {
    setMessageError('') // para que limpie siempre la pantalla hasta que se muestre el mensaje
    if(count > 0){
         setCount( count - 1)
         setTitle('')
        }else{
          setMessageError('No se puede restar cuando llega a Cero') 
          // setTitle('No se puede restar cuando llega a Cero')
    }

    
  }

  


  return <div className="App">
    <h1>Counter</h1>
    <p><b>{ count }</b></p>
    <br />
    <p>{title}</p>
    <br />
    <button onClick={addCount}>Sumar</button>
    <button onClick={substractCount}>Restar</button>
    <p>{messageError}</p>
  </div>
}

export default Comment1
