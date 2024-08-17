import { useState } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import { useNavigate } from 'react-router-dom'
import '../styles/LoginStyle.scss'
import '../styles/SetupStyle.scss'
import UploadImage from '../components/uploadImg'

const SetupAccount = () => {
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
        <h2 className='text-login'>Setup Startup Account </h2>

        <div className='login-inputs'>
          <UploadImage />
          <div className='login--input--div my-4'>
            <label className='setup--label'>Startup Name</label>
            <label className='login--label'>Startup Name</label>
            <input
              value={startupName}
              onChange={(e) => setStartupName(e.target.value)}
              className='input_con'
              type='text'
              placeholder='My Startup Name'
            />
          </div>
          <div className='login--input--div  my-4'>
            <label className='setup--label'>Legal Representative</label>
            <label className='login--label'>Legal Representative</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='input_con'
              type='text'
              placeholder='Password'
            />
          </div>
          <div className='login--input--div my-4'>
            <label className='setup--label'>Registered Business Address</label>
            <label className='login--label'>Registered Business Address</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='input_con'
              type='text'
              placeholder='Password'
            />
          </div>
          <div className='login--input--div my-4'>
            <label className='setup--label'>Invite Mentors via email</label>
            <label className='login--label'>Invite Mentors via email</label>
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
            By signing up to create an account I accept Company’s Terms of use & Privacy Policy.
          </span>
        </div>
      </div>
    </div>
  )
}

export default SetupAccount
