import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer/Footer'

const Login = () => {
  return (
    <div className='app-login-container'>
      <Navbar />
      <div className='al-content'>
        <div className='al-login-box'>
          <div className='form-container'>
            <form>
              <div className='form-group'>
                <label>Username</label>
                <input type="text" placeholder='Username' className='app-login-input' />
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input type="password" placeholder='Password' className='app-login-input' />
              </div>
              <div className='form-group'>
                <button className='app-login-button'>Login</button>
              </div>
              <div className='form-group'>
                <p>First time user ? Please <Link to='/Register'>Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login