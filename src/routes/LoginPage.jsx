import { Link } from 'react-router-dom'
import ButtonComponent from '../components/ButtonComponent'
import '../styles/LoginStyle.scss'

const LoginPage = () => {
  return (
    <div className='login-form'>
      <div className='login-div'>
        <img className='cube-img' width={49} height={54} src='/src/assets/mentor-cube-2.svg' />
        <h2 className='text-login'>Log in to mentor token </h2>
        <p className='text-paragraph'>Enter your email and pass to login.</p>

        <div className='login-inputs'>
          <div className='login--input--div'>
            <label className='login--label'>Email</label>
            <input className='input_con' type='email' placeholder='mentortokent@semos.com' />
          </div>
          <div className='login--input--div'>
            <input className='input_con' type='password' placeholder='Password' />
          </div>

          <ButtonComponent className='login---button' text='Log in' />

          <span className='span--register'>
            Don’t have account?{' '}
            <Link className='link-active' to='/register'>
              Register.
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
