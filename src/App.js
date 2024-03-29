import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import MainTodo from './component/MainTodo';

function App() {
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
  {/* <AddTodo addTodo={addTodo}/>
  <Todo todos={todos} onDelete={onDelete}/> */}
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/todo' element={<MainTodo/>}/>
  </Routes>
  </>
  );
}

export default App;
