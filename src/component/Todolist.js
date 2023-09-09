import React from 'react'
import './Todolist.css'


function Todolist({todo,onDelete}) {
  return (
    <>
    <div className='todolist'>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
   </>
  )
}

export default Todolist