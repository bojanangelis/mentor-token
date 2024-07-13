import { Link } from 'react-router-dom'
import './FooterStyles.scss'

const FooterComponent = () => {
  return (
    <footer className='footer-component'>
      <div className='max-width-2xl main-footer'>
        {/* zavrsheno */}
        <div className='logo mentor-footer-text'>
          <img src='/src/assets/logo.svg' alt='My Logo' width='250px' height='40px' />
          <p>With Mentor Token, every failure transforms into an opportunity for growth.</p>
        </div>

        <div>
          <h2 className='py-2'>Page</h2>
          <div className='footer-div-links'>
            <Link className='link-footer' to='/'>
              Home
            </Link>
            <Link className='link-footer' to='/contact'>
              Contact us
            </Link>
          </div>
        </div>
        <div>
          <h2 className='py-2'>Contact</h2>
          <div className='footer-div-links'>
            <Link className='link-footer' to='/'>
              info@mentortoken.com
            </Link>
            <Link className='link-footer' to='/'>
              + ( 389 ) 123 456 789
            </Link>
          </div>
        </div>
        <div>
          <h2>Follow Us</h2>
          <div className='py-2'>
            <img
              className='px-2'
              src='/src/assets/linkedin.svg'
              alt='Linkedin'
              width='50px'
              height='50px'
            />
            <img
              className='px-2'
              src='/src/assets/twiter.svg'
              alt='Twiter'
              width='50px'
              height='50px'
            />
            <img
              className='px-2'
              src='/src/assets/facebook.svg'
              alt='Facebook'
              width='50px'
              height='50px'
            />
          </div>
        </div>
      </div>
      <div className='footer-bottom-part max-width-2xl'>
        <p>©2024 Mentor Token. All right reserved.</p>
      </div>
    </footer>
  )
}

export default FooterComponent
