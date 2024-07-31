import React from 'react'
import DashboardHeader from '../components/DashboardComponents/DashboardHeader'
import AboutMentor from '../components/MentorsComponents/AboutMentor'
import AboutMentorCard02 from '../components/MentorsComponents/AboutMentorCard02'

const MentorsPageByID = () => {
  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <DashboardHeader />
      <div style={{ display: 'flex', marginTop: '40px' }}>
        <AboutMentor />
        <AboutMentorCard02 />
      </div>

      {/* Jobs */}
      {/* DashboardAssignedJobs */}

      {/* offers */}
      {/* DashboardAssignedJobs */}
    </div>
  )
}

export default MentorsPageByID
