import './HeaderStyle.scss'
import ButtonComponent from './ButtonComponent'
import { Link, useLocation } from 'react-router-dom'

const HeaderComponent = () => {
  const location = useLocation()

  return (
    <header>
      <div className='logo'>
        <img src='/src/assets/logo.svg' alt='My Logo' width='250px' height='40px' />
      </div>
      <ul>
        <li>
          <Link to='/' className={`link ${location.pathname === '/' && 'active'}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className={`link ${location.pathname === '/about' && 'active'}`}>
            About
          </Link>
        </li>
        <li>
          <Link to='/contact' className={`link ${location.pathname === '/contact' && 'active'}`}>
            Contact
          </Link>
        </li>
      </ul>
      <div className='header-buttons'>
        <Link to='/login' className={`link px-2 ${location.pathname === '/login' && 'active'}`}>
          Login
        </Link>
        <ButtonComponent icon='src/assets/arrow-right.svg' text='Get Started' />
      </div>
    </header>
  )
}

export default HeaderComponent
