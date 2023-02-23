import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
        <div className='login'>
            <h1>Create account</h1>
            <form>
                <h2>Username</h2>
                <input type="text" placeholder='Type your username'/>
                <br/>
                <h2>Email</h2>
                <input type="text" placeholder='Type your email'/>
                <br/>
                <h2>Password</h2>
                <input type="password" placeholder='Type your password'/>
                <button>Create account</button>
                <br />
                <br />
                <hr />
                <span>
                    Have an account? <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
  )
}

export default Signup