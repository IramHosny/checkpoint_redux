import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/todoSlice/todoSlice';

function AddTodo() {
  const dispatch= useDispatch();
  const [Task, setTask] = useState({
    id:Math.random(),
    title:"",
    description:"",
    isDone:false,
  });
  return (
    <div className='add-task'>
      <input type='texte' placeholder='enter task title' onChange={(e)=>{setTask({...Task,title:e.target.value})}}  />
      <input type='texte' placeholder='enter task description'  onChange={(e)=>{setTask({...Task,description:e.target.value})}}/>
      <button onClick={()=>dispatch(addTask(Task))}> Add new task </button>
      </div>
  )
}
    
  


export default AddTodo