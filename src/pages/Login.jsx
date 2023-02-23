import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import "../login.css"
import logo from "../assets/Rectangle 6.png"
const Login = () => {
  
  return (
  
    <div className='loginContainer'>
      <img className='image' src={logo} alt="" />
    <div className="loginForm">
      
    <p className='loginSubTitle'>Sign In</p>
    <p className='loginDetails'>(Admin or Employee Sign In)</p>
      
    <div className='formContain'>
      <label htmlFor="">Your Email</label>
      <input type="email" placeholder='email@address.com' 
      
    
      
      />
    <div>
    <label htmlFor="">Your Password</label>
    
    </div>
      <input type="password" placeholder='+6 characters required' 
     
      
      />

      <div className='r'>
        
        <input type="checkbox" name="" id="" />
        <p>Remember me</p>
      </div>
    
      <button >Sign in</button>
    </div>
    
    
    
    
    
    </div>
    
    
    
    
        </div>
    
  )
}

export default Login