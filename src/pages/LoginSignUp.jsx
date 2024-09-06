import React from 'react'
import './css/LoginSignUp.css'

function LoginSignUp() {
  return (
    <div className="login_signUp">
      <div className="login_signUp_container">
        <h1>Sign Up</h1>
        <div className="login_signUp_fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Your password" />
        </div>
        <button>Continue</button>
        <p className="login_signUp_login">
          {' '}
          Already have an account? <span></span>
          <span>Login here</span>
        </p>
        <div className="login_signUp_agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
