import React, { Component } from 'react'
import axios from 'axios'
import './Register.css'
import Navbar from './shared/Navbar/Navbar'
import Footer from './shared/Footer/Footer'
import { ACCOUNTS_API_URL } from '../constants'

class Registerpage extends Component {
  constructor () {
    super()
    this.state = {
      address: '',
      creditCard: '',
      email: '',
      fullName: '',
      password: '',
      userID: '',
      openBalance: '',
      confirmPassword: ''
    }
  }

  handleOnChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleRegister = (e) => {
    e.preventDefault()
    const { fullName, address, email, userID, password, confirmPassword, openBalance, creditCard } = this.state
    
      axios.post(`${ACCOUNTS_API_URL}/accounts`, {
        accountID: 0,
        balance: 0,
        creationDate: new Date(),
        lastLogin: new Date(),
        loginCount: 0,
        logoutCount: 0,
        openBalance,
        profile: {
          address,
          creditCard,
          email,
          fullName,
          password,
          userID
        },
        profileID: userID
      }).then(res => {
        console.log('res', res)
      })
    
  }

  render() {
    const { fullName, address, email, userID, password, confirmPassword, openBalance, creditCard } = this.state
    return (
      <div className='app-register-container'>
        <Navbar />
        <div className='ar-content'>
          <div className='ar-register-box'>
            <div className='form-container'>
              <form onSubmit={this.handleRegister}>
                <div className='form-group'>
                  <label>Full Name:</label>
                  <input
                    type="text"
                    className='app-register-input'
                    name='fullName'
                    onChange={this.handleOnChange}
                    value={fullName}
                  />
                </div>
                <div className='form-group'>
                <label>Address:</label>
                <input
                  type="text"
                  className='app-register-input'
                  name='address'
                  onChange={this.handleOnChange}
                  value={address}
                />
              </div>
              <div className='form-group'>
                <label>E-mail address:</label>
                <input
                  type="text"
                  className='app-register-input'
                  name='email'
                  onChange={this.handleOnChange}
                  value={email}
                />
              </div>
              <div className='form-group'>
                <label>User ID:</label>
                <input
                  type="text"
                  className='app-register-input'
                  name='userID'
                  onChange={this.handleOnChange}
                  value={userID}
                />
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input
                  type="password"
                  className='app-register-input'
                  name='password'
                  onChange={this.handleOnChange}
                  value={password}
                />
              </div>
              <div className='form-group'>
                <label>Confirm Password</label>
                <input
                  type="password"
                  className='app-register-input'
                  name='confirmPassword'
                  onChange={this.handleOnChange}
                  value={confirmPassword}
                />
              </div>
              <div className='form-group'>
                <label>Opening account balance:</label>
                <input
                  type="text"
                  className='app-register-input'
                  name='openBalance'
                  onChange={this.handleOnChange}
                  value={openBalance}
                />
              </div>
              <div className='form-group'>
                <label>Credit card number:</label>
                <input
                  type="text"
                  className='app-register-input'
                  name='creditCard'
                  onChange={this.handleOnChange}
                  value={creditCard}
                />
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