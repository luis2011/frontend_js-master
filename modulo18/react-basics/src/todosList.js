import React, { useState } from "react"
import check from "../src/img/check.svg"
import checked from "../src/img/checked.svg"

const TodoList = () => {
    // atencion: un objeto se carga dentro de array para usar useState
    // aqui inicializo el useState con un valor
    // la variable todos se guarda y la utilizo en removetodo
  const [todos, setTodos] = useState([{id:123,checked:false, title:'Estudiar Javascript'}]);
  
  const [todoValue, setTodoValue] = useState('')


  const addTodo = (e) => {
    e.preventDefault()
    // contruye todo el objeto y lo guarda en newTodo, le suma a todos el newtodo
    const newTodo = { title: todoValue, checked: false, id: Math.floor(Math.random() * 100) + 1 };
    setTodos((prevState) => [...prevState, newTodo])
    setTodoValue('')
  }



    // aqui le paso el todo.id y recorro el todos verificando  todo.id !== todoId
  const removeTodo = (todoId) => {
    const newTodos = todos.filter( (todo) => todo.id !== todoId)
    setTodos(newTodos) // aqui me devuelve un nuevo array con todos los id distintos de todo.id
  }

  const checkTodo = (todoId) => {
   const newTodos = todos.map((todo)=>{
       if (todo.id===todoId){
           // aqui retorno una copia de todos pero con el checked a true
           return {
               title:todo.title,
               //checked: true, 
               // si es true lo pone el false y viseversa
               checked:!todo.checked,
               id: todo.id
           }
       }else{
           //si no puede realizar el cambio regresa el todo original
           return todo
       }
   }) 
   setTodos(newTodos)
}



  // desde aqui se muestra el html
  return <div className="App">
    <h1>Todos List</h1>
    <br /><br />
    <form onSubmit={addTodo}>
      <input value={todoValue} onChange={ (e) => setTodoValue(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>

    {
      todos.map( (todo, i) => {
        // recorre el todo que es un array que dentro tiene un objeto con sus atributos 
        return <div key={todo.id} className="list-todo">
          <h3>{ todo.title }</h3>
          {todo.checked}
          <span className="checked-todo" onClick={() => checkTodo(todo.id)}>
          <img src={todo.checked ? checked : check} alt="check" />
          </span>
          <span className="remove-todo" onClick={() => removeTodo(todo.id)}>x</span>
        </div>
        
        // y aqui termina todo el retorno
      })
    }
</div>
// hasta aqui
}

export default TodoList