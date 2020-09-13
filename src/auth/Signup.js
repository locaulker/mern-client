import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../core/Layout'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    buttonText: 'Submit',
  })

  const { name, email, password, buttonText } = values

  const handleChange = name => event => {
    //
  }

  const clickSubmit = event => {
    //
  }

  const signupForm = () => (
    <form>
      <div className='form-group'>
        <label htmlFor='name' className='text-muted'>
          Name
        </label>
        <input
          onChange={handleChange('name')}
          type='text'
          className='form-control'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='email' className='text-muted'>
          eMail
        </label>
        <input
          onChange={handleChange('email')}
          type='email'
          className='form-control'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='' className='text-muted'>
          Password
        </label>
        <input
          onChange={handleChange('password')}
          type='password'
          className='form-control'
        />
      </div>

      <div>
        <button className='btn btn primary' onClick={clickSubmit}>
          {buttonText}
        </button>
      </div>
    </form>
  )

  return (
    <Layout>
      <ToastContainer />
      <h1>Sign Up</h1>
      {signupForm()}
    </Layout>
  )
}

export default Signup
