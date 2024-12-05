import React from 'react'
import '../styles/DashboardPageStyles.scss'
import DashboardHeader from '../components/DashboardComponents/DashboardHeader'
import DashboardAssignedJobs from '../components/DashboardComponents/DashboardAssignedJobs'
import DashboardBestPerformingMentors from '../components/DashboardComponents/DashboardBestPerformingMentors'
import OverallStatisticComponent from '../components/DashboardComponents/OverallStatisticComponent'

const DashboardPage = () => {
  return (
    <div className='dashboard-view'>
      <DashboardHeader />

      <div className='dashboard-container--view'>
        <DashboardAssignedJobs />
        <div className='children-dashboards'>
          <DashboardBestPerformingMentors />
          <OverallStatisticComponent />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
