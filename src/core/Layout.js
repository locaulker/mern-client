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
    </ul>
  )
  return (
    <Fragment>
      {nav()}
      <div className='container'>{children}</div>
      <footer>This is the footer</footer>
    </Fragment>
  )
}

export default Layout