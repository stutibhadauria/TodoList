import React, { useState } from 'react'
import './AddTodo.css';

function AddTodo({props,addTodo}) {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit=(e)=>{
       e.preventDefault();
       if(!title || !desc){
         alert("Title or Description cannot be blank")
       }
       else{
      addTodo(title,desc);
      setTitle("");
      setDesc("");
       }
    }
  return (
    <div className='container addtodo'>
        <h3>Add a todo</h3>
        <form onSubmit={submit}>
            <div className='form'>
            <div className='mb-3'>
                <input type='text' placeholder='Enter title' value={title} className='form-control' onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div className='mb-3'>
                <input type='text' placeholder='Enter description'value={desc} className='form-control'onChange={(e)=>setDesc(e.target.value)}/>
            </div>
            </div>
            <button type='submit'>Add todo</button>
        </form>
    </div>
  )
}

export default AddTodo