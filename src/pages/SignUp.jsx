import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import "../login.css"
const SignUp = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/overview")
    } catch (error) {
      console.log(error);
    }
  };
  return (
  
    <div className='loginContainer'>
<div className="loginForm">
  <div className="logoBackGround">
<div className='logo'></div>
  </div>

  <p className='loginTitle'>Dashboard Kit</p>
<p className='loginSubTitle'>Sign Up to Dashboard Kit</p>
<p className='loginDetails'>Enter your email and password below</p>
  
<div className='formContain'>
  <label htmlFor="">Email</label>
  <input type="email" placeholder='Email address' 
                  onChange={(e) => setEmail(e.target.value)}
  
  />
<div className='pass'>
<label htmlFor="">Password</label><small className='smallText'>Forgot password?</small>

</div>
  <input type="password" placeholder='Password' 
                  onChange={(e) => setPassword(e.target.value)}
  
  />

  <button onClick={handleSubmit}>Sign up</button>
</div>



<div className='formFooter'>
<p>Already have an account? </p> 

<Link to="/login" className='ll'><p className='highlight'>Log in</p>
</Link>


</div>

</div>




    </div>
   
    
  )
}

export default SignUp