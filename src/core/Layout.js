import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
  const nav = () => (
    <ul className='nav nav-tabs bg-primary'>
      <li className='nav-item'>
        <Link to='/' className='text-light nav-link'>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/signup' className='text-light nav-link'>
          SignUp
        </Link>
      </li>
    </ul>
  )
  return (
    <Fragment>
      {nav()}
      <div className='container'>{children}</div>
      <hr style={{ marginTop: '4rem' }} />
      <footer>This is the footer</footer>
    </Fragment>
  )
}

export default Layout
