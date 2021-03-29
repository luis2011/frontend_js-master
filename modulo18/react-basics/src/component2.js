import React, { useState } from "react"

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const [todoValue, setTodoValue] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    setTodos((prevState) => [...prevState, todoValue])
    setTodoValue('')
  }

  const removeTodo = (todoToRemove) => {
    console.log(todoToRemove)
    console.log("Se clickeo")
    const newTodos = todos.filter( (todo) => todo !== todoToRemove)
    setTodos(newTodos)
  }

  return <div className="App">
    <h1>Todos List</h1>
    <br /><br />
    <form onSubmit={addTodo}>
      <input value={todoValue} onChange={ (e) => setTodoValue(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>

    {
      todos.map( (todo, i) => {
        return <div key={todo + i} className="list-todo">
          <h3>{ todo }</h3>
          <span className="remove-todo" onClick={() => removeTodo(todo)}>x</span>
        </div>
      })
    }
</div>
}

export default TodoList