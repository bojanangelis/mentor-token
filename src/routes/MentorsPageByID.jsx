import React, { useEffect, useState } from 'react'
import DashboardHeader from '../components/DashboardComponents/DashboardHeader'
import AboutMentor from '../components/MentorsComponents/AboutMentor'
import AboutMentorCard02 from '../components/MentorsComponents/AboutMentorCard02'
import DashboardBestPerformingMentors from '../components/DashboardComponents/DashboardBestPerformingMentors'
import DashboardAssignedJobs from '../components/DashboardComponents/DashboardAssignedJobs'
import { useParams } from 'react-router-dom'

const MentorsPageByID = () => {
  const { id } = useParams()
  const [user, setUser] = useState()

  useEffect(() => {
    const fetchUser = async () => {
      const x = await fetch(`http://localhost:8000/api/users/${id}`)
      setUser(await x?.json())
    }

    fetchUser()
  }, [])

  console.log(user)

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <DashboardHeader />
      <div style={{ display: 'flex', marginTop: '40px' }}>
        <AboutMentor user={user} />
        <AboutMentorCard02 />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <div className='hide-scroll' style={{ height: 400, overflow: 'scroll', width: '100%' }}>
          <DashboardAssignedJobs className={'dashboardMentors'} />
        </div>

        <div className='children-dashboards'>
          <DashboardBestPerformingMentors />
        </div>
      </div>
      {/* Jobs */}
      {/* DashboardAssignedJobs */}

      {/* offers */}
      {/* DashboardAssignedJobs */}
    </div>
  )
}

export default MentorsPageByID
