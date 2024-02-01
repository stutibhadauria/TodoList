import React, { useEffect, useState } from 'react'
import Todo from './Todo';
import AddTodo from './AddTodo';
import '../index.css'

function MainTodo() {
    let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem('todos'))
  }
  const onDelete=(todo)=>{
    console.log('i am on delete of todo',todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.getItem("todos",JSON.stringify(todos))
  }
  const addTodo=(title,desc)=>{
    console.log("I am adding this todo",title,desc);
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno+1
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo);

  }
  const[todos,setTodos]=useState([initTodo]);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <>
    <AddTodo addTodo={addTodo}/>
    <Todo todos={todos} onDelete={onDelete}/>
    </>
  )
}

export default MainTodo