import React from 'react'
import './Todo.css'
import Todolist from './Todolist'

function Todo(props) {
  return (
    <>
    <div className='container todo'>
        <h3 className='text-center'>Todo List</h3>
        {props.todos.length===0?"No Todos to display":
        props.todos.map((todo)=>{
            return <Todolist todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })}  
    </div>
    </>
  )
}

export default Todo