import React from 'react'
import "../login.css"
const Login = () => {
  return (
  
    <div className='loginContainer'>
<div className="loginForm">
  <div className="logoBackGround">
<div className='logo'></div>
  </div>

  <p className='loginTitle'>Dashboard Kit</p>
<p className='loginSubTitle'>Log in to Dashboard Kit</p>
<p className='loginDetails'>Enter your email and password below</p>
  
<div className='formContain'>
  <label htmlFor="">Email</label>
  <input type="email" placeholder='Email address' />
<div className='pass'>
<label htmlFor="">Password</label><small className='smallText'>Forgot password?</small>

</div>
  <input type="password" placeholder='Password' />

  <button>Log in</button>
</div>



<div className='formFooter'>
<p>Dont have an account? </p> <p className='highlight'>Sign up</p>

</div>

</div>




    </div>
   
    
  )
}

export default Login