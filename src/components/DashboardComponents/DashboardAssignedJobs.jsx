import React from 'react'
import './DashboardStyles.scss'
import { Link } from 'react-router-dom'
import { metricsStatus } from '../../utils/assigned-jobs'

const DashboardAssignedJobs = ({ className }) => {
  return (
    <div className={`AssignedJobsView ${className}`}>
      <div className='assignedJobs--container-links'>
        <h4>Assigned Jobs</h4>
        <nav className='nav--assigned--jobs'>
          <Link to='?tag=All'>All</Link>
          <Link to='?tag=Done'>Done</Link>
          <Link to='?tag=Rejected'>Rejected</Link>
          <Link to='?tag=InProgress'>In Progress</Link>
        </nav>
      </div>
      <div className='cards-job-view'>
        {metricsStatus.map((job, i) => (
          <div className='card--job-view' key={i}>
            <p>{job.metric}</p>
            <span className={job.status === 'IN PROGRESS' ? 'IN_PROGRESS' : job.status}>
              {job.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardAssignedJobs
