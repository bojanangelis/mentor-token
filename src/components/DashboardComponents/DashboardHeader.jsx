import React from 'react'
import './DashboardStyles.scss'

const DashboardHeader = () => {
  return (
    <div className='header-dashboard-component'>
      <div className='input__search--dashboard'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19M22 22l-2-2'
            stroke='#697A8D'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
        <input placeholder='Search Mentor ...' className='input__search--view' />
      </div>

      <div className='techWave--Innovations'>
        <img width={56} height={56} src='src/assets/logout-img.png' />
        <p className='text-tech--wave'>TechWave Innovations</p>
      </div>
    </div>
  )
}

export default DashboardHeader
