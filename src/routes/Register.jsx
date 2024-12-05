import React, { useEffect, useState } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/RegisterStyle.scss'

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [activeBtn, setActiveBtn] = useState('company')
  const [users, setUsers] = useState(null)

  const [flags, setFlags] = useState({
    alreadyHasAccount: false,
    emailAndPassword: false,
    least8Char: false,
    containsNumOrSim: false,
  })

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchData = await fetch('http://localhost:8000/api/users')
      setUsers(await fetchData?.json())
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    const check = /[0-9!-/:-@[-`{-~]/
    const containsNumOrSim = check.test(password)
    const emailAndPassword = email !== password
    const least8Char = password.length >= 8
    const alreadyHasAccount = users?.some((user) => user.email === email)

    // Update flags accordingly
    setFlags({
      ...flags,
      alreadyHasAccount,
      containsNumOrSim,
      emailAndPassword,
      least8Char,
    })
  }, [email, password, users])

  const handleRegisterUserOrCompany = async () => {
    try {
      const register = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          role: activeBtn,
        }),
      })

      const x = await register?.json()

      if (activeBtn === 'company') {
        navigate(`/setup-account/${x._id}`)
      }
      if (activeBtn === 'mentor') {
        navigate(`/setup-mentor/${x._id}`)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='login-form'>
      <div className='login-div'>
        <img className='cube-img' width={49} height={54} src='/src/assets/mentor-cube-2.svg' />
        <h2 className='text-login'>Choose Account type</h2>
        <div className='register--buttons'>
          <ButtonComponent
            onClick={() => setActiveBtn('company')}
            className={activeBtn !== 'company' ? 'register-button non-active' : 'register-button'}
            text='Startup'
          />
          <ButtonComponent
            onClick={() => setActiveBtn('mentor')}
            className={activeBtn !== 'mentor' ? 'register-button non-active' : 'register-button'}
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
              <img
                src={
                  flags.alreadyHasAccount
                    ? '/src/assets/checkmark-active.svg'
                    : '/src/assets/checkmark.svg'
                }
                alt=''
              />
              Already have account?
              {flags.alreadyHasAccount && (
                <Link style={{ textDecoration: 'none', marginLeft: 8 }} to='/login'>
                  {' '}
                  Login.
                </Link>
              )}
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
            onClick={handleRegisterUserOrCompany}
            disabled={
              flags.alreadyHasAccount ||
              !flags.containsNumOrSim ||
              !flags.emailAndPassword ||
              !flags.least8Char
            }
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
