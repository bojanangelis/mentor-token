import React, { useState } from 'react'
import DashboardHeader from '../components/DashboardComponents/DashboardHeader'
import FilterJobsComponent from '../components/JobsComponents/FilterJobsComponent'
import jobsData from '../utils/jobs'
import JobCard from '../components/JobsComponents/JobCard'
import Modal from '../components/Modal'
import CustomPortal from '../hooks/customPortal'

const JobsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <DashboardHeader />

      <div
        style={{
          marginTop: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <h2 style={{ color: '#404D61' }}>Startup Open Jobs</h2>

        <FilterJobsComponent />

        <div className='grid grid-col-4 gap-4 pt-4'>
          {jobsData.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              companyName={job.companyName}
              title={job.title}
              description={job.description}
              imageUrl={job.imageUrl}
              ctaText={job.ctaText}
              button='View More'
            />
          ))}
        </div>
      </div>

      <CustomPortal>
        <Modal isOpen={isModalOpen}>
          <JobCard
            key={jobsData[0].id}
            id={jobsData[0].id}
            companyName={jobsData[0].companyName}
            title={jobsData[0].title}
            description={jobsData[0].description}
            imageUrl={jobsData[0].imageUrl}
            ctaText={jobsData[0].ctaText}
            button='Apply'
          />
        </Modal>
      </CustomPortal>
    </div>
  )
}

export default JobsPage
