import React from 'react'
import './Todolist.css'


function Todolist({todo,onDelete}) {
  return (
    <>
    <div className='todolist'>
      <h4 className='text-white'>{todo.title}</h4>
      <p className='text-white'>{todo.desc}</p>
      <button onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
   </>
  )
}

export default Todolist