import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../core/Layout'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const Signup = () => {
  return (
    <Layout>
      <ToastContainer />
      <h1>Sign Up</h1>
    </Layout>
  )
}

export default Signup
