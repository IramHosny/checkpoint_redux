import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './components/TodoListt';
import { useState } from 'react';
import AddTodo from './AddTodo';
function TodoListt() {
    const todos= useSelector((state)=>state.todo.todolist);
    const [showdone, setshowdone] = useState(false)
  return (
    <div>
      <AddTodo/>
      <button onClick={()=>setshowdone(!showdone)}>{showdone?"show undone":"show done"}</button>
        {todos.filter((todo)=>todo.isDone===showdone).map((todo)=>(
        <TodoItem/>))}
    </div>
  )
}

export default TodoListt