import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer/Footer'


class Registerpage extends Component {
  render() {
    return (
      <div className='app-register-container'>
        <Navbar />
        <div className='ar-content'>
          <div className='ar-register-box'>
            <div className='form-container'>
              <form>
                <div className='form-group'>
                  <label>Full Name:</label>
                  <input type="text" className='app-register-input' />
                </div>
                <div className='form-group'>
                <label>Address:</label>
                <input type="text" className='app-register-input' />
              </div>
              <div className='form-group'>
                <label>E-mail address:</label>
                <input type="text" className='app-register-input' />
              </div>
              <div className='form-group'>
                <label>User ID:</label>
                <input type="text" className='app-register-input' />
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input type="password" className='app-register-input' />
              </div>
              <div className='form-group'>
                <label>Confirm Password</label>
                <input type="password" className='app-register-input' />
              </div>
              <div className='form-group'>
                <label>Opening account balance:</label>
                <input type="text" className='app-register-input' />
              </div>
              <div className='form-group'>
                <label>Credit card number:</label>
                <input type="text" className='app-register-input' />
              </div>
              <div className='form-group'>
                <label></label>
                <input type="submit" className='app-register-input submit-button' value='Submit Registration' />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
  }
}
export default Registerpage