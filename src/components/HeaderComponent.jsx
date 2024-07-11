import React from 'react'
import './HeaderStyle.scss'
import ButtonComponent from './ButtonComponent'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <header>
      <div className='logo'>
        <img src='/src/assets/logo.svg' alt='My Logo' width='250px' height='40px' />
      </div>
      <ul>
        <li>
          <Link to='/' className='link'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='link'>
            About
          </Link>
        </li>
        <li>
          <Link to='/contact' className='link'>
            Contact
          </Link>
        </li>
      </ul>
      <div className='header-buttons'>
        <Link to='/login' className='link px-2'>
          Login
        </Link>
        <ButtonComponent icon='src/assets/arrow-right.svg' text='Get Started' />
      </div>
    </header>
  )
}

export default HeaderComponent
