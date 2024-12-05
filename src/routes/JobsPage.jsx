import React, { useEffect, useState } from 'react'
import DashboardHeader from '../components/DashboardComponents/DashboardHeader'
import FilterJobsComponent from '../components/JobsComponents/FilterJobsComponent'
import JobCard from '../components/JobsComponents/JobCard'
import Modal from '../components/Modal'
import CustomPortal from '../hooks/customPortal'

const JobsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [jobSelected, setJobSelected] = useState(null)

  const [jobData, setJobData] = useState(null)

  const onClose = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    const fetchJobs = async () => {
      const x = await fetch('http://localhost:8000/api/job')
      setJobData(await x?.json())
    }
    fetchJobs()
  }, [])

  const handleJobOpenModal = (id) => {
    const renderThisJob = jobData?.filter((job) => job._id === id)
    if (renderThisJob?.length > 0) {
      console.log(renderThisJob)
      setJobSelected(renderThisJob[0])
      setIsModalOpen(true)
    }
  }

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
          {jobData?.map((job) => (
            <JobCard
              key={job?._id}
              id={job?._id}
              companyName={job?.companyName}
              company_id={job?.company_id}
              title={job?.title}
              description={job?.description}
              imageUrl={job?.imageUrl}
              ctaText={job?.ctaText}
              isActive={job?.isActive}
              button='View More'
              onClick={handleJobOpenModal}
            />
          ))}
        </div>
      </div>

      <CustomPortal>
        <Modal onClose={onClose} isOpen={isModalOpen}>
          {/* sekogash da stavame ? bidejki ni frla error */}
          <JobCard
            key={jobSelected?.id}
            id={jobSelected?.id}
            companyName={jobSelected?.companyName}
            title={jobSelected?.title}
            description={jobSelected?.description}
            imageUrl={jobSelected?.imageUrl}
            ctaText={jobSelected?.ctaText}
            button='Apply'
          />
        </Modal>
      </CustomPortal>
    </div>
  )
}

export default JobsPage
