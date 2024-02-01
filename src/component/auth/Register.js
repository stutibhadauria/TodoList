import React, { useState } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Register.css'
import { Link } from 'react-router-dom'

function Register() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[phone,setPhone]=useState('')
    const[address,setAddress]=useState('')
    const[question,setQuestion]=useState('')
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(name,email,password,phone,address,question);
        
        try {
            const res=await axios.post('/api/v1/auth/register',{name,email,password,phone,address,question})
            if(res.data.success){
                toast.success(res.data.message)
                navigate('/')
            }
            else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
    }
  return (
    <div className='reg'>
    <div className='container-fluid'>
      <div className='row'>
    <div className='col-md-3'></div>
    <div className='col-md-6'>
    <form className='row g-3'onSubmit={handleSubmit}>
      <div className='col-12 mb-3'>
      <h4> Not Registered yet? please <Link to='/'>Sign up</Link></h4>
      </div>
    <div className="col-md-6 mb-3">
        
        <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} required/>
      </div>
      <div className="col-md-6 mb-3">
       
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder='Enter your email' value={email}  onChange={(e)=>setEmail(e.target.value)} required/>
      </div>
      <div className="col-12 mb-3">
        
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
      </div>
      <div className="col-12 mb-3">
        
        <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter your phone' value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
      </div>
      <div className="col-12 mb-3">
       
        <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter your address' value={address} onChange={(e)=>setAddress(e.target.value)} required/>
      </div>
      <div className="col-12 mb-3">
       
        <input type="text" className="form-control" id="exampleInputPassword1" placeholder='What is your Favourite sport' value={question} onChange={(e)=>setQuestion(e.target.value)} required/>
      </div>
      <button type="submit" className="btn btn-outline-warning mb-3">Submit</button>
    </form>
    </div>
    </div>
    </div>
  </div>
  )
}

export default Register