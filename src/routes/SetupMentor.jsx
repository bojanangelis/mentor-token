import React, { useState } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import { useNavigate } from 'react-router-dom'
import '../styles/LoginStyle.scss'
import '../styles/SetupStyle.scss'

const SetupMentor = () => {
  const navigate = useNavigate()
  const [startupName, setStartupName] = useState('')
  const [password, setPassword] = useState('')
  const [flags, setFlags] = useState({
    emailAndPassword: false,
    least8Char: false,
    containsNumOrSim: false,
  })

  return (
    <div className='login-form'>
      <div className='login-div'>
        <img className='cube-img' width={49} height={54} src='/src/assets/mentor-cube-2.svg' />
        <h2 className='text-login'>Setup Mentor Account</h2>

        <div className='login-inputs'>
          <div className='login--input--div my-4'>
            <label className='setup--label'>Mentor Name</label>
            <label className='login--label'>Mentor Name</label>
            <input
              value={startupName}
              onChange={(e) => setStartupName(e.target.value)}
              className='input_con'
              type='text'
              placeholder='My Mentor Name'
            />
          </div>
          <div className='login--input--div  my-4'>
            <label className='setup--label'>Startup Name</label>
            <label className='login--label'>Startup Name</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='input_con'
              type='text'
              placeholder='Password'
            />
          </div>

          <ButtonComponent
            onClick={() => navigate('/')}
            disabled={!flags.containsNumOrSim || !flags.emailAndPassword || !flags.least8Char}
            className='login---button'
            text='Register'
          />

          <span className='span--register'>
            <input className='checkbox_register' type='checkbox' />
            By signing up to create an account I accept Company’s{' '}
            <span className='link-active'> Terms of use & Privacy Policy.</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SetupMentor
