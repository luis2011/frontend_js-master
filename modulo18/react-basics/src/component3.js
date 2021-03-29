import React, { useState } from "react"
import check from "../src/img/check.svg"
import checked from "../src/img/checked.svg"
//import check from "../img/check.svg"
//import checked from "../img/checked.svg"

const TodoList = () => {
  const [todos, setTodos] = useState([ { id: 123, checked: false, title: 'Estudiar Javascript' } ])
  const [todoValue, setTodoValue] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    const newTodo = { title: todoValue, checked: false, id: Math.floor(Math.random() * 100) + 1 };
    setTodos((prevState) => [...prevState, newTodo])
    setTodoValue('')
  }

  const removeTodo = (todoId) => {
    const newTodos = todos.filter( (todo) => todo.id !== todoId)
    setTodos(newTodos)
  }

  const checkTodo = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          title: todo.title,
          checked: !todo.checked,
          id: todo.id
        }
      }
      return todo
    })
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
        return <div key={todo.id} className="list-todo">
          <h3>{ todo.title }</h3>
          { todo.checked }
          <span className="checked-todo" onClick={() => checkTodo(todo.id)}>
            <img src={todo.checked ? checked : check} alt="check" />
          </span>
          <span className="remove-todo" onClick={() => removeTodo(todo.id)}>x</span>
        </div>
      })
    }
</div>
}

export default TodoList
