import React from 'react'
import { type } from './../../node_modules/react-router-dom/index.d';

function Login() {
  return (
      <div className='FormContainer'>
      <div>
          <h1>Sign up</h1>
      </div>
      <div className='body'>
          <p>Enter our email id </p>
          <input type="email" placeholder='Email..'/>
          <button>Login</button>
      </div>

      </div>
    
  )
}

export default Login