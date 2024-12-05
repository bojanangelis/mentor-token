import React, { useEffect, useState } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/RegisterStyle.scss'

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [activeBtn, setActiveBtn] = useState('Startup')

  const [flags, setFlags] = useState({
    emailAndPassword: false,
    least8Char: false,
    containsNumOrSim: false,
  })

  useEffect(() => {
    const check = /[0-9!-/:-@[-`{-~]/
    const containsNumOrSim = check.test(password)
    const emailAndPassword = email !== password
    const least8Char = password.length >= 8

    // Update flags accordingly
    setFlags({
      ...flags,
      containsNumOrSim,
      emailAndPassword,
      least8Char,
    })
  }, [email, password])

  const handleContinueButton = () => {
    if (activeBtn === 'Startup') {
      navigate('/setup-account')
    }
    if (activeBtn === 'Mentor') {
      navigate('/setup-mentor')
    }
  }

  return (
    <div className='login-form'>
      <div className='login-div'>
        <img className='cube-img' width={49} height={54} src='/src/assets/mentor-cube-2.svg' />
        <h2 className='text-login'>Choose Account type</h2>
        <div className='register--buttons'>
          <ButtonComponent
            onClick={() => setActiveBtn('Startup')}
            className={activeBtn !== 'Startup' ? 'register-button non-active' : 'register-button'}
            text='Startup'
          />
          <ButtonComponent
            onClick={() => setActiveBtn('Mentor')}
            className={activeBtn !== 'Mentor' ? 'register-button non-active' : 'register-button'}
            text='Mentor'
          />
        </div>
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

          <div className='py-2'>
            <span className='checkmark'>
              <img src='/src/assets/checkmark.svg' alt='' />
              Already have account? Login.
            </span>
            <span className='checkmark'>
              <img
                src={
                  flags.emailAndPassword
                    ? '/src/assets/checkmark-active.svg'
                    : '/src/assets/checkmark.svg'
                }
                alt=''
              />
              Cannot contain your email address
            </span>

            <span className='checkmark'>
              <img
                src={
                  flags.least8Char
                    ? '/src/assets/checkmark-active.svg'
                    : '/src/assets/checkmark.svg'
                }
                alt=''
              />
              At least 8 characters
            </span>
            <span className='checkmark'>
              <img
                src={
                  flags.containsNumOrSim
                    ? '/src/assets/checkmark-active.svg'
                    : '/src/assets/checkmark.svg'
                }
                alt=''
              />
              Contains a number or symbol
            </span>
          </div>

          <ButtonComponent
            onClick={handleContinueButton}
            disabled={!flags.containsNumOrSim || !flags.emailAndPassword || !flags.least8Char}
            className='login---button'
            text='Continue'
          />

          <span className='span--register'>
            Don’t have account?{' '}
            <Link className='link-active' to='/login'>
              Login.
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
