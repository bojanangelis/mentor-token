import { Link, useNavigate } from 'react-router-dom'
import ButtonComponent from '../components/ButtonComponent'
import '../styles/LoginStyle.scss'
import { useState } from 'react'

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)

  const handleLogin = async () => {
    try {
      const loginData = await fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
      const data = await loginData?.json()
      if (data) {
        localStorage.setItem('token', data?.token)
        setMessage(data?.message)
        if (data.message === 'Login successfully') {
          navigate('/dashboard')
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='login-form'>
      <div className='login-div'>
        <img className='cube-img' width={49} height={54} src='/src/assets/mentor-cube-2.svg' />
        <h2 className='text-login'>Log in to mentor token </h2>
        <p className='text-paragraph'>Enter your email and pass to login.</p>

        <div className='login-inputs'>
          <div className='login--input--div'>
            <label className='login--label'>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='input_con'
              type='email'
              placeholder='mentortokent@semos.com'
            />
          </div>
          <div className='login--input--div'>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='input_con'
              type='password'
              placeholder='Password'
            />
          </div>

          {message && (
            <p style={{ color: `${message === 'Login successfully' ? 'green' : 'red'}` }}>
              {message}
            </p>
          )}

          <ButtonComponent onClick={handleLogin} className='login---button' text='Log in' />

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
