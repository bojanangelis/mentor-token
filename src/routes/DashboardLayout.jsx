import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import '../styles/DashboardLayoutStyles.scss'
import DashboardIcon from '../assets/react-svgs/DashboardIcon'
import MentorsIcon from '../assets/react-svgs/MentorsIcon'
import JobsIcon from '../assets/react-svgs/JobsIcon'
import { jwtDecode } from 'jwt-decode'

const DashboardLayout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const validateToken = () => {
      const token = localStorage.getItem('token')

      if (!token) {
        navigate('/login')
        return
      }

      try {
        const decoded = jwtDecode(token)
        const currentTime = Date.now() / 1000 // Current time in seconds
        const timeLeft = decoded.exp - currentTime // Time left before expiration

        if (timeLeft <= 0) {
          // Token already expired
          localStorage.removeItem('token')
          navigate('/login')
        } else {
          // Set a timeout to log out the user when the token expires
          setTimeout(() => {
            localStorage.removeItem('token')
            navigate('/login')
          }, timeLeft * 1000) // Convert timeLeft to milliseconds
        }
      } catch (error) {
        console.error('Invalid token:', error)
        localStorage.removeItem('token')
        navigate('/login')
      }
    }

    validateToken()
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

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
          <button onClick={handleLogout} className='logout-button-dashboard'>
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
