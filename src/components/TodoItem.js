import React from 'react'
import { useDispatch } from 'react-redux'
import { doneTask, removeTask } from '../redux/todoSlice/todoSlice'
import EditTask from './EditTask'

function TodoItem({todo}) {
  const dispatch = useDispatch()
  return (
    <div className={`todoitem ${todo.isDone?  "done" : "undone"}`}>
      <div className='text'>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      </div>
      <span onClick={()=> dispatch(doneTask({id:todo.id}))}>{todo.isDone ? "Done":"Not Done"}</span>
      <EditTask id={todo.id}/>
      <button onClick={()=> dispatch(removeTask({id:todo.id}))}>remove</button>
      
    
    </div>
  )
}

export default TodoItem