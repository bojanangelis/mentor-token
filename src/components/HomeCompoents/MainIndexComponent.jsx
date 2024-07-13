import React from 'react'
import './MainIndexStyle.scss'
import ButtonComponent from '../ButtonComponent'
import { Link } from 'react-router-dom'

const MainIndexComponent = () => {
  return (
    <div className='main-index__bg'>
      <div className='main--div__text'>
        <h1>Grow your StartUp! Monitoring and Evaluating now is easy!</h1>
        <p>
          Welcome to Mentor Token, where we redefine the dynamics of start-up success. Our
          innovative platform offers a transformative approach to mentorship, ensuring that mentors
          are not just engaged but motivated to drive the success of the ventures they support.
        </p>
        <div className='main--div__buttons py-2'>
          <ButtonComponent icon='src/assets/arrow-right.svg' text='Get Started' />
          <Link className='link px-2' to='/contact'>
            Get in touch
          </Link>
        </div>
      </div>

      <img
        className='main-laptop__img'
        width={934}
        height={699}
        src='src/assets/laptop.png'
        alt='background'
      />
    </div>
  )
}

export default MainIndexComponent
