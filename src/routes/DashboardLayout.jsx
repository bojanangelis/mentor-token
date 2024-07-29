import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/DashboardLayoutStyles.scss'
import DashboardIcon from '../assets/react-svgs/DashboardIcon'
import MentorsIcon from '../assets/react-svgs/MentorsIcon'
import JobsIcon from '../assets/react-svgs/JobsIcon'

const DashboardLayout = () => {
  return (
    <div className='dashboard--main-layout'>
      <div className='dashboardLayout--component'>
        <div className='dashboard-header'>
          <img width={37} height={37} src='/src/assets/mentor-cube-2.svg' />
          <h2 className='px-2'>Mentor Token</h2>
          <button className='back-button-dashboard-layout'>
            <img src='src/assets/back-button.svg' />
          </button>
        </div>

        <nav className='nav-dashboard'>
          <Link to='/dashboard' className='dashboard-link'>
            <DashboardIcon />
            <h5 className='px-2'>Dashboard</h5>
          </Link>

          <Link to='/mentors' className='dashboard-link'>
            <MentorsIcon />
            <h5 className='px-2'>Mentors</h5>
          </Link>

          <Link to='/jobs' className='dashboard-link'>
            <JobsIcon />
            <h5 className='px-2'>Jobs</h5>
          </Link>
          <button className='logout-button-dashboard'>
            <img className='px-2' src='src/assets/logout-icon.svg' />
            Logout
          </button>
        </nav>
      </div>
      {/* dashboard page */}

      <div className='dashboard-pages-layout'>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
