import React, { useState } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import '../styles/LoginStyle.scss'
import '../styles/SetupStyle.scss'

const SetupMentor = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [mentorName, setMentorName] = useState('')
  const [mentorImage, setMentorImage] = useState('')

  const handleUpdateMentor = async () => {
    try {
      const update = await fetch(`http://localhost:8000/api/users/update/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: mentorName,
          image: mentorImage,
        }),
      })
      const x = await update?.json()
      if (x?.message === 'User updated successfully') {
        navigate('/login')
      }
    } catch (error) {
      console.error(error.message)
    }
  }

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
              value={mentorName}
              onChange={(e) => setMentorName(e.target.value)}
              className='input_con'
              type='text'
              placeholder='My Mentor Name'
            />
          </div>

          <div className='login--input--div my-4'>
            <label className='setup--label'>Mentor Image URL</label>
            <label className='login--label'>Mentor Image URL</label>
            <input
              value={mentorImage}
              onChange={(e) => setMentorImage(e.target.value)}
              className='input_con'
              type='text'
              placeholder='My Mentor Image URL'
            />
          </div>

          <ButtonComponent
            onClick={handleUpdateMentor}
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
