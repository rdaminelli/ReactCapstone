import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <h1>Login</h1>
        <form>
            <h2>Username</h2>
            <input type="text" placeholder='Type your username'/>
            <br/>
            <h2>Email</h2>
            <input type="text" placeholder='Type your email'/>
            <br/>
            <h2>Password</h2>
            <input type="password" placeholder='Type your password'/>
            <button>Login</button>
            <br />
            <br />
            <hr />
            <span>
                Need an account? <Link to="/signup">Join now</Link>
            </span>
        </form>
    </div>
  )
}

export default Login
